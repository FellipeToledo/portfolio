import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../components/reveal.directive';
import { SKILLS, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="mx-auto max-w-5xl px-6 py-24 sm:py-32" appReveal>
      <p class="mb-3 font-mono text-sm text-accent-400">// {{ tr(ui.sections.skills, lang()) }}</p>
      <h2 class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
        {{ tr(ui.sections.skills, lang()) }}
      </h2>

      <div class="grid gap-6 sm:grid-cols-2">
        @for (group of skills; track group.label.en) {
          <div
            class="rounded-2xl border border-white/10 bg-space-850/50 p-6
                   transition-colors hover:border-accent-500/40"
          >
            <h3 class="mb-4 font-mono text-sm font-semibold text-ink-100">
              {{ tr(group.label, lang()) }}
            </h3>
            <ul class="flex flex-wrap gap-2">
              @for (item of group.items; track item) {
                <li
                  class="rounded-full border border-white/10 bg-space-800/60 px-3 py-1
                         text-sm text-ink-300"
                >
                  {{ item }}
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
})
export class Skills {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly skills = SKILLS;
  protected readonly ui = UI;
}
