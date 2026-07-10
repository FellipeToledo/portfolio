import {
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  viewChild,
} from '@angular/core';

interface Star {
  x: number;
  y: number;
  z: number; // profundidade (0..1) — controla tamanho, brilho e velocidade
  tw: number; // fase do cintilar
}

/**
 * Fundo animado de campo de estrelas em <canvas>.
 * - Leve (sem bibliotecas), com deriva suave e cintilar.
 * - Reage ao mouse com um leve parallax.
 * - Respeita prefers-reduced-motion (desenha estrelas estáticas).
 */
@Component({
  selector: 'app-starfield',
  template: `<canvas #canvas class="fixed inset-0 -z-10 h-full w-full"></canvas>`,
})
export class Starfield implements OnDestroy {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private raf = 0;
  private w = 0;
  private h = 0;
  private dpr = 1;
  private mouseX = 0;
  private mouseY = 0;
  private reduced = false;

  private readonly onResize = () => this.resize();
  private readonly onMouse = (e: MouseEvent) => {
    this.mouseX = (e.clientX / this.w - 0.5) * 2;
    this.mouseY = (e.clientY / this.h - 0.5) * 2;
  };

  constructor() {
    afterNextRender(() => {
      const canvas = this.canvasRef().nativeElement;
      this.ctx = canvas.getContext('2d')!;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.resize();
      window.addEventListener('resize', this.onResize);
      window.addEventListener('mousemove', this.onMouse);

      if (this.reduced) {
        this.draw();
      } else {
        this.loop();
      }
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouse);
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    canvas.width = this.w * this.dpr;
    canvas.height = this.h * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    const count = Math.min(220, Math.floor((this.w * this.h) / 9000));
    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      z: Math.random(),
      tw: Math.random() * Math.PI * 2,
    }));
    if (this.reduced) this.draw();
  }

  private loop(): void {
    this.update();
    this.draw();
    this.raf = requestAnimationFrame(() => this.loop());
  }

  private update(): void {
    for (const s of this.stars) {
      // deriva lenta para cima; estrelas mais próximas (z alto) andam mais rápido
      s.y -= 0.05 + s.z * 0.25;
      s.tw += 0.02 + s.z * 0.03;
      if (s.y < -2) {
        s.y = this.h + 2;
        s.x = Math.random() * this.w;
      }
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);

    for (const s of this.stars) {
      const size = 0.4 + s.z * 1.6;
      const twinkle = this.reduced ? 1 : 0.5 + 0.5 * Math.sin(s.tw);
      const alpha = (0.25 + s.z * 0.75) * twinkle;
      const px = s.x + this.mouseX * s.z * 12;
      const py = s.y + this.mouseY * s.z * 12;

      // estrelas mais próximas puxam para o ciano
      const tint = s.z > 0.75 ? '56, 189, 248' : '230, 237, 247';
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${tint}, ${alpha})`;
      ctx.fill();
    }
  }
}
