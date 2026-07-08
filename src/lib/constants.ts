export const BUSINESS = {
  name: "Maycon Douglas",
  fullName: "Maycon Douglas de Oliveira Viana",
  title: "Marketing Digital & Desenvolvimento Full Stack",
  tagline:
    "Transformando ideias em produtos escaláveis e impulsionando negócios através de tecnologia SaaS e estratégias digitais de alta conversão.",
  description:
    "Desenvolvedor Full Stack e Especialista em Marketing Digital. Criação de plataformas SaaS, gestão de tráfego pago, copywriting e automação de vendas. Soluções completas de tecnologia e crescimento para o seu negócio.",
  aboutText: [
    "Sou um profissional que une o melhor de dois mundos: o desenvolvimento de software e a estratégia comercial. Com sólida vivência na criação de sistemas SaaS, gestão de tráfego, copywriting e estratégias digitais, meu foco é utilizar a tecnologia para impulsionar o crescimento de negócios.",
    "Aplico meu conhecimento como Desenvolvedor Full Stack e Especialista em Marketing e Vendas para criar soluções robustas, alavancar vendas, otimizar processos e fortalecer o relacionamento com os clientes. Sou apaixonado por transformar ideias complexas em produtos reais e eficientes.",
  ],
  email: "maycon.fox150@gmail.com",
  phone: "(22) 99788-5784",
  whatsapp: "5522997885784",
  address: {
    city: "Rio de Janeiro",
    state: "RJ",
    country: "BR",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$",
  social: {
    github: "https://github.com/maycondouglas",
    linkedin: "https://linkedin.com/in/maycondouglas",
    instagram: "https://instagram.com/maycondouglas",
  },
  url: "https://maycondouglas.dev",
} as const;

export const QUALITIES = [
  {
    id: "vision",
    title: "Visão Estratégica e Empreendedorismo",
    description:
      "Fundador de SaaS, transformando ideias em produtos funcionais e rentáveis.",
    icon: "rocket",
  },
  {
    id: "innovation",
    title: "Inovação e Desenvolvimento",
    description:
      "Liderança técnica na criação de soluções SaaS, atuando como Full Stack e integrando Inteligência Artificial aos negócios.",
    icon: "brain",
  },
  {
    id: "problem-solving",
    title: "Resolução de Problemas",
    description:
      "Identificação rápida e implementação de soluções que atendem necessidades tanto técnicas quanto de negócio.",
    icon: "target",
  },
  {
    id: "security",
    title: "Segurança e Qualidade",
    description:
      "Foco no desenvolvimento de sistemas web robustos, escaláveis e seguros.",
    icon: "shield",
  },
  {
    id: "client-focus",
    title: "Foco no Cliente e Resultados",
    description:
      "Capacidade de traduzir requisitos complexos em funcionalidades eficazes e de alto impacto.",
    icon: "users",
  },
] as const;

export const SKILLS_FRONTEND = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Radix UI / shadcn/ui",
  "UX/UI Design",
  "Design Responsivo & Mobile-First",
  "Design System & Componentização",
] as const;

export const SKILLS_BACKEND = [
  "Node.js / Express",
  "PostgreSQL",
  "Prisma ORM",
  "Supabase (BaaS)",
  "Docker & Docker Compose",
  "Deploy VPS (Linux/Ubuntu/PM2)",
  "Arquitetura SaaS Multi-Tenant",
  "Autenticação & RBAC (RLS)",
  "API REST & Webhooks",
  "Stripe (Billing & Subscriptions)",
] as const;

export const SKILLS_AI = [
  "Google Gemini API",
  "OpenAI GPT-4o",
  "Ollama (LLMs Locais)",
  "Sistemas Multi-Agente (C-Suite IA)",
  "RAG (Retrieval-Augmented Generation)",
  "OCR & Extração Inteligente de Dados",
  "Automação com IA (Bots & Workflows)",
  "Análise de Dados com IA (RadBERT)",
] as const;

export const SKILLS_MARKETING = [
  "Google Ads (Certificado)",
  "Meta Ads (Facebook/Instagram)",
  "Gestão de Tráfego Pago",
  "SEO & Otimização de Conversão",
  "Copywriting Persuasivo",
  "Automação de Vendas & CRM",
  "Funis de Conversão",
  "Growth Hacking & Analytics",
] as const;

export const EXPERIENCE = [
  {
    id: 1,
    company: "Helder System Clinic",
    role: "Founder & Desenvolvedor Full Stack",
    period: "2025 — 2026 (Atualmente)",
    description:
      "Plataforma SaaS Multi-Tenant de gestão para clínicas de medicina integrativa, emagrecimento e estética.",
    highlights: [
      "Arquitetura completa do produto: 20 módulos, 210+ componentes, 42+ serviços e 45+ tabelas",
      "Dashboard inteligente multi-clínica com prontuário eletrônico e prescrições médicas",
      "IA avançada (Gemini + RadBERT) para análise de laudos e suporte à decisão clínica",
      "Billing SaaS com Stripe: assinaturas, onboarding self-service e painel SuperAdmin com métricas MRR/Churn",
      "Gestão completa: agendamentos, estoque, equipamentos, financeiro e relatórios",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "Stripe", "Gemini AI", "Tailwind CSS"],
    current: true,
  },
  {
    id: 2,
    company: "Helder Assistente IA",
    role: "Criador & Arquiteto de IA",
    period: "2025 — 2026 (Atualmente)",
    description:
      "Sistema multi-agente de IA que atua como C-Suite virtual, automatizando decisões estratégicas e operacionais.",
    highlights: [
      "8 agentes C-Suite especializados (CEO, CTO, CMO, CFO, COO, CSO) operando em produção",
      "Command Center web com dashboard de analytics, CRM e gestão de tarefas em tempo real",
      "Bot do Telegram para acesso mobile com processamento de linguagem natural",
      "Base de conhecimento RAG para decisões contextualizadas e captação de leads automatizada",
      "Monitoramento de custos, tokens e performance dos agentes",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Docker", "Ollama", "LLM Local", "Telegram API", "shadcn/ui"],
    current: true,
  },
  {
    id: 3,
    company: "APR Pro",
    role: "Criador & Desenvolvedor Full Stack",
    period: "2025 — 2026",
    description:
      "SaaS multi-tenant para geração automatizada de Análise Preliminar de Risco (APR) com Inteligência Artificial para profissionais de Segurança do Trabalho.",
    highlights: [
      "Motor de geração de APR com IA GPT-4o em tempo real via streaming (SSE)",
      "Ciclo de vida completo do documento: Draft → Review → Approved → Archived",
      "Sistema RBAC com 4 níveis de acesso (Owner, Admin, Tech, Viewer)",
      "Templates customizados para reuso e padronização B2B",
      "3 planos SaaS (Free, Pro, Enterprise) com billing via Stripe",
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "OpenAI GPT-4o", "Zod", "React Query", "Tailwind CSS"],
    current: false,
  },
  {
    id: 4,
    company: "Currículo Pro IA",
    role: "Criador & Desenvolvedor Full Stack",
    period: "2025 — 2026",
    description:
      "Aplicação que transforma a Carteira de Trabalho Digital (CTPS) ou currículo antigo em documento profissional moderno com IA.",
    highlights: [
      "Upload de PDF/PNG/JPG com extração automática de dados via IA em menos de 3 minutos",
      "Editor com preview em tempo real e múltiplos templates de design profissional",
      "IA que refina resumo e descrições de experiência com linguagem otimizada para processos seletivos",
      "Score de qualidade do currículo com sugestões de melhoria",
      "Exportação em PDF de alta qualidade pronto para candidaturas",
    ],
    tech: ["Next.js", "TypeScript", "Google Gemini AI", "OCR", "Tailwind CSS"],
    current: false,
  },
  {
    id: 5,
    company: "Helder App",
    role: "Desenvolvedor Full Stack",
    period: "2025 — 2026",
    description:
      "Aplicação mobile com inteligência artificial Gemini para assistência inteligente no ecossistema Helder System.",
    highlights: [
      "Interface conversacional com Google Gemini para consultas e suporte inteligente",
      "Processamento de linguagem natural integrado ao ecossistema de saúde",
      "Experiência mobile-first otimizada para profissionais de saúde",
    ],
    tech: ["Node.js", "Google Gemini API", "AI Studio"],
    current: false,
  },
  {
    id: 6,
    company: "Pousada Portugueza",
    role: "Consultor Digital & Desenvolvedor",
    period: "2024 — 2025",
    description:
      "Planejamento estratégico digital completo e desenvolvimento de sistema de gestão de reservas para pousada no litoral do RJ.",
    highlights: [
      "Análise SWOT completa do negócio com definição de 12+ KPIs estratégicos",
      "Campanhas de Google Ads e Meta Ads com segmentação geográfica (Grussaí/SJB)",
      "Sistema próprio de gestão de reservas estilo Airbnb com motor de reservas online",
      "Otimização SEO + Google Meu Negócio + integração com OTAs (Booking, Airbnb)",
      "Landing page otimizada para conversão + CRM de hóspedes e inquilinos",
    ],
    tech: ["Google Ads", "Meta Ads", "SEO", "WordPress", "Google Meu Negócio", "WhatsApp Business"],
    current: false,
  },
  {
    id: 7,
    company: "MD Mercado Digital",
    role: "Agência e Consultoria Digital",
    period: "2020 — 2025",
    description:
      "Gerenciamento de projetos de marketing digital e desenvolvimento web focados em pequenas e médias empresas (PMEs).",
    highlights: [
      "Criação de estratégias digitais completas (análise SWOT, KPIs, funis de conversão)",
      "Gestão de tráfego pago no Google Ads e Meta Ads com otimização contínua",
      "Copywriting persuasivo e desenvolvimento de sites e landing pages otimizadas para SEO",
      "Estruturação de automações de vendas e CRM para retenção de clientes",
    ],
    tech: ["Google Ads", "Meta Ads", "SEO", "WordPress", "Copywriting", "WhatsApp Business"],
    current: false,
  },
  {
    id: 8,
    company: "Fox Games",
    role: "Vendas e Atendimento",
    period: "2012 — 2015 | 2018 — 2020",
    description:
      "Atuação direta com o público na venda de produtos de entretenimento digital e físico.",
    highlights: [
      "Foco no alcance e superação de metas comerciais",
      "Desenvolvimento de relações de confiança duradouras com consumidores",
      "Atendimento altamente personalizado e consultivo",
    ],
    tech: ["Vendas", "Atendimento", "Metas Comerciais"],
    current: false,
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: "Certificação Oficial em Google Ads",
    issuer: "Google",
    icon: "badge",
  },
  {
    name: "Certificação Oficial em Meta Ads",
    issuer: "Meta",
    icon: "badge",
  },
  {
    name: "Curso Especializado em SEO e Web Design",
    issuer: "Especialização",
    icon: "badge",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Cliente Helder System",
    role: "Profissional de Saúde",
    company: "Clínica Integrativa",
    content:
      "O sistema de gestão que o Maycon desenvolveu transformou completamente a organização da minha clínica. Tudo integrado, com pagamentos automatizados e IA para otimizar processos.",
    rating: 5,
  },
  {
    id: 2,
    name: "Empresário PME",
    role: "Dono de Negócio",
    company: "MD Mercado Digital",
    content:
      "A estratégia digital que o Maycon montou para minha empresa triplicou meus leads em 3 meses. Google Ads bem configurado, landing pages que convertem e um funil de vendas que funciona de verdade.",
    rating: 5,
  },
  {
    id: 3,
    name: "Parceiro de Negócios",
    role: "Co-founder",
    company: "Startup Tech",
    content:
      "Trabalhar com o Maycon é ter a certeza de que o projeto será entregue com qualidade. Ele entende tanto a parte técnica quanto a comercial, o que é raro de encontrar.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quais serviços você oferece?",
    answer:
      "Ofereço desenvolvimento Full Stack (plataformas SaaS, sites, apps web) e serviços de Marketing Digital (gestão de tráfego pago no Google Ads e Meta Ads, copywriting, SEO, automação de vendas e funis de conversão). Posso atuar em uma ou ambas as frentes conforme a necessidade do seu projeto.",
  },
  {
    question: "Qual a sua experiência com desenvolvimento SaaS?",
    answer:
      "Sou fundador do Helder System, um software de gestão clínica integrativa que desenvolvi do zero. Domino a arquitetura multi-tenant, integração de IA (Gemini), automação de pagamentos via Stripe/Cakto, e todo o ecossistema React + Node.js + PostgreSQL.",
  },
  {
    question: "Como funciona a gestão de tráfego pago?",
    answer:
      "Crio e gerencio campanhas no Google Ads e Meta Ads (Facebook/Instagram) focadas em resultados. Inclui pesquisa de palavras-chave, criação de anúncios, segmentação de público, otimização contínua e relatórios de performance. O objetivo é maximizar seu ROI.",
  },
  {
    question: "Qual o prazo médio de entrega de um projeto?",
    answer:
      "Landing pages e sites institucionais: 1 a 2 semanas. Aplicações web e plataformas SaaS: 4 a 12 semanas, dependendo da complexidade. Campanhas de tráfego pago: setup em 3 a 5 dias, com otimização contínua. Sempre alinhamos expectativas antes de iniciar.",
  },
  {
    question: "Você oferece suporte após a entrega?",
    answer:
      "Sim! Ofereço 30 dias de suporte gratuito para correção de bugs e ajustes. Para campanhas de marketing, trabalho com contratos mensais de gestão contínua. Também disponibilizo planos de manutenção para sistemas e sites.",
  },
  {
    question: "Qual o investimento para um projeto?",
    answer:
      "Cada projeto é único. O investimento varia conforme escopo, complexidade e prazo. Entre em contato pelo WhatsApp ou formulário para uma conversa sem compromisso e receba um orçamento personalizado.",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
] as const;
