import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { PROFILE, UI, tr } from '../../i18n/content';

/**
 * Barra de navegação fixa no topo, com links de âncora e botão PT/EN.
 */
@Component({
  selector: 'app-nav',
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-md
             bg-space-950/70 transition-colors"
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" class="font-mono text-sm font-semibold tracking-tight">
          <span class="text-gradient">{{ initials }}</span>
          <span class="text-ink-500">/dev</span>
        </a>

        <ul class="hidden items-center gap-8 text-sm text-ink-300 md:flex">
          @for (link of links; track link.id) {
            <li>
              <a
                [href]="'#' + link.id"
                class="transition-colors hover:text-accent-400"
              >{{ tr(link.label, lang()) }}</a>
            </li>
          }
        </ul>

        <button
          type="button"
          (click)="language.toggle()"
          class="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs
                 font-semibold text-ink-100 transition-colors hover:border-accent-500
                 hover:text-accent-400"
          [attr.aria-label]="lang() === 'pt' ? 'Switch to English' : 'Mudar para português'"
        >
          {{ lang() === 'pt' ? 'EN' : 'PT' }}
        </button>
      </nav>
    </header>
  `,
})
export class Nav {
  protected readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly initials = PROFILE.name
    .split(' ')
    .map((p) => p[0])
    .join('');

  protected readonly links = [
    { id: 'about', label: UI.nav.about },
    { id: 'skills', label: UI.nav.skills },
    { id: 'projects', label: UI.nav.projects },
    { id: 'experience', label: UI.nav.experience },
    { id: 'contact', label: UI.nav.contact },
  ];
}
