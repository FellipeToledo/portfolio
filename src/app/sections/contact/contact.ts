import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../components/reveal.directive';
import { PROFILE, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  template: `
    <section id="contact" class="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32" appReveal>
      <p class="mb-3 font-mono text-sm text-accent-400">// {{ tr(ui.sections.contact, lang()) }}</p>
      <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
        {{ tr(ui.sections.contact, lang()) }}
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg text-ink-300">{{ tr(ui.contact.intro, lang()) }}</p>

      <a
        [href]="'mailto:' + profile.email"
        class="mt-10 inline-block rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold
               text-space-950 transition-transform hover:scale-105 hover:bg-accent-400"
      >
        {{ tr(ui.contact.emailBtn, lang()) }}
      </a>

      <div class="mt-10 flex items-center justify-center gap-6 text-sm text-ink-300">
        <a [href]="profile.social.github" target="_blank" rel="noopener"
           class="transition-colors hover:text-accent-400">GitHub</a>
        <span class="text-ink-500" aria-hidden="true">·</span>
        <a [href]="profile.social.linkedin" target="_blank" rel="noopener"
           class="transition-colors hover:text-accent-400">LinkedIn</a>
        <span class="text-ink-500" aria-hidden="true">·</span>
        <a [href]="'mailto:' + profile.email"
           class="transition-colors hover:text-accent-400">{{ profile.email }}</a>
      </div>
    </section>
  `,
})
export class Contact {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly profile = PROFILE;
  protected readonly ui = UI;
}
