/* ============================================================
   i18n — Translations & Language Management
   ============================================================ */
const TRANSLATIONS = {
  en: {
    /* Landing */
    "landing.eyebrow": "— Portfolio —",
    "btn.start": "Start",
    "btn.settings": "Settings",

    /* Modal tabs */
    "tab.profile": "Profile",
    "tab.projects": "Projects",
    "tab.creative": "Creative",
    "tab.skills": "Skills",
    "tab.contact": "Contact",

    /* Profile */
    "profile.label": "Character",
    "profile.class": "Software Engineer · Creative Operator",
    "profile.xp.label": "EXP",
    "profile.xp.value": "Lv. 26",
    "profile.bio.label": "// profile.txt",
    "profile.bio.text":
      "Hello there! I'm Guilherme Schilling, Software Engineering student and professional with 2+ years of experience across both web development and digital content production. Building web applications using modern technologies like React, TypeScript, and Node.js, alongside hands-on experience managing digital assets, video editing, and branding.",
    "profile.stat.years": "Years Exp",
    "profile.stat.projects": "Projects",
    "profile.stat.languages": "Languages",
    "profile.stat.curiosity": "Curiosity",

    /* Projects */
    "projects.heading": "Project Log",
    "projects.placeholder": "Select a project to view details",

    /* Creative */
    "creative.heading": "— Commission Log —",
    "creative.card1.type": "Video Editing",
    "creative.card1.title": "Social & Promotional",
    "creative.card1.item1": "Short-form social media content",
    "creative.card1.item2": "Promotional and product videos",
    "creative.card1.item3": "Beat-synced cuts and music-driven pacing",
    "creative.card1.item4": "Engaging hooks and retention edits",
    "creative.card2.type": "Video Editing",
    "creative.card2.title": "Content & Storytelling",
    "creative.card2.item1": "Talking-head and interview-style videos",
    "creative.card2.item2": "Marketing-focused captions and subtitles",
    "creative.card2.item3": "Narrative pacing and story direction",
    "creative.card2.item4": "Dynamic cuts and voice enhancement",
    "creative.card3.type": "Image & Branding",
    "creative.card3.title": "Image & Branding",
    "creative.card3.item1": "Image enhancement and color correction",
    "creative.card3.item2": "Property photos with logo watermarking",
    "creative.card3.item3": "Basic typography and visual identity",
    "creative.card3.item4": "Brand asset creation and management",
    "creative.card4.type": "Workspace & Ops",
    "creative.card4.title": "Google Workspace & Ops",
    "creative.card4.item1": "Google Workspace setup and file management",
    "creative.card4.item2": "Spreadsheet structuring and automation",
    "creative.card4.item3": "Data organization and workflow design",
    "creative.card4.item4": "Sheets/Excel as a lightweight site database",

    /* Skills */
    "skills.dev.heading": "Development",
    "skills.dev.frontend": "Frontend",
    "skills.dev.backend": "Backend",
    "skills.dev.databases": "Databases",
    "skills.dev.cloud": "Cloud & Tools",
    "skills.dev.arch": "Architecture",
    "skills.creative.heading": "Creative",
    "skills.creative.multimedia": "Multimedia Editing",
    "skills.creative.audio": "Audio Enhancement",
    "skills.creative.captioning": "Captioning",
    "skills.creative.visual": "Visual Design",
    "skills.creative.branding": "Branding",
    "skills.creative.dam": "Digital Asset Management",
    "skills.creative.data": "Data Structuring",
    "skills.creative.web": "Web Development",

    /* Contact */
    "contact.eyebrow": "— Save & Quit —",
    "contact.title": "Let's Connect",
    "contact.sub": "Session progress saved. Ready to quit when you are.",

    /* Settings modal */
    "settings.title": "Settings",
    "settings.language.label": "Language",
    "lang.en": "English",
    "lang.pt-br": "Português (Brasil)",
    "lang.es": "Español",
  },

  /* ── PT-BR ──────────────────────────────────────────── */
  "pt-br": {
    "landing.eyebrow": "— Portfólio —",
    "btn.start": "Iniciar",
    "btn.settings": "Configurações",

    "tab.profile": "Perfil",
    "tab.projects": "Projetos",
    "tab.creative": "Criativo",
    "tab.skills": "Habilidades",
    "tab.contact": "Contato",

    "profile.label": "Personagem",
    "profile.class": "Engenheiro de Software · Operador Criativo",
    "profile.xp.label": "EXP",
    "profile.xp.value": "Nv. 26",
    "profile.bio.label": "// perfil.txt",
    "profile.bio.text":
      "Olá! Sou Guilherme Schilling, estudante e profissional de Engenharia de Software com mais de 2 anos de experiência em desenvolvimento web e produção de conteúdo digital. Desenvolvo aplicações web com tecnologias modernas como React, TypeScript e Node.js, além de experiência prática em gestão de ativos digitais, edição de vídeo e branding.",
    "profile.stat.years": "Anos Exp",
    "profile.stat.projects": "Projetos",
    "profile.stat.languages": "Idiomas",
    "profile.stat.curiosity": "Curiosidade",

    "projects.heading": "Diário de Projetos",
    "projects.placeholder": "Selecione um projeto para ver detalhes",

    "creative.heading": "— Registro de Comissões —",
    "creative.card1.type": "Edição de Vídeo",
    "creative.card1.title": "Social & Promocional",
    "creative.card1.item1": "Conteúdo para redes sociais em formato curto",
    "creative.card1.item2": "Vídeos promocionais e de produto",
    "creative.card1.item3":
      "Cortes sincronizados e edição orientada por música",
    "creative.card1.item4": "Hooks envolventes e edições de retenção",
    "creative.card2.type": "Edição de Vídeo",
    "creative.card2.title": "Conteúdo & Narrativa",
    "creative.card2.item1": "Vídeos estilo talking-head e entrevista",
    "creative.card2.item2": "Legendas e subtítulos focados em marketing",
    "creative.card2.item3": "Ritmo narrativo e direção de história",
    "creative.card2.item4": "Cortes dinâmicos e aprimoramento de voz",
    "creative.card3.type": "Imagem & Branding",
    "creative.card3.title": "Imagem & Branding",
    "creative.card3.item1": "Aprimoramento de imagem e correção de cor",
    "creative.card3.item2": "Fotos de imóveis com marca d'água de logotipo",
    "creative.card3.item3": "Tipografia básica e identidade visual",
    "creative.card3.item4": "Criação e gestão de ativos de marca",
    "creative.card4.type": "Workspace & Ops",
    "creative.card4.title": "Google Workspace & Ops",
    "creative.card4.item1":
      "Configuração do Google Workspace e gestão de arquivos",
    "creative.card4.item2": "Estruturação e automação de planilhas",
    "creative.card4.item3":
      "Organização de dados e design de fluxo de trabalho",
    "creative.card4.item4": "Sheets/Excel como banco de dados leve para sites",

    "skills.dev.heading": "Desenvolvimento",
    "skills.dev.frontend": "Frontend",
    "skills.dev.backend": "Backend",
    "skills.dev.databases": "Bancos de Dados",
    "skills.dev.cloud": "Cloud & Ferramentas",
    "skills.dev.arch": "Arquitetura",
    "skills.creative.heading": "Criativo",
    "skills.creative.multimedia": "Edição Multimídia",
    "skills.creative.audio": "Aprimoramento de Áudio",
    "skills.creative.captioning": "Legendagem",
    "skills.creative.visual": "Design Visual",
    "skills.creative.branding": "Branding",
    "skills.creative.dam": "Gestão de Ativos Digitais",
    "skills.creative.data": "Estruturação de Dados",
    "skills.creative.web": "Desenvolvimento Web",

    "contact.eyebrow": "— Salvar e Sair —",
    "contact.title": "Vamos nos Conectar",
    "contact.sub": "Progresso da sessão salvo. Pronto para sair quando quiser.",

    "settings.title": "Configurações",
    "settings.language.label": "Idioma",
    "lang.en": "English",
    "lang.pt-br": "Português (Brasil)",
    "lang.es": "Español",
  },

  /* ── ES ─────────────────────────────────────────────── */
  es: {
    "landing.eyebrow": "— Portafolio —",
    "btn.start": "Iniciar",
    "btn.settings": "Configuración",

    "tab.profile": "Perfil",
    "tab.projects": "Proyectos",
    "tab.creative": "Creativo",
    "tab.skills": "Habilidades",
    "tab.contact": "Contacto",

    "profile.label": "Personaje",
    "profile.class": "Ingeniero de Software · Operador Creativo",
    "profile.xp.label": "EXP",
    "profile.xp.value": "Nv. 26",
    "profile.bio.label": "// perfil.txt",
    "profile.bio.text":
      "¡Hola! Soy Guilherme Schilling, estudiante y profesional de Ingeniería de Software con más de 2 años de experiencia en desarrollo web y producción de contenido digital. Desarrollo aplicaciones web con tecnologías modernas como React, TypeScript y Node.js, junto con experiencia práctica en gestión de activos digitales, edición de video y branding.",
    "profile.stat.years": "Años Exp",
    "profile.stat.projects": "Proyectos",
    "profile.stat.languages": "Idiomas",
    "profile.stat.curiosity": "Curiosidad",

    "projects.heading": "Registro de Proyectos",
    "projects.placeholder": "Selecciona un proyecto para ver detalles",

    "creative.heading": "— Registro de Comisiones —",
    "creative.card1.type": "Edición de Video",
    "creative.card1.title": "Social y Promocional",
    "creative.card1.item1": "Contenido para redes sociales en formato corto",
    "creative.card1.item2": "Videos promocionales y de producto",
    "creative.card1.item3":
      "Cortes sincronizados y edición orientada por música",
    "creative.card1.item4": "Hooks atractivos y ediciones de retención",
    "creative.card2.type": "Edición de Video",
    "creative.card2.title": "Contenido y Narrativa",
    "creative.card2.item1": "Videos estilo talking-head y entrevista",
    "creative.card2.item2": "Subtítulos y leyendas enfocados en marketing",
    "creative.card2.item3": "Ritmo narrativo y dirección de historia",
    "creative.card2.item4": "Cortes dinámicos y mejora de voz",
    "creative.card3.type": "Imagen y Branding",
    "creative.card3.title": "Imagen y Branding",
    "creative.card3.item1": "Mejora de imagen y corrección de color",
    "creative.card3.item2":
      "Fotos de propiedades con marca de agua de logotipo",
    "creative.card3.item3": "Tipografía básica e identidad visual",
    "creative.card3.item4": "Creación y gestión de activos de marca",
    "creative.card4.type": "Workspace y Ops",
    "creative.card4.title": "Google Workspace y Ops",
    "creative.card4.item1":
      "Configuración de Google Workspace y gestión de archivos",
    "creative.card4.item2":
      "Estructuración y automatización de hojas de cálculo",
    "creative.card4.item3":
      "Organización de datos y diseño de flujo de trabajo",
    "creative.card4.item4":
      "Sheets/Excel como base de datos ligera para sitios",

    "skills.dev.heading": "Desarrollo",
    "skills.dev.frontend": "Frontend",
    "skills.dev.backend": "Backend",
    "skills.dev.databases": "Bases de Datos",
    "skills.dev.cloud": "Cloud y Herramientas",
    "skills.dev.arch": "Arquitectura",
    "skills.creative.heading": "Creativo",
    "skills.creative.multimedia": "Edición Multimedia",
    "skills.creative.audio": "Mejora de Audio",
    "skills.creative.captioning": "Subtitulación",
    "skills.creative.visual": "Diseño Visual",
    "skills.creative.branding": "Branding",
    "skills.creative.dam": "Gestión de Activos Digitales",
    "skills.creative.data": "Estructuración de Datos",
    "skills.creative.web": "Desarrollo Web",

    "contact.eyebrow": "— Guardar y Salir —",
    "contact.title": "Conectémonos",
    "contact.sub":
      "Progreso de sesión guardado. Listo para salir cuando quieras.",

    "settings.title": "Configuración",
    "settings.language.label": "Idioma",
    "lang.en": "English",
    "lang.pt-br": "Português (Brasil)",
    "lang.es": "Español",
  },
};

/* ── Per-language project data ────────────────────────── */
const PROJECTS_DATA = {
  en: [
    {
      id: "budget-tracker",
      title: "Minimalist Monthly Budget Tracker",
      date: "April, 2026",
      link: "bettercontrol.guinoei.com",
      description: `A simple, personal-use financial web app for tracking monthly spending without the overhead of spreadsheets or complex tools. Minimalist monthly spending control. No spreadsheets. No complexity. Just clarity.

The idea came from a personal frustration — I just wanted an easy way to keep track of where my money was going each month, without setting up a spreadsheet or signing up for yet another service. I built exactly what I needed: a clean interface to log expenses, see a monthly overview, and move on. Users can export and import data as CSV or JSON, making it easy to back up or migrate entries without any account or backend dependency.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Architecture: "Fully client-side (no backend)",
        "Data portability": "CSV & JSON export/import",
      },
    },
    {
      id: "meal-tracker",
      title: "Practical Nutrition Meal Tracker Tool",
      date: "March, 2026",
      link: "protrain.guinoei.com",
      description: `A meal tracking application that allows users to analyze the nutritional value of their meals at both the ingredient and aggregate level. Users can build meals dynamically, retrieve detailed nutrition data, and iteratively refine entries over time.

The project uses a hybrid architecture with a minimal backend for API integration and a client-side persistence layer, prioritizing simplicity and responsiveness without relying on a full database. Instead of building a full database-backed system, I opted for LocalStorage to keep the application lightweight and focused on single-user usage. A minimal Node.js layer was introduced to handle communication with the external nutrition API, improving security and enabling better control over request handling.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Backend: "Node.js (API proxy layer)",
        Persistence: "LocalStorage",
        API: "CalorieNinjas",
      },
    },
    {
      id: "restaurant-blog",
      title: "Oldschool Restaurant Review Blog",
      date: "January, 2026",
      link: "ptgbwl.guinoei.com",
      description: `A minimalist restaurant review blog designed to document and share personal dining experiences across the world. The project focuses on simplicity and performance, using a lightweight, data-driven approach instead of a traditional CMS.

Reviews are stored and managed via structured spreadsheets, then parsed and rendered dynamically on the frontend, creating a flexible publishing workflow without backend complexity. Instead of a traditional CMS, I explored a simpler workflow using spreadsheets as a content source — reducing setup complexity while still allowing structured and scalable data management.`,
      stack: {
        Frontend: "HTML, CSS, JavaScript",
        Data: "Node.js, csv-parse",
        Content: "Excel (as lightweight database)",
        Media: "Cloudinary",
      },
    },
    {
      id: "party-rental",
      title: "Party Rental Management Platform",
      date: "October, 2025",
      link: "eventtor.com",
      description: `A full-stack event equipment rental management system designed to help companies manage inventory, staff, bookings, and revenue in a centralized platform. I contributed to feature development, system improvements, and internationalization, focusing on enhancing usability and supporting product scalability.

This project exposed me to working within an existing, production-like codebase. A key contribution was designing a user-facing update notification system, improving communication of product changes and reinforcing a sense of continuous platform evolution. Also worked on a customizable catalog feature for client-facing views and i18n across the platform, ensuring content could scale across different languages without impacting usability or layout.`,
      stack: {
        Frontend: "React (Vite), Tailwind CSS, TypeScript",
        Backend: "Node.js, Express",
        Database: "MySQL",
        ORM: "Prisma",
        Validation: "Zod",
      },
    },
    {
      id: "chart-tool",
      title: "Easy Chart Creator Tool",
      date: "September, 2025",
      link: "chartz.guinoei.com",
      description: `A lightweight chart creation tool designed for students who need quick, no-friction data visualization for assignments and presentations. Users can import CSV or JSON files, or input data manually, choose between pie, bar, or line charts, and export a clean PNG instantly — no setup or external tools required.

The tool was inspired by the need for a faster alternative to spreadsheet-based chart creation during a college project. I focused on a streamlined interface that reduces the steps required to go from raw data to a usable chart.`,
      stack: {
        Framework: "Next.js",
        Styling: "Tailwind CSS",
        Language: "TypeScript",
        Architecture: "Fully client-side (no backend)",
      },
    },
    {
      id: "real-estate",
      title: "Real Estate Agency Listing Website",
      date: "April, 2024",
      link: "imobiliariacumbuco.com.br",
      description: `A full-stack real estate platform designed for property listing and discovery, allowing users to browse, filter, and explore available properties based on key criteria such as price, size, type, and location.

AWS S3 handles media uploads and delivery for scalable and reliable image storage. Leaflet provides geographic context, allowing users to visually explore property locations rather than relying solely on text-based search.`,
      stack: {
        Backend: "Django",
        Database: "PostgreSQL",
        Frontend: "HTML, CSS, JavaScript, Bootstrap",
        Maps: "Leaflet",
        Storage: "AWS S3",
      },
    },
  ],

  "pt-br": [
    {
      id: "budget-tracker",
      title: "Aplicativo Web Minimalista de Orçamento Mensal",
      date: "Abril, 2026",
      link: "bettercontrol.guinoei.com",
      description: `Um aplicativo web financeiro simples para controle mensal de gastos, sem a complexidade de planilhas ou ferramentas elaboradas. Controle mensal minimalista. Sem planilhas. Sem complexidade. Só clareza.

A ideia surgiu de uma frustração pessoal — eu queria apenas uma forma fácil de acompanhar para onde meu dinheiro ia todo mês, sem configurar planilhas ou me cadastrar em mais um serviço. Construí exatamente o que precisava: uma interface limpa para registrar despesas, ver um resumo mensal e seguir em frente. Os usuários podem exportar e importar dados em CSV ou JSON, facilitando backup ou migração sem nenhuma dependência de conta ou backend.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Arquitetura: "Totalmente client-side (sem backend)",
        "Portabilidade de dados": "Exportação/importação CSV & JSON",
      },
    },
    {
      id: "meal-tracker",
      title: "Ferramenta Prática de Controle Nutricional",
      date: "Março, 2026",
      link: "protrain.guinoei.com",
      description: `Uma aplicação de controle de refeições que permite aos usuários analisar o valor nutricional de suas refeições tanto por ingrediente quanto de forma agregada. Os usuários podem montar refeições dinamicamente, obter dados nutricionais detalhados e refinar entradas ao longo do tempo.

O projeto usa uma arquitetura híbrida com um backend mínimo para integração com API e uma camada de persistência no cliente, priorizando simplicidade e responsividade. Optei pelo LocalStorage para manter a aplicação leve e focada em uso individual. Uma camada mínima de Node.js foi introduzida para comunicação com a API de nutrição externa, melhorando a segurança e o controle sobre as requisições.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Backend: "Node.js (camada proxy de API)",
        Persistência: "LocalStorage",
        API: "CalorieNinjas",
      },
    },
    {
      id: "restaurant-blog",
      title: "Blog Old-school de Avaliações de Restaurantes",
      date: "Janeiro, 2026",
      link: "ptgbwl.guinoei.com",
      description: `Um blog minimalista de avaliações de restaurantes para documentar e compartilhar experiências gastronômicas pessoais pelo mundo. O projeto foca em simplicidade e performance, usando uma abordagem orientada a dados em vez de um CMS tradicional.

As avaliações são armazenadas e gerenciadas em planilhas estruturadas, depois parseadas e renderizadas dinamicamente no frontend, criando um fluxo de publicação flexível sem complexidade de backend. Em vez de um CMS tradicional, explorei um fluxo mais simples usando planilhas como fonte de conteúdo — reduzindo a complexidade de setup e ainda permitindo gerenciamento de dados estruturado e escalável.`,
      stack: {
        Frontend: "HTML, CSS, JavaScript",
        Dados: "Node.js, csv-parse",
        Conteúdo: "Excel (como banco de dados leve)",
        Mídia: "Cloudinary",
      },
    },
    {
      id: "party-rental",
      title: "Plataforma de Gestão de Aluguel para Eventos",
      date: "Outubro, 2025",
      link: "eventtor.com",
      description: `Um sistema completo de gestão de aluguel de brinquedos para eventos, projetado para ajudar empresas a gerenciar estoque, colaboradores, reservas e receita em uma plataforma centralizada. Contribuí com desenvolvimento de funcionalidades, melhorias no sistema e internacionalização, focando em usabilidade e escalabilidade do produto.

Este projeto me expôs ao trabalho dentro de uma base de código existente em produção. Uma contribuição principal foi o design de um sistema de notificações de atualizações para usuários, melhorando a comunicação de mudanças no produto. Também trabalhei em uma funcionalidade de catálogo personalizável e i18n em toda a plataforma, garantindo que o conteúdo pudesse escalar entre diferentes idiomas sem impactar usabilidade ou layout.`,
      stack: {
        Frontend: "React (Vite), Tailwind CSS, TypeScript",
        Backend: "Node.js, Express",
        "Banco de Dados": "MySQL",
        ORM: "Prisma",
        Validação: "Zod",
      },
    },
    {
      id: "chart-tool",
      title: "Ferramenta Fácil de Criação de Gráficos",
      date: "Setembro, 2025",
      link: "chartz.guinoei.com",
      description: `Uma ferramenta leve de criação de gráficos para estudantes que precisam de visualização de dados rápida e sem atrito para tarefas e apresentações. Os usuários podem importar arquivos CSV ou JSON, ou inserir dados manualmente, escolher entre gráficos de pizza, barras ou linhas, e exportar um PNG limpo instantaneamente — sem configuração ou ferramentas externas.

A ferramenta foi inspirada na necessidade de uma alternativa mais rápida à criação de gráficos baseada em planilhas durante um projeto universitário. Foquei em uma interface simplificada que reduz os passos necessários para ir de dados brutos a um gráfico utilizável.`,
      stack: {
        Framework: "Next.js",
        Estilização: "Tailwind CSS",
        Linguagem: "TypeScript",
        Arquitetura: "Totalmente client-side (sem backend)",
      },
    },
    {
      id: "real-estate",
      title: "Site de Listagem de Imobiliária",
      date: "Abril, 2024",
      link: "imobiliariacumbuco.com.br",
      description: `Uma plataforma imobiliária completa para listagem e descoberta de imóveis, permitindo que usuários naveguem, filtrem e explorem propriedades disponíveis com base em critérios como preço, tamanho, tipo e localização.

AWS S3 gerencia os uploads e entrega de mídia para armazenamento de imagens escalável e confiável. O Leaflet fornece contexto geográfico, permitindo que usuários explorem visualmente a localização dos imóveis em vez de depender apenas de busca por texto.`,
      stack: {
        Backend: "Django",
        "Banco de Dados": "PostgreSQL",
        Frontend: "HTML, CSS, JavaScript, Bootstrap",
        Mapas: "Leaflet",
        Armazenamento: "AWS S3",
      },
    },
  ],

  es: [
    {
      id: "budget-tracker",
      title: "Aplicación Web Minimalista de Presupuesto Mensual",
      date: "Abril, 2026",
      link: "bettercontrol.guinoei.com",
      description: `Una aplicación web financiera simple para controlar el gasto mensual sin la complejidad de hojas de cálculo o herramientas elaboradas. Control mensual minimalista. Sin hojas de cálculo. Sin complejidad. Solo claridad.

La idea surgió de una frustración personal — solo quería una forma sencilla de rastrear a dónde iba mi dinero cada mes, sin configurar hojas de cálculo ni registrarme en otro servicio. Construí exactamente lo que necesitaba: una interfaz limpia para registrar gastos, ver un resumen mensual y seguir adelante. Los usuarios pueden exportar e importar datos como CSV o JSON para copia de seguridad o migración sin dependencias de cuenta o backend.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Arquitectura: "Totalmente client-side (sin backend)",
        "Portabilidad de datos": "Exportación/importación CSV & JSON",
      },
    },
    {
      id: "meal-tracker",
      title: "Herramienta Práctica de Seguimiento Nutricional",
      date: "Marzo, 2026",
      link: "protrain.guinoei.com",
      description: `Una aplicación de seguimiento de comidas que permite a los usuarios analizar el valor nutricional de sus comidas tanto a nivel de ingrediente como de forma agregada. Los usuarios pueden construir comidas dinámicamente, obtener datos nutricionales detallados y refinar entradas con el tiempo.

El proyecto usa una arquitectura híbrida con un backend mínimo para integración de API y una capa de persistencia del lado del cliente, priorizando simplicidad y capacidad de respuesta. Opté por LocalStorage para mantener la aplicación liviana y enfocada en uso individual. Se introdujo una capa mínima de Node.js para comunicarse con la API de nutrición externa, mejorando la seguridad y el control sobre las solicitudes.`,
      stack: {
        Frontend: "HTML, Tailwind CSS, JavaScript",
        Backend: "Node.js (capa proxy de API)",
        Persistencia: "LocalStorage",
        API: "CalorieNinjas",
      },
    },
    {
      id: "restaurant-blog",
      title: "Blog Retro de Reseñas de Restaurantes",
      date: "Enero, 2026",
      link: "ptgbwl.guinoei.com",
      description: `Un blog minimalista de reseñas de restaurantes para documentar y compartir experiencias gastronómicas personales por el mundo. El proyecto se enfoca en simplicidad y rendimiento, usando un enfoque orientado a datos en lugar de un CMS tradicional.

Las reseñas se almacenan y gestionan mediante hojas de cálculo estructuradas, luego se parsean y renderizan dinámicamente en el frontend, creando un flujo de publicación flexible sin complejidad de backend. En lugar de un CMS tradicional, exploré un flujo más simple usando hojas de cálculo como fuente de contenido — reduciendo la complejidad de configuración mientras se mantiene una gestión de datos estructurada y escalable.`,
      stack: {
        Frontend: "HTML, CSS, JavaScript",
        Datos: "Node.js, csv-parse",
        Contenido: "Excel (como base de datos ligera)",
        Medios: "Cloudinary",
      },
    },
    {
      id: "party-rental",
      title: "Plataforma de Gestión de Alquiler para Eventos",
      date: "Octubre, 2025",
      link: "eventtor.com",
      description: `Un sistema completo de gestión de alquiler de equipos para eventos, diseñado para ayudar a empresas a gestionar inventario, personal, reservas e ingresos en una plataforma centralizada. Contribuí con desarrollo de funcionalidades, mejoras del sistema e internacionalización, enfocándome en mejorar la usabilidad y apoyar la escalabilidad del producto.

Este proyecto me expuso a trabajar dentro de una base de código existente en producción. Una contribución clave fue diseñar un sistema de notificaciones de actualizaciones para usuarios, mejorando la comunicación de cambios del producto. También trabajé en una función de catálogo personalizable y en i18n en toda la plataforma, asegurando que el contenido pudiera escalar entre diferentes idiomas sin afectar la usabilidad o el diseño.`,
      stack: {
        Frontend: "React (Vite), Tailwind CSS, TypeScript",
        Backend: "Node.js, Express",
        "Base de Datos": "MySQL",
        ORM: "Prisma",
        Validación: "Zod",
      },
    },
    {
      id: "chart-tool",
      title: "Herramienta Fácil de Creación de Gráficos",
      date: "Septiembre, 2025",
      link: "chartz.guinoei.com",
      description: `Una herramienta ligera de creación de gráficos para estudiantes que necesitan visualización de datos rápida y sin fricción para tareas y presentaciones. Los usuarios pueden importar archivos CSV o JSON, o ingresar datos manualmente, elegir entre gráficos de tarta, barras o líneas, y exportar un PNG limpio al instante — sin configuración ni herramientas externas.

La herramienta fue inspirada por la necesidad de una alternativa más rápida a la creación de gráficos basada en hojas de cálculo durante un proyecto universitario. Me enfoqué en una interfaz simplificada que reduce los pasos necesarios para pasar de datos brutos a un gráfico utilizable.`,
      stack: {
        Framework: "Next.js",
        Estilo: "Tailwind CSS",
        Lenguaje: "TypeScript",
        Arquitectura: "Totalmente client-side (sin backend)",
      },
    },
    {
      id: "real-estate",
      title: "Sitio Web de Listado de Inmobiliaria",
      date: "Abril, 2024",
      link: "imobiliariacumbuco.com.br",
      description: `Una plataforma inmobiliaria completa para listado y descubrimiento de propiedades, permitiendo a los usuarios navegar, filtrar y explorar propiedades disponibles basándose en criterios clave como precio, tamaño, tipo y ubicación.

AWS S3 maneja las subidas y entrega de medios para almacenamiento de imágenes escalable y confiable. Leaflet proporciona contexto geográfico, permitiendo a los usuarios explorar visualmente las ubicaciones de las propiedades en lugar de depender únicamente de la búsqueda por texto.`,
      stack: {
        Backend: "Django",
        "Base de Datos": "PostgreSQL",
        Frontend: "HTML, CSS, JavaScript, Bootstrap",
        Mapas: "Leaflet",
        Almacenamiento: "AWS S3",
      },
    },
  ],
};

/* ============================================================
   Core i18n logic
   ============================================================ */
let _currentLang = localStorage.getItem("lang") || "en";

function t(key) {
  return TRANSLATIONS[_currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

function getProjects() {
  return PROJECTS_DATA[_currentLang] || PROJECTS_DATA.en;
}

function getCurrentLang() {
  return _currentLang;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = _currentLang;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  _currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
  // Notify modal.js to re-render dynamic project content
  document.dispatchEvent(new CustomEvent("langchange"));
  // Update active state in the settings modal
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("lang-option--active", btn.dataset.lang === lang);
  });
}

// Expose globals
window.t = t;
window.getProjects = getProjects;
window.getCurrentLang = getCurrentLang;
window.setLang = setLang;

// Apply on load
applyTranslations();
