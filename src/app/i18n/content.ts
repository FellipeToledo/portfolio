import { Lang } from './language.service';

/**
 * Todo o conteúdo do site em PT e EN fica aqui — é só editar estes textos
 * para personalizar o portfólio. Nenhum outro arquivo precisa ser tocado.
 *
 * Os campos marcados como { pt, en } têm as duas versões do texto.
 */

export interface Bilingual {
  pt: string;
  en: string;
}

export interface Project {
  title: Bilingual;
  description: Bilingual;
  tags: string[];
  repo?: string;
  demo?: string;
}

export interface Experience {
  role: Bilingual;
  org: string;
  period: Bilingual;
  description: Bilingual;
}

export interface SkillGroup {
  label: Bilingual;
  items: string[];
}

/** Helper: escolhe o texto no idioma atual. */
export const tr = (value: Bilingual, lang: Lang): string => value[lang];

/* -------------------------------------------------------------------------- */
/*  DADOS PESSOAIS — troque pelos seus                                        */
/* -------------------------------------------------------------------------- */

export const PROFILE = {
  name: 'Fellipe Toledo',
  role: {
    pt: 'Cientista de Dados',
    en: 'Data Scientist',
  } as Bilingual,
  tagline: {
    pt: 'Explorando dados e o cosmos — transformando números em decisões.',
    en: 'Exploring data and the cosmos — turning numbers into decisions.',
  } as Bilingual,
  email: 'fellipetoledo.dev@gmail.com',
  location: {
    pt: 'Rio de Janeiro, Brasil',
    en: 'Rio de Janeiro, Brazil',
  } as Bilingual,
  social: {
    github: 'https://github.com/FellipeToledo',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const ABOUT: Bilingual[] = [
  {
    pt: 'Sou cientista de dados apaixonado por encontrar padrões onde os outros veem ruído. Trabalho com machine learning, estatística e visualização para transformar dados brutos em histórias e decisões.',
    en: 'I am a data scientist passionate about finding patterns where others see noise. I work with machine learning, statistics and visualization to turn raw data into stories and decisions.',
  },
  {
    pt: 'Nas horas vagas, aponto o telescópio para o céu: astronomia é meu hobby e a fonte de inspiração para a forma como olho para grandes conjuntos de dados — sempre com curiosidade pelo que há além do visível.',
    en: 'In my free time, I point the telescope to the sky: astronomy is my hobby and the inspiration for how I look at large datasets — always curious about what lies beyond the visible.',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: { pt: 'Linguagens', en: 'Languages' },
    items: ['Python', 'SQL', 'R', 'TypeScript'],
  },
  {
    label: { pt: 'Machine Learning', en: 'Machine Learning' },
    items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost'],
  },
  {
    label: { pt: 'Dados & Viz', en: 'Data & Viz' },
    items: ['Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Power BI'],
  },
  {
    label: { pt: 'Infra & Ferramentas', en: 'Infra & Tools' },
    items: ['Docker', 'Git', 'PostgreSQL', 'Spark', 'AWS'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: {
      pt: 'Classificador de Galáxias',
      en: 'Galaxy Classifier',
    },
    description: {
      pt: 'Rede neural convolucional que classifica galáxias por morfologia a partir de imagens do Galaxy Zoo. Acurácia de 94% no conjunto de teste.',
      en: 'Convolutional neural network that classifies galaxies by morphology from Galaxy Zoo images. 94% accuracy on the test set.',
    },
    tags: ['Python', 'PyTorch', 'CNN', 'Astronomia'],
    repo: 'https://github.com/FellipeToledo',
  },
  {
    title: {
      pt: 'Previsão de Séries Temporais',
      en: 'Time Series Forecasting',
    },
    description: {
      pt: 'Pipeline de previsão de demanda com modelos ARIMA e LSTM, reduzindo o erro de estoque em 30% em um cenário de varejo.',
      en: 'Demand forecasting pipeline with ARIMA and LSTM models, cutting inventory error by 30% in a retail scenario.',
    },
    tags: ['Python', 'LSTM', 'Forecasting'],
    repo: 'https://github.com/FellipeToledo',
  },
  {
    title: {
      pt: 'Dashboard de Exoplanetas',
      en: 'Exoplanet Dashboard',
    },
    description: {
      pt: 'Painel interativo que explora o catálogo da NASA de exoplanetas, com filtros por habitabilidade, distância e método de detecção.',
      en: 'Interactive dashboard exploring NASA\'s exoplanet catalog, with filters by habitability, distance and detection method.',
    },
    tags: ['Plotly', 'Dados Abertos', 'Astronomia'],
    demo: 'https://fellipetoledo.vercel.app',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: { pt: 'Cientista de Dados', en: 'Data Scientist' },
    org: 'Empresa Exemplo',
    period: { pt: '2023 — Atual', en: '2023 — Present' },
    description: {
      pt: 'Desenvolvimento de modelos preditivos e pipelines de dados para apoiar decisões de negócio.',
      en: 'Building predictive models and data pipelines to support business decisions.',
    },
  },
  {
    role: { pt: 'Analista de Dados', en: 'Data Analyst' },
    org: 'Outra Empresa',
    period: { pt: '2021 — 2023', en: '2021 — 2023' },
    description: {
      pt: 'Análises exploratórias, dashboards e automação de relatórios para times de produto.',
      en: 'Exploratory analysis, dashboards and report automation for product teams.',
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  RÓTULOS DA INTERFACE                                                       */
/* -------------------------------------------------------------------------- */

export const UI = {
  nav: {
    about: { pt: 'Sobre', en: 'About' },
    skills: { pt: 'Skills', en: 'Skills' },
    projects: { pt: 'Projetos', en: 'Projects' },
    experience: { pt: 'Experiência', en: 'Experience' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    ctaProjects: { pt: 'Ver projetos', en: 'View projects' },
    ctaContact: { pt: 'Entrar em contato', en: 'Get in touch' },
    scroll: { pt: 'Role para explorar', en: 'Scroll to explore' },
  },
  sections: {
    about: { pt: 'Sobre mim', en: 'About me' },
    skills: { pt: 'Tecnologias', en: 'Tech stack' },
    projects: { pt: 'Projetos em destaque', en: 'Featured projects' },
    experience: { pt: 'Trajetória', en: 'Journey' },
    contact: { pt: 'Vamos conversar', en: 'Let\'s talk' },
  },
  contact: {
    intro: {
      pt: 'Aberto a novas oportunidades e colaborações. Me mande uma mensagem!',
      en: 'Open to new opportunities and collaborations. Drop me a message!',
    },
    emailBtn: { pt: 'Enviar e-mail', en: 'Send email' },
  },
  footer: {
    built: {
      pt: 'Feito com Angular & Tailwind, hospedado na Vercel.',
      en: 'Built with Angular & Tailwind, hosted on Vercel.',
    },
  },
} satisfies Record<string, Record<string, Bilingual>>;
