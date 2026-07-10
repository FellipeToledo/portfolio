import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { PROFILE, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-hero',
  template: `
    <section
      id="top"
      class="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-4 font-mono text-sm text-accent-400">
          &lt;{{ tr(profile.role, lang()) }} /&gt;
        </p>

        <h1 class="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          {{ profile.name.split(' ')[0] }}
          <span class="text-gradient">{{ profile.name.split(' ').slice(1).join(' ') }}</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-lg text-ink-300">
          {{ tr(profile.tagline, lang()) }}
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            class="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-space-950
                   transition-transform hover:scale-105 hover:bg-accent-400"
          >
            {{ tr(ui.hero.ctaProjects, lang()) }}
          </a>
          <a
            href="#contact"
            class="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold
                   text-ink-100 transition-colors hover:border-accent-500 hover:text-accent-400"
          >
            {{ tr(ui.hero.ctaContact, lang()) }}
          </a>
        </div>
      </div>

      <a
        href="#about"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-500
               transition-colors hover:text-accent-400"
      >
        {{ tr(ui.hero.scroll, lang()) }}
        <span class="mt-1 block text-center text-lg" aria-hidden="true">↓</span>
      </a>
    </section>
  `,
})
export class Hero {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly profile = PROFILE;
  protected readonly ui = UI;
}
