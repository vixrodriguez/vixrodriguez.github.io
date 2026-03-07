/* ============================================================
   TRANSLATIONS — English & Spanish
   ============================================================ */
const translations = {

  /* ──────────────────────────── ESPAÑOL ──────────────────────────── */
  es: {
    nav: {
      about:      'Sobre mí',
      skills:     'Habilidades',
      certs:      'Certificaciones',
      experience: 'Experiencia',
      projects:   'Proyectos',
      talks:      'Charlas',
      contact:    'Contacto',
    },
    hero: {
      badge:       'Disponible para nuevas oportunidades',
      greeting:    'Hola, soy',
      name:        'Víctor Rodríguez',
      title:       'Senior Software Engineer',
      subtitle:    'Más de <strong>10 años</strong> construyendo aplicaciones web, APIs e integraciones escalables en fintech, logística, cripto, salud y más. Especialista en Python, Odoo y Java Spring Boot.',
      cta_primary: 'Ver proyectos',
      cta_ghost:   'Hablemos',
      stat1:       'Años de experiencia',
      stat2:       'Proyectos entregados',
      stat3:       'Industrias atendidas',
    },
    about: {
      tag:   '// sobre mí',
      title: 'Quién soy',
      p1:    'Soy un <strong>Senior Software Engineer</strong> con más de 10 años de experiencia en el desarrollo de aplicaciones web. Me especializo en Odoo (v8–v15), Python (Flask, Django) y Java (Spring Boot), habiendo trabajado en sectores como fintech, logística, cripto, retail y más.',
      p2:    'Tengo sólida experiencia en <strong>arquitecturas de microservicios hexagonales</strong>, integración de APIs de terceros (CRMs, sistemas bancarios, exchanges de criptomonedas) y despliegues en la nube con AWS. Me apasiona construir soluciones robustas, mantenibles y escalables.',
      p3:    'Fuera del trabajo, soy voluntario activo del <strong>IEEE</strong> desde 2011 (Regional Representative R9, Chapter Chair), miembro de Toastmasters Ecuador y ex Líder Scout. Me impulsa compartir conocimiento y crecer junto a equipos de alto impacto.',
      fact1: '📍&nbsp; Guayaquil, Ecuador &mdash; Disponible para trabajo remoto',
      fact2: '🎓&nbsp; Ing. Computación · ESPOL (ABET) · AWS · Google AI · Scrum Master',
      fact3: '🌐&nbsp; Español nativo &bull; Inglés profesional',
      certs_title: 'Certificaciones destacadas',
      download:    'Descargar CV',
    },
    skills: {
      tag:   '// habilidades',
      title: 'Stack tecnológico',
      cards: [
        {
          icon: '⚙️',
          title: 'Backend',
          items: [
            'Python · Flask · Django',
            'Java · Spring Boot · iText7',
            'Node.js · Express · Next.js (BE)',
            'REST · GraphQL · WebSocket · AMQP · SOAP',
          ],
        },
        {
          icon: '🖥️',
          title: 'Frontend & ERP',
          items: [
            'React.js · Next.js · Vue.js',
            'Odoo v8–v15 · Django Templates',
            'TypeScript · JavaScript ES6 · PHP',
            'Bootstrap · Tailwind CSS · HTML5',
          ],
        },
        {
          icon: '☁️',
          title: 'Cloud & DevOps',
          items: [
            'AWS (EC2, RDS, S3, ELB, Route 53, MQ)',
            'GCP · DigitalOcean',
            'Docker · Docker Compose · Kubernetes',
            'CI/CD · ELK Stack · GitHub Actions',
          ],
        },
        {
          icon: '🗄️',
          title: 'Datos & Bases de datos',
          items: [
            'PostgreSQL · MySQL · SQL Server · SQLite',
            'MongoDB · Redis · Firebase',
            'NumPy · Pandas · Power BI',
            'Alembic · SQLAlchemy · Amazon MQ (RabbitMQ)',
          ],
        },
      ],
    },
    certs: {
      tag:   '// certificaciones & educación',
      title: 'Formación académica y profesional',
      edu_title:   'Educación',
      cert_title:  'Certificaciones',
      education: [
        {
          degree:  'Ingeniería en Ciencias Computacionales – Especialización Sistemas Tecnológicos',
          school:  'Escuela Superior Politécnica del Litoral (ESPOL)',
          detail:  'Programa Acreditado ABET',
          period:  '2010 – 2016',
          location: 'Guayaquil, Ecuador',
        },
      ],
      certifications: [
        { name: 'Google AI Essentials Specialization',                    issuer: 'Google',    year: '2025', icon: './assets/logos/google_g.svg' },
        { name: 'Vibe Coding Essentials – Build Apps with AI',            issuer: 'Scrimba',   year: '2025', icon: './assets/logos/scrimba.svg' },
        { name: 'AWS Cloud Practitioner · Developer · Solutions Architect', issuer: 'Certimas', year: '2023', icon: './assets/logos/aws.svg' },
        { name: 'Scrum Master Professional Certificate (SMPC®)',           issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
        { name: 'Scrum Product Owner Professional Certificate (SPOPC)',    issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
        { name: 'Scrum Foundation Professional Certificate (SFPC™)',      issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
      ],
    },
    experience: {
      tag:          '// experiencia',
      title:        'Trayectoria profesional',
      tab_summary:    'Resumida',
      tab_extended:   'Extendida',
      collapse_all:   'Colapsar todo',
      expand_all:     'Expandir todo',
      jobs: [
        {
          role:     'Instructor Técnico',
          company:  'EELA Institute',
          location: 'Guayaquil, Ecuador',
          period:   'Abr 2025 — Presente',
          bullets: [
            'Instructor técnico responsable de dictar cursos de desarrollo web, programación y tecnologías de software a estudiantes.',
          ],
          tags: ['Python', 'Flask', 'Desarrollo Web', 'Programación'],
        },
        {
          role:     'Senior Backend Engineer',
          company:  'NAWI',
          location: 'Ciudad de México, México (Remoto)',
          period:   'Jul 2024 — Dic 2025',
          bullets: [
            'Diseñé, mantuve, probé y depuré el código de más de <strong>7 microservicios</strong> con arquitectura hexagonal.',
            'Desarrollé un paquete personalizado que redujo la redundancia de procesos compartidos en un <strong>35%</strong> y estableció guías estandarizadas.',
            'Implementé transferencias C2C, consultas de cuenta, retiros ATM, compras nacionales/internacionales y reversiones de transacciones.',
            'Integré APIs externas de <strong>Dock (Neobank)</strong> y <strong>STP México</strong> alineadas con el modelo de negocio.',
          ],
          tags: ['Python', 'Flask', 'Hexagonal Arch.', 'Microservicios', 'AWS'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'Coderland by Dominion',
          location: 'Ciudad de Panamá, Panamá (Remoto)',
          period:   'Sep 2022 — Mar 2024',
          bullets: [
            '<strong>Wambala:</strong> Auditoría, implementación y migración de plataforma de entrenamiento para atletas (React.js + Flask → Next.js + PostgreSQL). Notificaciones Firebase y emails con SendGrid.',
            '<strong>BitBase:</strong> Middleware Flask para sincronizar transacciones de canales de venta (ATMs/tiendas) a Odoo v15. EDA con Amazon MQ (RabbitMQ). Logs enviados a ELK.',
            '<strong>Unnax-PFM:</strong> Soporte y refactorización de +15 microservicios Flask/Next.js. Reportes XLSX/PDF/JSON, tareas programadas con Celery + Redis. CI/CD en Dev y QA.',
            '<strong>Coderland-Hirint:</strong> Middleware Java Spring Boot que automatiza la interconexión entre Zoho CRM e Hirint.io, con generación de reportes vía Webhook.',
          ],
          tags: ['Python', 'Flask', 'Next.js', 'React.js', 'Java', 'Odoo v15', 'RabbitMQ'],
        },
        {
          role:     'SysAdmin y Full Stack Developer',
          company:  'TECNOSMART',
          location: 'Guayaquil, Ecuador (Híbrido)',
          period:   'Feb 2021 — Sep 2022',
          bullets: [
            'Desarrollé funcionalidades personalizadas y reingeniería de módulos en <strong>Odoo v13</strong> (Contabilidad, Inventario, Soporte Técnico, Paymentez).',
            'Administré y automaticé respaldos de bases de datos (crontab) y monitoreo en entornos Dev y Producción.',
            'Integré <strong>Odoo con WooCommerce</strong> (WordPress) y lideré la integración de la pasarela de pago <strong>PlacetoPay</strong>.',
          ],
          tags: ['Odoo v13', 'Python', 'WooCommerce', 'WordPress', 'Ubuntu'],
        },
        {
          role:     'Backend Developer',
          company:  'LOGA SYSTEMS',
          location: 'Guayaquil, Ecuador (Híbrido)',
          period:   'Jun 2018 — Ago 2020',
          bullets: [
            'Implementé módulos para <strong>Loga Hub</strong>: Auditoría, Itinerarios de navieras y Segmentos de socios/clientes.',
            'Desarrollé un microservicio de reportes con <strong>Java Spring Boot e iText7</strong> que desacoupló la carga del servidor principal.',
            'Contribuí al módulo explorer configurable para búsquedas avanzadas de órdenes, clientes y socios.',
          ],
          tags: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'iText7'],
        },
        {
          role:     'Web & Software Developer',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (Presencial)',
          period:   'Abr 2017 — May 2018',
          bullets: [
            'Desarrollé varios sitios web con <strong>Odoo v11</strong> para supermercados, ferreterías y empresas de contratación.',
            'Creé un daemon Python/BASH para control de acceso a un estadio con <strong>+50,000 espectadores</strong>.',
            'Implementé <strong>+50 sistemas POS</strong> en 5 locales de una cadena de supermercados con +500 clientes diarios.',
          ],
          tags: ['Odoo v11', 'Python', 'BASH', 'POS', 'v12 Migration'],
        },
        {
          role:     'Semi-Senior Developer',
          company:  'DRONCAT S.A.',
          location: 'Manta, Ecuador (Presencial)',
          period:   'Abr 2017 — Nov 2017',
          bullets: [
            'Desarrollé una app <strong>Android nativa</strong> (online/offline) para registro de catastro urbano con sincronización automática al servidor.',
            'Mejoré el rendimiento de la app móvil <strong>7.5×</strong> con carga multihilo vía solicitudes Multipart.',
            'Colaboré en el desarrollo de nuevas funcionalidades para Odoo v11 en servidor CentOS 7.',
          ],
          tags: ['Android', 'Java', 'Odoo v11', 'Python', 'CentOS'],
        },
      ],

      /* ── Versión extendida (todas las posiciones) ── */
      jobs_extended: [
        {
          role:     'Instructor Técnico',
          company:  'EELA Institute',
          location: 'Guayaquil, Ecuador',
          period:   'Abr 2025 — Presente',
          bullets: [
            'Instructor técnico responsable de dictar cursos de desarrollo web, programación y tecnologías de software a estudiantes.',
          ],
          tags: ['Python', 'Flask', 'Desarrollo Web', 'Programación'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'NAWI',
          location: 'Ciudad de México, México (Remoto)',
          period:   'Jul 2024 — Dic 2025',
          bullets: [
            'Diseñé, mantuve, probé y depuré el código de más de <strong>7 microservicios</strong> con arquitectura hexagonal.',
            'Desarrollé un paquete personalizado que redujo la redundancia de procesos compartidos en un <strong>35%</strong> y estableció guías estandarizadas.',
            'Implementé transferencias C2C, consultas de cuenta, retiros ATM, compras nacionales/internacionales y reversiones de transacciones.',
            'Integré APIs externas de <strong>Dock (Neobank)</strong> y <strong>STP México</strong> alineadas con el modelo de negocio.',
          ],
          tags: ['Python', 'Flask', 'Hexagonal Arch.', 'Microservicios', 'AWS'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'Coderland by Dominion',
          location: 'Ciudad de Panamá, Panamá (Remoto)',
          period:   'Sep 2022 — Mar 2024',
          bullets: [
            'Lideré la auditoría, desarrollo y migración de aplicaciones (Wambala, BitBase, Unnax-PFM, Hirint), mejorando rendimiento y comunicación servidor.',
            'Implementé y administré middleware para sincronización de datos, generación de documentos automatizados y sistemas de monitoreo (ELK).',
            'Soporte y refactorización de +15 microservicios, administración de bases de datos y tareas programadas (Celery + Redis).',
            'Gestión de estimaciones, alcance y documentación para clientes como <strong>Telefónica Movistar MX</strong> e <strong>Infrared Iberia</strong>.',
          ],
          tags: ['Python', 'Flask', 'Next.js', 'Java', 'Odoo v15', 'RabbitMQ'],
        },
        {
          role:     'Vice Presidente de Relaciones Públicas',
          company:  'Toastmasters Ecuador',
          location: 'Ecuador (Voluntariado)',
          period:   'May 2022 — May 2023',
          bullets: [
            'Responsable de la comunicación y visibilidad del club en redes sociales y canales digitales.',
            'Coordiné eventos y campañas para atraer nuevos miembros y fortalecer la comunidad de comunicadores.',
          ],
          tags: ['Comunicación', 'Liderazgo', 'RRPP', 'Voluntariado'],
        },
        {
          role:     'SysAdmin y Full Stack Developer',
          company:  'TECNOSMART',
          location: 'Guayaquil, Ecuador (Híbrido)',
          period:   'Feb 2021 — Sep 2022',
          bullets: [
            'Desarrollé funcionalidades personalizadas y reingeniería de módulos en <strong>Odoo v13</strong> (Contabilidad, Inventario, Soporte Técnico, Paymentez).',
            'Administré y automaticé respaldos de bases de datos (crontab) y monitoreo en entornos Dev y Producción.',
            'Integré <strong>Odoo con WooCommerce</strong> (WordPress) y lideré la integración de la pasarela de pago <strong>PlacetoPay</strong>.',
          ],
          tags: ['Odoo v13', 'Python', 'WooCommerce', 'WordPress', 'Ubuntu'],
        },
        {
          role:     'Chief Executive Officer',
          company:  'Milestone Tech Consulting',
          location: 'Guayaquil, Ecuador',
          period:   'Ago 2020 — Presente',
          bullets: [
            'Emprendimiento enfocado en ofrecer soluciones tecnológicas asequibles a microempresarios y PYMEs usando tecnologías de código abierto.',
            'Consultoría técnica, desarrollo de software a medida y soporte en infraestructura cloud para clientes en Ecuador.',
          ],
          tags: ['Emprendimiento', 'Python', 'Odoo', 'AWS', 'Open Source'],
        },
        {
          role:     'Backend Developer',
          company:  'LOGA SYSTEMS',
          location: 'Guayaquil, Ecuador (Híbrido)',
          period:   'Jun 2018 — Ago 2020',
          bullets: [
            'Implementé módulos para <strong>Loga Hub</strong>: Auditoría, Itinerarios de navieras y Segmentos de socios/clientes.',
            'Desarrollé un microservicio de reportes con <strong>Java Spring Boot e iText7</strong> que desacopló la carga del servidor principal.',
            'Contribuí al módulo explorer configurable para búsquedas avanzadas de órdenes, clientes y socios.',
          ],
          tags: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'iText7'],
        },
        {
          role:     'Technical Consultant',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (Presencial)',
          period:   'Feb 2018 — May 2018',
          bullets: [
            'Responsable de supervisar la formación funcional y técnica del equipo de desarrollo de la empresa en tecnologías Odoo.',
          ],
          tags: ['Odoo', 'Python', 'Consultoría', 'Formación'],
        },
        {
          role:     'Web & Software Developer',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (Presencial)',
          period:   'Dic 2017 — May 2018',
          bullets: [
            'Desarrollé varios sitios web con <strong>Odoo v11</strong> para supermercados, ferreterías y empresas de contratación.',
            'Creé un daemon Python/BASH para control de acceso a un estadio con <strong>+50,000 espectadores</strong>.',
            'Implementé <strong>+50 sistemas POS</strong> en 5 locales de una cadena de supermercados con +500 clientes diarios.',
          ],
          tags: ['Odoo v11', 'Python', 'BASH', 'POS'],
        },
        {
          role:     'Semi-Senior Developer',
          company:  'DRONCAT S.A.',
          location: 'Manta, Ecuador (Presencial)',
          period:   'Abr 2017 — Nov 2017',
          bullets: [
            'Desarrollé una app <strong>Android nativa</strong> (online/offline) para registro de catastro urbano con sincronización automática al servidor.',
            'Mejoré el rendimiento de la app móvil <strong>7.5×</strong> con carga multihilo vía solicitudes Multipart.',
            'Colaboré en nuevas funcionalidades para Odoo v11 en servidor CentOS 7.',
          ],
          tags: ['Android', 'Java', 'Odoo v11', 'Python', 'CentOS'],
        },
        {
          role:     'Teacher',
          company:  'Tecnológico Sudamericano (TECSU)',
          location: 'Guayaquil, Ecuador',
          period:   'Mar 2015 — Jun 2015',
          bullets: [
            'Instructor de <strong>Programación Básica, Computación II y Sistemas Operativos I & II</strong> para estudiantes universitarios.',
          ],
          tags: ['Docencia', 'Programación', 'Sistemas Operativos'],
        },
        {
          role:     'Junior Software Developer',
          company:  '5Bits',
          location: 'Guayaquil, Ecuador',
          period:   'Abr 2014 — Sep 2015',
          bullets: [
            'Desarrollé una API en <strong>C#</strong> que habilitó la comunicación y extracción de datos entre la base de datos 4D, facilitando la migración a SQL Server.',
            'Contribuí al mantenimiento de la aplicación de facturación electrónica interna de la empresa.',
            'Diseñé e implementé páginas web para <strong>+10 clientes</strong> usando HTML, CSS, JS, SASS y ES5.',
          ],
          tags: ['C#', 'SQL Server', 'JavaScript', 'HTML/CSS', 'SASS'],
        },
        {
          role:     'Asistente de Docencia',
          company:  'ESPOL – Facultad de Ingeniería',
          location: 'Guayaquil, Ecuador',
          period:   'Abr 2013 — Ene 2015',
          bullets: [
            'Asistente de docencia para: <strong>Fundamentos de Programación, Programación Orientada a Objetos y Redes de Computadoras</strong>.',
            'Reconocido como <strong>Outstanding Undergraduate Teaching Assistant</strong> (oct 2013 – feb 2014 / abr 2014 – sep 2014).',
          ],
          tags: ['Docencia', 'Python', 'Java', 'Redes', 'ESPOL'],
        },
        {
          role:     'Miembro y Voluntario',
          company:  'IEEE ESPOL Student Branch',
          location: 'Guayaquil, Ecuador',
          period:   'Oct 2011 — Jun 2018',
          bullets: [
            'Computer Society Chapter Chair (2013–2014) y Branch Vice Chair (2015–2016).',
            'Participante y proctor de la competencia <strong>IEEEXtreme</strong> de 24 horas de programación.',
            'Liderazgo en actividades de la comunidad de ingeniería eléctrica y computación a nivel estudiantil.',
          ],
          tags: ['IEEE', 'Liderazgo', 'Voluntariado', 'Programación'],
        },
      ],
    },
    projects: {
      tag:            '// proyectos',
      title:          'Proyectos destacados',
      featured_label: '★ Proyecto destacado',
      view_all:         'Ver todos los proyectos →',
      page_title:       'Todos los proyectos',
      page_subtitle:    'Colección completa de proyectos: productos, plataformas e integraciones desarrollados a lo largo de mi carrera.',
      back:             '← Volver al inicio',
      filter_all:       'Todas las tecnologías',
      filter_label:     'Filtrar por tecnología',
      filter_apply:     'Aplicar',
      showing_pre:      'Mostrando',
      showing_mid:      'de',
      showing_post:     'proyectos',
      prev:             '← Anterior',
      next:             'Siguiente →',
      no_results:       'No hay proyectos con las tecnologías seleccionadas.',
      clear_filters:    'Limpiar filtros',
      items: [
        {
          relevance: 'featured',
          title: 'NAWI – Plataforma Fintech de Microservicios',
          desc:  'Arquitectura hexagonal de 7+ microservicios para una neobank. Procesamiento de transferencias C2C, retiros ATM, compras nacionales/internacionales e integración con autorizadores externos Dock y STP México.',
          tech:  ['Python', 'Flask', 'Microservicios', 'AWS', 'Hexagonal Arch.'],
          repo:  '#', demo: 'https://nawicard.com/',
        },
        {
          relevance: 'relevant',
          title: 'Wambala – Plataforma para Atletas de Alto Rendimiento',
          desc:  'Migración completa de React.js + Flask + SQLite a Next.js + PostgreSQL. Optimización de generación de horarios deportivos, notificaciones Firebase y entrega de emails con SendGrid.',
          tech:  ['Next.js', 'Flask', 'PostgreSQL', 'Firebase', 'SendGrid'],
          repo:  '#', demo: 'https://wambala.es/',
        },
        {
          relevance: 'relevant',
          title: 'BitBase – Middleware para Exchange de Cripto',
          desc:  'Middleware Flask que sincroniza transacciones de ATMs/tiendas a Odoo v15 vía JSON-RPC. Generación de facturas/cotizaciones PDF y manejo de eventos asíncronos con Amazon MQ (RabbitMQ).',
          tech:  ['Python', 'Flask', 'Odoo v15', 'RabbitMQ', 'ELK'],
          repo:  '#', demo: 'http://bitbase.es/',
        },
        {
          relevance: 'standard',
          title: 'Loga Hub – Plataforma de Logística y Aduanas',
          desc:  'Módulos de auditoría, itinerarios de navieras y segmentos de socios. Microservicio de reportes con Java Spring Boot e iText7 que desacoupló la carga de generación de documentos del servidor principal.',
          tech:  ['Java', 'Spring Boot', 'Python', 'iText7', 'PostgreSQL'],
          demo: 'https://logihub.com/',
        },
        {
          relevance: 'standard',
          title: 'Avasant – Sitio Web Corporativo',
          desc:  'Desarrollo y gestión integral del ecosistema digital de Avasant Consulting S.A.S., consultora especializada en aceleración empresarial y empoderamiento para mujeres emprendedoras y población migrante. Diseño y despliegue bajo WordPress, Astra y Spectra, gestión de infraestructura en Hostinger e integración de Google Workspace. Soluciones técnicas para entrega de contenido multimedia de alta fidelidad.',
          tech:  ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Hostinger', 'DNS', 'Google'],
          demo: 'https://avasant-consulting.com/',
        },
      ],
    },
    contact: {
      tag:           '// contacto',
      title:         'Hablemos',
      text:          '¿Tienes un proyecto en mente o una oportunidad interesante? Me encantaría escucharte. Suelo responder en menos de 24 horas.',
      name_label:    'Nombre',
      name_ph:       'Tu nombre completo',
      email_label:   'Correo electrónico',
      email_ph:      'tu@correo.com',
      msg_label:     'Mensaje',
      msg_ph:        'Cuéntame sobre tu proyecto o propuesta…',
      send:          'Enviar mensaje',
      sending:       'Enviando…',
      sent:          '¡Mensaje enviado! ✓',
      lbl_email:     'Correo',
      lbl_phone:     'Teléfono',
      lbl_linkedin:  'LinkedIn',
    },
    footer: {
      copy: '© 2026 Víctor Rodríguez',
    },
    talks: {
      tag:                      '// charlas & conferencias',
      title:                    'En el escenario',
      description:              'Conferencias, talleres y charlas técnicas impartidas en eventos de la industria, universidades y comunidades de software a lo largo de mi trayectoria.',
      cta:                      'Ver todas las charlas →',
      stat_conferences_label:   'Conferencias',
      stat_workshops_label:     'Talleres',
      stat_talks_label:         'Charlas',
      page_title:               'Charlas & Conferencias',
      page_subtitle:            'Eventos donde he compartido conocimiento sobre tecnología, desarrollo de software y liderazgo técnico.',
      back:                     '← Volver al inicio',
      filter_all:               'Todas',
      filter_conference:        'Conferencias',
      filter_workshop:          'Talleres',
      filter_talk:              'Charlas',
      badge_conference:         'Conferencia',
      badge_workshop:           'Taller',
      badge_talk:               'Charla',
      link_slides:              'Slides',
      link_video:               'Video',
      link_resources:           'Recursos',
      modality_virtual:         'Virtual',
      modality_presential:      'Presencial',
      modality_hybrid:          'Híbrido',
      lbl_modality:             'Modalidad',
      empty_title:              'Próximamente',
      empty_desc:               'Las charlas y conferencias serán publicadas aquí muy pronto.',
    },
  },

  /* ──────────────────────────── ENGLISH ──────────────────────────── */
  en: {
    nav: {
      about:      'About',
      skills:     'Skills',
      certs:      'Certifications',
      experience: 'Experience',
      projects:   'Projects',
      talks:      'Talks',
      contact:    'Contact',
    },
    hero: {
      badge:       'Open to new opportunities',
      greeting:    "Hi, I'm",
      name:        'Víctor Rodríguez',
      title:       'Senior Software Engineer',
      subtitle:    'Over <strong>10 years</strong> building web applications, APIs, and scalable backend systems across fintech, logistics, crypto, healthcare, and more. Specialized in Python, Odoo, and Java Spring Boot.',
      cta_primary: 'View projects',
      cta_ghost:   "Let's talk",
      stat1:       'Years of experience',
      stat2:       'Projects delivered',
      stat3:       'Industries served',
    },
    about: {
      tag:   '// about me',
      title: 'Who I am',
      p1:    'I\'m a <strong>Senior Software Engineer</strong> with over 10 years of experience building web applications. I specialize in Odoo (v8–v15), Python (Flask, Django), and Java (Spring Boot), having worked across sectors including fintech, logistics, crypto, retail, and more.',
      p2:    'I have deep expertise in <strong>hexagonal microservices architecture</strong>, third-party API integration (CRMs, banking systems, cryptocurrency exchanges), and cloud deployments on AWS. I\'m passionate about building robust, maintainable, and scalable solutions.',
      p3:    'Outside work, I\'ve been an active <strong>IEEE</strong> volunteer since 2011 (Regional Representative R9, Chapter Chair), a Toastmasters Ecuador member, and a former Scout leader. I thrive on sharing knowledge and growing alongside high-impact teams.',
      fact1: '📍&nbsp; Guayaquil, Ecuador &mdash; Open to remote work',
      fact2: '🎓&nbsp; B.Sc. Computer Science · ESPOL (ABET) · AWS · Google AI · Scrum Master',
      fact3: '🌐&nbsp; Spanish native &bull; English professional proficiency',
      certs_title: 'Key certifications',
      download:    'Download CV',
    },
    skills: {
      tag:   '// skills',
      title: 'Tech stack',
      cards: [
        {
          icon: '⚙️',
          title: 'Backend',
          items: [
            'Python · Flask · Django',
            'Java · Spring Boot · iText7',
            'Node.js · Express · Next.js (BE)',
            'REST · GraphQL · WebSocket · AMQP · SOAP',
          ],
        },
        {
          icon: '🖥️',
          title: 'Frontend & ERP',
          items: [
            'React.js · Next.js · Vue.js',
            'Odoo v8–v15 · Django Templates',
            'TypeScript · JavaScript ES6 · PHP',
            'Bootstrap · Tailwind CSS · HTML5',
          ],
        },
        {
          icon: '☁️',
          title: 'Cloud & DevOps',
          items: [
            'AWS (EC2, RDS, S3, ELB, Route 53, MQ)',
            'GCP · DigitalOcean',
            'Docker · Docker Compose · Kubernetes',
            'CI/CD · ELK Stack · GitHub Actions',
          ],
        },
        {
          icon: '🗄️',
          title: 'Data & Databases',
          items: [
            'PostgreSQL · MySQL · SQL Server · SQLite',
            'MongoDB · Redis · Firebase',
            'NumPy · Pandas · Power BI',
            'Alembic · SQLAlchemy · Amazon MQ (RabbitMQ)',
          ],
        },
      ],
    },
    certs: {
      tag:   '// certifications & education',
      title: 'Academic & professional background',
      edu_title:   'Education',
      cert_title:  'Certifications',
      education: [
        {
          degree:   'Bachelor of Science – Computer Science',
          school:   'Escuela Superior Politécnica del Litoral (ESPOL)',
          detail:   'ABET Accredited Program',
          period:   '2010 – 2016',
          location: 'Guayaquil, Ecuador',
        },
      ],
      certifications: [
        { name: 'Google AI Essentials Specialization',                    issuer: 'Google',    year: '2025', icon: './assets/logos/google_g.svg' },
        { name: 'Vibe Coding Essentials – Build Apps with AI',            issuer: 'Scrimba',   year: '2025', icon: './assets/logos/scrimba.svg' },
        { name: 'AWS Cloud Practitioner · Developer · Solutions Architect', issuer: 'Certimas', year: '2023', icon: './assets/logos/aws.svg' },
        { name: 'Scrum Master Professional Certificate (SMPC®)',           issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
        { name: 'Scrum Product Owner Professional Certificate (SPOPC)',    issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
        { name: 'Scrum Foundation Professional Certificate (SFPC™)',      issuer: 'CertiProf', year: '2022', icon: './assets/logos/certiprof.webp' },
      ],
    },
    experience: {
      tag:          '// experience',
      title:        'Professional journey',
      tab_summary:    'Summary',
      tab_extended:   'Extended',
      collapse_all:   'Collapse all',
      expand_all:     'Expand all',
      jobs: [
        {
          role:     'Technical Instructor',
          company:  'EELA Institute',
          location: 'Guayaquil, Ecuador',
          period:   'Apr 2025 — Present',
          bullets: [
            'Technical instructor responsible for delivering courses on web development, programming, and software technologies.',
          ],
          tags: ['Python', 'Flask', 'Web Development', 'Programming'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'NAWI',
          location: 'Mexico City, Mexico (Remote)',
          period:   'Jul 2024 — Dec 2025',
          bullets: [
            'Designed, maintained, tested, and debugged source code for <strong>7+ microservices</strong> built with hexagonal architecture.',
            'Developed a custom package reducing shared process redundancy by <strong>35%</strong> and establishing standardized guidelines.',
            'Implemented account-to-account transfers, ATM withdrawals, national/international purchases, and transaction reversals.',
            'Integrated external APIs from <strong>Dock (Neobank)</strong> and <strong>STP México</strong> aligned with the business model.',
          ],
          tags: ['Python', 'Flask', 'Hexagonal Arch.', 'Microservices', 'AWS'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'Coderland by Dominion',
          location: 'Panama City, Panama (Remote)',
          period:   'Sep 2022 — Mar 2024',
          bullets: [
            '<strong>Wambala:</strong> Audit, implementation and migration of athlete training platform from React.js + Flask to Next.js + PostgreSQL. Firebase notifications and SendGrid email delivery.',
            '<strong>BitBase:</strong> Flask middleware synchronizing crypto transactions from sales channels (ATMs/stores) to Odoo v15. EDA with Amazon MQ (RabbitMQ). ELK logging.',
            '<strong>Unnax-PFM:</strong> Support and refactoring of 15+ Flask/Next.js microservices. Report generation (XLSX/PDF/JSON), Celery + Redis tasks. CI/CD in Dev and QA.',
            '<strong>Coderland-Hirint:</strong> Java Spring Boot middleware automating the interconnection between Zoho CRM and Hirint.io with Webhook-based report generation.',
          ],
          tags: ['Python', 'Flask', 'Next.js', 'React.js', 'Java', 'Odoo v15', 'RabbitMQ'],
        },
        {
          role:     'SysAdmin & Full Stack Developer',
          company:  'TECNOSMART',
          location: 'Guayaquil, Ecuador (Hybrid)',
          period:   'Feb 2021 — Sep 2022',
          bullets: [
            'Developed custom functionalities and reengineered modules in <strong>Odoo v13</strong> (Accounting, Inventory, Tech Support, Paymentez).',
            'Managed and automated database backups (crontab) and monitoring across Dev and Production environments.',
            'Integrated <strong>Odoo with WooCommerce</strong> (WordPress) and led the integration of the <strong>PlacetoPay</strong> payment gateway.',
          ],
          tags: ['Odoo v13', 'Python', 'WooCommerce', 'WordPress', 'Ubuntu'],
        },
        {
          role:     'Backend Developer',
          company:  'LOGA SYSTEMS',
          location: 'Guayaquil, Ecuador (Hybrid)',
          period:   'Jun 2018 — Aug 2020',
          bullets: [
            'Implemented multiple modules for <strong>Loga Hub</strong>: Audit, Shipping Line Itineraries, and Partner Segment management.',
            'Developed a reporting microservice with <strong>Java Spring Boot and iText7</strong> to decouple processing load from the main application.',
            'Contributed to the configurable explorer module for advanced searches on orders, clients, and partners.',
          ],
          tags: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'iText7'],
        },
        {
          role:     'Web & Software Developer',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (On-site)',
          period:   'Apr 2017 — May 2018',
          bullets: [
            'Developed multiple <strong>Odoo v11</strong>-based websites for supermarkets, hardware stores, and staffing companies.',
            'Built a Python/BASH daemon for access control at a stadium with <strong>50,000+ spectators</strong>.',
            'Deployed <strong>50+ POS systems</strong> across 5 supermarket chain locations with 500+ daily customers.',
          ],
          tags: ['Odoo v11', 'Python', 'BASH', 'POS', 'v12 Migration'],
        },
        {
          role:     'Semi-Senior Developer',
          company:  'DRONCAT S.A.',
          location: 'Manta, Ecuador (On-site)',
          period:   'Apr 2017 — Nov 2017',
          bullets: [
            'Developed a <strong>native Android app</strong> (online/offline) for urban cadaster data recording with automatic server synchronization.',
            'Improved mobile app performance by <strong>7.5×</strong> with multi-threaded data loading via Multipart requests.',
            'Collaborated on new features for Odoo v11 deployed on a CentOS 7 server.',
          ],
          tags: ['Android', 'Java', 'Odoo v11', 'Python', 'CentOS'],
        },
      ],

      /* ── Extended version (all positions) ── */
      jobs_extended: [
        {
          role:     'Technical Instructor',
          company:  'EELA Institute',
          location: 'Guayaquil, Ecuador',
          period:   'Apr 2025 — Present',
          bullets: [
            'Technical instructor responsible for delivering courses on web development, programming, and software technologies.',
          ],
          tags: ['Python', 'Flask', 'Web Development', 'Programming'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'NAWI',
          location: 'Mexico City, Mexico (Remote)',
          period:   'Jul 2024 — Dec 2025',
          bullets: [
            'Designed, maintained, tested, and debugged source code for <strong>7+ microservices</strong> with hexagonal architecture.',
            'Developed a custom package reducing shared process redundancy by <strong>35%</strong> and establishing standardized guidelines.',
            'Implemented C2C transfers, ATM withdrawals, national/international purchases, and transaction reversals.',
            'Integrated external APIs from <strong>Dock (Neobank)</strong> and <strong>STP México</strong> aligned with the business model.',
          ],
          tags: ['Python', 'Flask', 'Hexagonal Arch.', 'Microservices', 'AWS'],
        },
        {
          role:     'Senior Software Engineer',
          company:  'Coderland by Dominion',
          location: 'Panama City, Panama (Remote)',
          period:   'Sep 2022 — Mar 2024',
          bullets: [
            'Led audit, development, and migration of applications (Wambala, BitBase, Unnax-PFM, Hirint) improving performance and server communication.',
            'Implemented and managed middleware for data synchronization, automated document generation, and monitoring systems (ELK).',
            'Support and refactoring of 15+ microservices, database management, and scheduled tasks (Celery + Redis).',
            'Managed estimation, scope, and documentation for clients like <strong>Telefónica Movistar MX</strong> and <strong>Infrared Iberia</strong>.',
          ],
          tags: ['Python', 'Flask', 'Next.js', 'Java', 'Odoo v15', 'RabbitMQ'],
        },
        {
          role:     'Vice President Public Relations',
          company:  'Toastmasters Ecuador',
          location: 'Ecuador (Volunteering)',
          period:   'May 2022 — May 2023',
          bullets: [
            'Responsible for the club\'s communication and visibility across social media and digital channels.',
            'Coordinated events and campaigns to attract new members and strengthen the communication community.',
          ],
          tags: ['Communication', 'Leadership', 'PR', 'Volunteering'],
        },
        {
          role:     'SysAdmin & Full Stack Developer',
          company:  'TECNOSMART',
          location: 'Guayaquil, Ecuador (Hybrid)',
          period:   'Feb 2021 — Sep 2022',
          bullets: [
            'Developed custom functionalities and reengineered modules for <strong>Odoo v13</strong> (Accounting, Inventory, Tech Support, Paymentez).',
            'Managed and automated database backups (crontab) and monitoring across Dev and Production environments.',
            'Integrated <strong>Odoo with WooCommerce</strong> (WordPress) and led the integration of the <strong>PlacetoPay</strong> payment gateway.',
          ],
          tags: ['Odoo v13', 'Python', 'WooCommerce', 'WordPress', 'Ubuntu'],
        },
        {
          role:     'Chief Executive Officer',
          company:  'Milestone Tech Consulting',
          location: 'Guayaquil, Ecuador',
          period:   'Aug 2020 — Present',
          bullets: [
            'Entrepreneurship focused on delivering affordable technology solutions to micro-entrepreneurs and SMEs using open-source technologies.',
            'Technical consulting, custom software development, and cloud infrastructure support for clients in Ecuador.',
          ],
          tags: ['Entrepreneurship', 'Python', 'Odoo', 'AWS', 'Open Source'],
        },
        {
          role:     'Backend Developer',
          company:  'LOGA SYSTEMS',
          location: 'Guayaquil, Ecuador (Hybrid)',
          period:   'Jun 2018 — Aug 2020',
          bullets: [
            'Implemented modules for <strong>Loga Hub</strong>: Audit, Shipping Line Itineraries, and Partner Segment management.',
            'Developed a reporting microservice with <strong>Java Spring Boot and iText7</strong> decoupling processing load from the main application.',
            'Contributed to the configurable explorer module for advanced searches on orders, clients, and partners.',
          ],
          tags: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'iText7'],
        },
        {
          role:     'Technical Consultant',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (On-site)',
          period:   'Feb 2018 — May 2018',
          bullets: [
            'Responsible for overseeing the functional and technical training of the company\'s development team in Odoo technologies.',
          ],
          tags: ['Odoo', 'Python', 'Consulting', 'Training'],
        },
        {
          role:     'Web & Software Developer',
          company:  'Ecuador On Rails',
          location: 'Guayaquil, Ecuador (On-site)',
          period:   'Dec 2017 — May 2018',
          bullets: [
            'Developed multiple <strong>Odoo v11</strong>-based websites for supermarkets, hardware stores, and staffing companies.',
            'Built a Python/BASH daemon for access control at a stadium with <strong>50,000+ spectators</strong>.',
            'Deployed <strong>50+ POS systems</strong> across 5 supermarket chain locations with 500+ daily customers.',
          ],
          tags: ['Odoo v11', 'Python', 'BASH', 'POS'],
        },
        {
          role:     'Semi-Senior Developer',
          company:  'DRONCAT S.A.',
          location: 'Manta, Ecuador (On-site)',
          period:   'Apr 2017 — Nov 2017',
          bullets: [
            'Developed a <strong>native Android app</strong> (online/offline) for urban cadaster data recording with automatic server sync.',
            'Improved mobile app performance by <strong>7.5×</strong> with multi-threaded data loading via Multipart requests.',
            'Collaborated on new features for Odoo v11 on a CentOS 7 server.',
          ],
          tags: ['Android', 'Java', 'Odoo v11', 'Python', 'CentOS'],
        },
        {
          role:     'Teacher',
          company:  'Tecnológico Sudamericano (TECSU)',
          location: 'Guayaquil, Ecuador',
          period:   'Mar 2015 — Jun 2015',
          bullets: [
            'Instructor for <strong>Basic Programming, Computing II, and Operating Systems I & II</strong> for university students.',
          ],
          tags: ['Teaching', 'Programming', 'Operating Systems'],
        },
        {
          role:     'Junior Software Developer',
          company:  '5Bits',
          location: 'Guayaquil, Ecuador',
          period:   'Apr 2014 — Sep 2015',
          bullets: [
            'Developed a <strong>C#-based API</strong> enabling communication and data extraction between the 4D database, facilitating migration to SQL Server.',
            'Contributed to the maintenance of the company\'s internal electronic billing application.',
            'Designed and implemented web pages for <strong>10+ clients</strong> using HTML, CSS, JS, SASS, and ES5.',
          ],
          tags: ['C#', 'SQL Server', 'JavaScript', 'HTML/CSS', 'SASS'],
        },
        {
          role:     'Undergraduate Teaching Assistant',
          company:  'ESPOL – Faculty of Engineering',
          location: 'Guayaquil, Ecuador',
          period:   'Apr 2013 — Jan 2015',
          bullets: [
            'Teaching assistant for: <strong>Essentials of Programming, Object-Oriented Programming, and Computer Networks</strong>.',
            'Recognized as <strong>Outstanding Undergraduate Teaching Assistant</strong> (Oct 2013 – Feb 2014 / Apr 2014 – Sep 2014).',
          ],
          tags: ['Teaching', 'Python', 'Java', 'Networking', 'ESPOL'],
        },
        {
          role:     'Member & Volunteer',
          company:  'IEEE ESPOL Student Branch',
          location: 'Guayaquil, Ecuador',
          period:   'Oct 2011 — Jun 2018',
          bullets: [
            'Computer Society Chapter Chair (2013–2014) and Branch Vice Chair (2015–2016).',
            'Participant and proctor of the <strong>IEEEXtreme</strong> 24-hour programming competition.',
            'Leadership in electrical and computing engineering community activities at student level.',
          ],
          tags: ['IEEE', 'Leadership', 'Volunteering', 'Programming'],
        },
      ],
    },
    projects: {
      tag:            '// projects',
      title:          'Featured projects',
      featured_label: '★ Featured project',
      view_all:         'See all projects →',
      page_title:       'All projects',
      page_subtitle:    'Full collection of projects: products, platforms and integrations developed throughout my career.',
      back:             '← Back to home',
      filter_all:       'All technologies',
      filter_label:     'Filter by technology',
      filter_apply:     'Apply',
      showing_pre:      'Showing',
      showing_mid:      'of',
      showing_post:     'projects',
      prev:             '← Previous',
      next:             'Next →',
      no_results:       'No projects match the selected technologies.',
      clear_filters:    'Clear filters',
      items: [
        {
          relevance: 'featured',
          title: 'NAWI – Fintech Microservices Platform',
          desc:  'Hexagonal architecture with 7+ microservices for a neobank. C2C transfers, ATM withdrawals, national/international purchases, and integration with external authorizers Dock and STP México.',
          tech:  ['Python', 'Flask', 'Microservices', 'AWS', 'Hexagonal Arch.'],
          repo: '#', demo: 'https://nawicard.com/',
        },
        {
          relevance: 'relevant',
          title: 'Wambala – High-Performance Athlete Platform',
          desc:  'Full platform migration from React.js + Flask + SQLite to Next.js + PostgreSQL. Sports schedule optimization, Firebase notifications, and SendGrid email delivery.',
          tech:  ['Next.js', 'Flask', 'PostgreSQL', 'Firebase', 'SendGrid'],
          repo: '#', demo: 'https://wambala.es/',
        },
        {
          relevance: 'relevant',
          title: 'BitBase – Crypto Exchange Middleware',
          desc:  'Flask middleware synchronizing transactions from sales channels (ATMs/stores) to Odoo v15 via JSON-RPC. PDF invoice/quote generation and async event handling with Amazon MQ (RabbitMQ).',
          tech:  ['Python', 'Flask', 'Odoo v15', 'RabbitMQ', 'ELK'],
          repo: '#', demo: 'http://bitbase.es/',
        },
        {
          relevance: 'standard',
          title: 'Loga Hub – Logistics & Customs Platform',
          desc:  'Audit, shipping line itinerary, and partner segment modules. Reporting microservice with Java Spring Boot and iText7 that decoupled document generation load from the main server.',
          tech:  ['Java', 'Spring Boot', 'Python', 'iText7', 'PostgreSQL'],
          demo: 'https://logihub.com/',
        },
        {
          relevance: 'standard',
          title: 'Avasant – Corporate Website',
          desc:  'End-to-end development and management of the digital ecosystem for Avasant Consulting S.A.S., a consultancy specializing in business acceleration programs and empowerment for women entrepreneurs and migrant populations. Design and deployment under WordPress, Astra, and Spectra, infrastructure management on Hostinger, and Google Workspace integration for firm operations. Advanced technical solutions for high-fidelity multimedia content delivery.',
          tech:  ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Hostinger', 'DNS', 'Google'],
          demo: 'https://avasant-consulting.com/',
        },
      ],
    },
    contact: {
      tag:           '// contact',
      title:         "Let's talk",
      text:          'Have a project in mind or an exciting opportunity? I\'d love to hear from you. I usually reply within 24 hours.',
      name_label:    'Name',
      name_ph:       'Your full name',
      email_label:   'Email address',
      email_ph:      'you@email.com',
      msg_label:     'Message',
      msg_ph:        'Tell me about your project or proposal…',
      send:          'Send message',
      sending:       'Sending…',
      sent:          'Message sent! ✓',
      lbl_email:     'Email',
      lbl_phone:     'Phone',
      lbl_linkedin:  'LinkedIn',
    },
    footer: {
      copy: '© 2026 Víctor Rodríguez',
    },
    talks: {
      tag:                      '// talks & conferences',
      title:                    'On Stage',
      description:              'Conferences, workshops, and technical talks delivered at industry events, universities, and software communities throughout my career.',
      cta:                      'See all talks →',
      stat_conferences_label:   'Conferences',
      stat_workshops_label:     'Workshops',
      stat_talks_label:         'Talks',
      page_title:               'Talks & Conferences',
      page_subtitle:            'Events where I have shared knowledge about technology, software development, and technical leadership.',
      back:                     '← Back to home',
      filter_all:               'All',
      filter_conference:        'Conferences',
      filter_workshop:          'Workshops',
      filter_talk:              'Talks',
      badge_conference:         'Conference',
      badge_workshop:           'Workshop',
      badge_talk:               'Talk',
      link_slides:              'Slides',
      link_video:               'Video',
      link_resources:           'Resources',
      modality_virtual:         'Virtual',
      modality_presential:      'In-person',
      modality_hybrid:          'Hybrid',
      lbl_modality:             'Modality',
      empty_title:              'Coming Soon',
      empty_desc:               'Talks and conferences will be published here very soon.',
    },
  },
};

/* ============================================================
   TALKS DATA — single source of truth, bilingual fields
   Add new talks here. Descriptions provided in ES are translated to EN.
   Fields with object value { es, en } are language-aware.
   All other fields (type, event, location, topics, links) are language-neutral.
   Talks are sorted most-recent → oldest automatically by the renderer.
   ============================================================ */
const talksData = [
  {
    type:        'workshop',
    title:       '𝘼𝙥𝙧𝙚𝙣𝙙𝙚 𝙎𝙘𝙧𝙪𝙢 𝙮 𝙣𝙤 𝙢𝙤𝙧𝙞𝙧 𝙚𝙣 𝙚𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙤',
    event:       'IEEE RNR Latacunga 2022',
    date:        { es: 'Septiembre 2022', en: 'September 2022' },
    location:    'Latacunga, Ecuador',
    modality:    'presential',
    description: {
      es: 'En la presentación se expone el marco de trabajo ágil SCRUM como una solución flexible frente al rígido modelo tradicional en cascada, con el objetivo de reducir errores y entregar productos funcionales a corto plazo. Se detalla que esta metodología se fundamenta en un equipo colaborativo y sin jerarquías compuesto por el Product Owner, el Scrum Master y los Developers que estructura su trabajo en ciclos de hasta un mes denominados Sprints. A través de estos Sprints y sus respectivos eventos tales como Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective, se asegura la mejora continua y la rápida adaptación a los cambios. La sesión finaliza destacando la ventaja profesional de obtener certificaciones oficiales y dando paso a un taller práctico de simulación.',
      en: 'The presentation introduces the SCRUM agile framework as a flexible alternative to the rigid traditional waterfall model, aiming to reduce errors and deliver functional products in the short term. It details that this methodology is based on a collaborative and non-hierarchical team—composed of the Product Owner, the Scrum Master, and the Developers—that structures its work in cycles of up to one month called Sprints. Through these Sprints and their respective events, such as Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective, continuous improvement and rapid adaptation to changes are ensured. The session concludes by highlighting the professional advantage of obtaining official certifications and making way for a practical simulation workshop.',
    },
    topics:      ['IEEE', 'Scrum', 'Agile'],
    slides:      '',
    video:       '',
    resources:   'https://www.linkedin.com/posts/victorrodriguezc_peque%C3%B1o-extracto-de-mi-ponencia-%F0%9D%98%BC%F0%9D%99%A5%F0%9D%99%A7%F0%9D%99%9A-activity-6977662961377026048-2P3U',
    thumbnail:   './assets/talks/rnr-latacunga-2022.png',
  },
  {
    type:        'workshop',
    title:       'AWS + Odoo',
    event:       'FLISoL Loja 2021',
    date:        { es: 'Abril 2021',  en: 'April 2021' },
    location:    'Loja, Ecuador',
    modality:    'virtual',           // 'virtual' | 'presential' | 'hybrid'
    description: {
      es: 'Demostración en vivo sobre el despliegue de una arquitectura basada en Amazon Web Services para ejecutar el ERP de Odoo. Se explicó cómo crear una infraestructura en la nube con VPC, subredes públicas y privadas, tablas de ruteo, Internet Gateway, instancias EC2 para servidores Ubuntu y bases de datos RDS. También se mostró cómo configurar dominios con Route 53 y habilitar conexiones seguras con certificados SSL usando Certbot.',
      en: 'Live demonstration of deploying an Amazon Web Services-based architecture to run the Odoo ERP. Covered building a cloud infrastructure with VPC, public and private subnets, routing tables, Internet Gateway, EC2 instances for Ubuntu servers, and RDS databases. Also showed how to configure domains with Route 53 and enable secure connections using SSL certificates with Certbot.',
    },
    topics:      ['Python', 'AWS', 'Odoo', 'ERP'],
    slides:      '',
    video:       'https://www.youtube.com/watch?v=hE8edNyfqI4&t=7087s',
    resources:   '',
    thumbnail:   './assets/talks/flisol-loja-2021.png',
  },
];

/* ============================================================
   LANGUAGE DETECTION
   Hierarchy:
     1. localStorage saved preference
     2. navigator.language (browser / OS setting)
     3. Timezone inference (Latin-American / Spanish-speaking)
     4. Default → Spanish (author's primary language)
   ============================================================ */
const SPANISH_TIMEZONES = [
  'America/Bogota','America/Lima','America/Santiago','America/Guayaquil',
  'America/Mexico_City','America/Monterrey','America/Merida','America/Cancun',
  'America/Havana','America/Santo_Domingo','America/Caracas','America/La_Paz',
  'America/Asuncion','America/Montevideo','America/Buenos_Aires',
  'America/Argentina','America/Managua','America/Tegucigalpa',
  'America/Guatemala','America/El_Salvador','America/Costa_Rica',
  'America/Panama','America/Mazatlan','America/Chihuahua',
  'Europe/Madrid','Africa/Ceuta',
];

function detectLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved === 'es' || saved === 'en') return saved;

  const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (SPANISH_TIMEZONES.some(z => tz.startsWith(z))) return 'es';
  } catch (_) {}

  return 'es';
}

/* ============================================================
   CURRENT LANGUAGE STATE
   ============================================================ */
let currentLang = detectLanguage();

function t(keyPath) {
  const keys = keyPath.split('.');
  let val = translations[currentLang];
  for (const k of keys) {
    if (val == null) return keyPath;
    val = val[k];
  }
  return val ?? keyPath;
}

/* ============================================================
   APPLY DATA-I18N ATTRIBUTES
   ============================================================ */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });
}

/* ============================================================
   DYNAMIC RENDERERS
   ============================================================ */
const githubIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
const externalIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;
  const cards = t('skills.cards');
  container.innerHTML = cards.map((card, i) => `
    <div class="skill-card reveal" style="transition-delay:${i * 110}ms">
      <div class="skill-card__icon">${card.icon}</div>
      <h3 class="skill-card__title">${card.title}</h3>
      <ul class="skill-card__list">
        ${card.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderCerts() {
  const eduContainer  = document.getElementById('eduList');
  const certContainer = document.getElementById('certList');
  if (!eduContainer || !certContainer) return;

  const edu   = t('certs.education');
  const certs = t('certs.certifications');

  eduContainer.innerHTML = edu.map(e => `
    <div class="edu-card reveal">
      <div class="edu-card__icon">🎓</div>
      <div>
        <h4 class="edu-card__degree">${e.degree}</h4>
        <p class="edu-card__school">${e.school}</p>
        <p class="edu-card__detail">${e.detail}</p>
        <span class="edu-card__period">${e.period} · ${e.location}</span>
      </div>
    </div>
  `).join('');

  certContainer.innerHTML = certs.map((c, i) => {
    const isImgPath = /\.(svg|png|jpg|webp|ico)$/i.test(c.icon);
    const iconHtml = isImgPath
      ? `<img src="${c.icon}" alt="${c.issuer} logo" class="cert-logo" loading="lazy" />`
      : c.icon;
    return `
    <div class="cert-card reveal" style="transition-delay:${i * 80}ms">
      <div class="cert-card__icon">${iconHtml}</div>
      <div class="cert-card__body">
        <p class="cert-card__name">${c.name}</p>
        <span class="cert-card__meta">${c.issuer} · ${c.year}</span>
      </div>
    </div>`;
  }).join('');
}

/* ── Tab state ── */
let currentExpTab = 'summary';

function setExpTab(tab) {
  currentExpTab = tab;

  // Update tab active states
  document.querySelectorAll('.exp-tab').forEach(btn => {
    btn.classList.toggle('exp-tab--active', btn.dataset.tab === tab);
  });

  // Reset toggle-all button to "expanded" state
  const masterBtn = document.getElementById('expToggleAll');
  if (masterBtn) {
    masterBtn.dataset.state = 'expanded';
    masterBtn.classList.remove('exp-toggle-all--collapsed');
    const span = masterBtn.querySelector('span');
    if (span) span.textContent = t('experience.collapse_all');
  }

  renderExperience();
}

function renderExperience() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  const jobsKey = currentExpTab === 'extended' ? 'experience.jobs_extended' : 'experience.jobs';
  const jobs = t(jobsKey);

  // Fade-out → swap → fade-in
  container.style.opacity = '0';
  container.style.transform = 'translateY(12px)';
  container.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

  setTimeout(() => {
    container.innerHTML = jobs.map(job => `
      <div class="timeline__item reveal visible">
        <div class="timeline__marker"><div class="timeline__dot"></div></div>
        <div class="timeline__card">
          <button class="timeline__toggle" onclick="toggleExpItem(this)" aria-expanded="true">
            <div class="timeline__header">
              <div>
                <h3 class="timeline__role">${job.role}</h3>
                <p class="timeline__company">${job.company}
                  <span class="timeline__location">· ${job.location}</span>
                </p>
              </div>
              <div class="timeline__header-right">
                <span class="timeline__period">${job.period}</span>
                <svg class="timeline__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
          </button>
          <div class="timeline__body">
            <div class="timeline__body-inner">
              <ul class="timeline__achievements">
                ${job.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
              <div class="timeline__tags">
                ${job.tags.map(tag => `<span>${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 200);
}

const RELEVANCE_ORDER = { featured: 0, relevant: 1, standard: 2 };

function renderTalkStats() {
  const conf = document.getElementById('teaserStatConferences');
  const work = document.getElementById('teaserStatWorkshops');
  const talk = document.getElementById('teaserStatTalks');
  if (!conf && !work && !talk) return;

  const counts = { conference: 0, workshop: 0, talk: 0 };
  (typeof talksData !== 'undefined' ? talksData : []).forEach(item => {
    if (counts[item.type] !== undefined) counts[item.type]++;
  });

  if (conf) conf.textContent = counts.conference;
  if (work) work.textContent = counts.workshop;
  if (talk) talk.textContent = counts.talk;
}

function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;
  const { items, featured_label } = t('projects');

  // Sort by relevance then apply optional limit from data-limit attribute
  const sorted = [...items].sort((a, b) =>
    (RELEVANCE_ORDER[a.relevance] ?? 2) - (RELEVANCE_ORDER[b.relevance] ?? 2)
  );
  const limit = parseInt(container.dataset.limit) || Infinity;
  const visible = sorted.slice(0, limit);

  container.innerHTML = visible.map(p => `
    <article class="project-card ${p.relevance === 'featured' ? 'project-card--featured' : ''} reveal">
      <div class="project-card__top">
        ${p.relevance === 'featured' ? `<span class="project-card__label">${featured_label}</span>` : '<span></span>'}
        <div class="project-card__links">
          ${p.demo ? `<a href="${p.demo}" aria-label="Demo" target="_blank" rel="noopener noreferrer">${externalIcon}</a>` : ''}
        </div>
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tech">
        ${p.tech.map(tag => `<span>${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  applyTranslations();
  renderSkills();
  renderCerts();
  renderExperience();
  renderProjects();
  renderTalkStats();

  // Update switcher button label
  const btn = document.getElementById('langSwitcher');
  if (btn) {
    btn.querySelector('.lang-current').textContent = lang.toUpperCase();
    btn.querySelector('.lang-alt').textContent = lang === 'es' ? 'EN' : 'ES';
  }

  // Re-observe newly rendered elements
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserverI18n.observe(el));
}

// Lightweight observer used exclusively for re-rendered elements
const revealObserverI18n = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserverI18n.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

/* ============================================================
   INIT
   ============================================================ */
function i18nInit() {
  document.documentElement.lang = currentLang;
  applyTranslations();
  renderSkills();
  renderCerts();
  renderExperience();
  renderProjects();
  renderTalkStats();

  // Language switcher
  const langBtn = document.getElementById('langSwitcher');
  if (langBtn) {
    langBtn.querySelector('.lang-current').textContent = currentLang.toUpperCase();
    langBtn.querySelector('.lang-alt').textContent = currentLang === 'es' ? 'EN' : 'ES';
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Experience tab switcher
  document.querySelectorAll('.exp-tab').forEach(btn => {
    btn.addEventListener('click', () => setExpTab(btn.dataset.tab));
  });

  // Collapse / Expand all button
  const toggleAllBtn = document.getElementById('expToggleAll');
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => toggleAllExp(toggleAllBtn));
  }
}

function toggleAllExp(masterBtn) {
  const isExpanded = masterBtn.dataset.state === 'expanded';
  const newState = isExpanded ? 'collapsed' : 'expanded';
  masterBtn.dataset.state = newState;

  // Update label
  const labelKey = newState === 'expanded' ? 'experience.expand_all' : 'experience.collapse_all';
  masterBtn.querySelector('span').textContent = t(labelKey);

  // Rotate icon
  masterBtn.classList.toggle('exp-toggle-all--collapsed', newState === 'collapsed');

  // Toggle every item
  document.querySelectorAll('#timelineContainer .timeline__toggle').forEach(btn => {
    const currentlyExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded && currentlyExpanded) toggleExpItem(btn);
    if (!isExpanded && !currentlyExpanded) toggleExpItem(btn);
  });
}

function toggleExpItem(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  const body = btn.closest('.timeline__card').querySelector('.timeline__body');
  if (expanded) {
    // Collapse: set explicit height first, then animate to 0
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(() => requestAnimationFrame(() => { body.style.maxHeight = '0'; }));
  } else {
    // Expand: animate to full height, then remove constraint
    body.style.maxHeight = body.scrollHeight + 'px';
    body.addEventListener('transitionend', () => { body.style.maxHeight = 'none'; }, { once: true });
  }
}

document.addEventListener('DOMContentLoaded', i18nInit);
