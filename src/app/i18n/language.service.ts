import { Injectable, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'portfolio-lang';

/**
 * Serviço simples de idioma (bilíngue PT/EN) baseado em signals.
 * Persiste a escolha no localStorage e expõe `lang()` reativo.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitial());

  toggle(): void {
    this.set(this.lang() === 'pt' ? 'en' : 'pt');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
  }

  private readInitial(): Lang {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    }
    if (typeof navigator !== 'undefined' && navigator.language?.startsWith('en')) {
      return 'en';
    }
    return 'pt';
  }
}
