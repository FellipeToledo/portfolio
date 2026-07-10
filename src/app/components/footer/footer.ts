import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { PROFILE, UI, tr } from '../../i18n/content';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-white/5 px-6 py-10 text-center">
      <p class="font-mono text-xs text-ink-500">
        © {{ year }} {{ profile.name }} · {{ tr(ui.footer.built, lang()) }}
      </p>
    </footer>
  `,
})
export class Footer {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly tr = tr;
  protected readonly profile = PROFILE;
  protected readonly ui = UI;
  protected readonly year = new Date().getFullYear();
}
