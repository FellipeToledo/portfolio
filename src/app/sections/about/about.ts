import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../components/reveal.directive';
import { ABOUT, PROFILE, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="mx-auto max-w-4xl px-6 py-24 sm:py-32" appReveal>
      <p class="mb-3 font-mono text-sm text-accent-400">// {{ tr(ui.sections.about, lang()) }}</p>

      <div class="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
        <div
          class="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border
                 border-white/10 bg-space-850/60 text-5xl"
          aria-hidden="true"
        >
          🔭
        </div>

        <div class="space-y-4 text-lg leading-relaxed text-ink-300">
          @for (para of about; track $index) {
            <p>{{ tr(para, lang()) }}</p>
          }
          <p class="pt-2 font-mono text-sm text-ink-500">📍 {{ tr(profile.location, lang()) }}</p>
        </div>
      </div>
    </section>
  `,
})
export class About {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly about = ABOUT;
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
}
