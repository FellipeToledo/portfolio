import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../components/reveal.directive';
import { PROJECTS, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  template: `
    <section id="projects" class="mx-auto max-w-6xl px-6 py-24 sm:py-32" appReveal>
      <p class="mb-3 font-mono text-sm text-accent-400">// {{ tr(ui.sections.projects, lang()) }}</p>
      <h2 class="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
        {{ tr(ui.sections.projects, lang()) }}
      </h2>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (project of projects; track project.title.en) {
          <article
            class="group flex flex-col rounded-2xl border border-white/10 bg-space-850/50 p-6
                   transition-all hover:-translate-y-1 hover:border-accent-500/50
                   hover:shadow-[0_0_40px_-12px] hover:shadow-accent-500/40"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <h3 class="text-lg font-semibold text-ink-100">{{ tr(project.title, lang()) }}</h3>
              <div class="flex shrink-0 gap-3 text-ink-500">
                @if (project.repo) {
                  <a [href]="project.repo" target="_blank" rel="noopener"
                     class="transition-colors hover:text-accent-400" aria-label="GitHub">↗ code</a>
                }
                @if (project.demo) {
                  <a [href]="project.demo" target="_blank" rel="noopener"
                     class="transition-colors hover:text-accent-400" aria-label="Demo">↗ demo</a>
                }
              </div>
            </div>

            <p class="flex-1 text-sm leading-relaxed text-ink-300">
              {{ tr(project.description, lang()) }}
            </p>

            <ul class="mt-5 flex flex-wrap gap-2">
              @for (tag of project.tags; track tag) {
                <li class="rounded-md bg-accent-500/10 px-2 py-1 font-mono text-xs text-accent-400">
                  {{ tag }}
                </li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
})
export class Projects {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly projects = PROJECTS;
  protected readonly ui = UI;
}
