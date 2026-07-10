import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Diretiva que revela o elemento com fade/slide quando ele entra na viewport.
 * Uso: <section appReveal>...</section>
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement as HTMLElement;
      node.classList.add('reveal');

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              io.unobserve(node);
            }
          }
        },
        { threshold: 0.15 },
      );
      io.observe(node);
    });
  }
}
