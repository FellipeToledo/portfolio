import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../components/reveal.directive';
import { EXPERIENCES, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience" class="mx-auto max-w-4xl px-6 py-24 sm:py-32" appReveal>
      <p class="mb-3 font-mono text-sm text-accent-400">// {{ tr(ui.sections.experience, lang()) }}</p>
      <h2 class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
        {{ tr(ui.sections.experience, lang()) }}
      </h2>

      <ol class="relative border-l border-white/10">
        @for (exp of experiences; track exp.org) {
          <li class="mb-10 ml-6 last:mb-0">
            <span
              class="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent-500
                     ring-4 ring-space-950"
              aria-hidden="true"
            ></span>
            <p class="font-mono text-xs text-ink-500">{{ tr(exp.period, lang()) }}</p>
            <h3 class="mt-1 text-lg font-semibold text-ink-100">
              {{ tr(exp.role, lang()) }}
              <span class="text-accent-400">· {{ exp.org }}</span>
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-300">{{ tr(exp.description, lang()) }}</p>
          </li>
        }
      </ol>
    </section>
  `,
})
export class Experience {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly experiences = EXPERIENCES;
  protected readonly ui = UI;
}
