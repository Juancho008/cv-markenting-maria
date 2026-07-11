'use client';

import Image from 'next/image';
import HeroSection from '@/components/ui/hero-section-9';
import { FluidBackground } from '@/components/ui/fluid-background';
import { PageLoader } from '@/components/ui/page-loader';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Briefcase, Building2, Heart, Megaphone, Palette, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    id: 'mascotas-en-camino',
    title: 'Mascotas en Camino',
    description:
      'Pieza promocional para servicio de traslado de mascotas. Identidad en violeta y amarillo, mensaje claro y fotografía protagonista.',
    image: '/portfolio/mascotas-en-camino.png',
    accent: 'from-primary/20 to-accent/30',
    details: [
      { label: 'Servicio', value: 'Traslado de mascotas' },
      { label: 'Mensaje clave', value: 'Cómodos, seguros y cuidados' },
      { label: 'Redes', value: '@mascotasencamino.ok' },
    ],
  },
  {
    id: 'servicios-lav-teal',
    title: 'Servicios LAV — Pieza institucional',
    description:
      'Flyer para traslados médicos con paleta teal y verde lima. Diseño limpio con círculos, tipografía contundente y fotos de la flota.',
    image: '/portfolio/servicios-lav-teal.png',
    accent: 'from-teal-500/20 to-lime-400/25',
    details: [
      { label: 'Cliente', value: 'Servicios LAV' },
      { label: 'Alcance', value: 'Provincia, país y Paraguay' },
      { label: 'Contacto', value: 'traslados.lav@gmail.com' },
    ],
  },
  {
    id: 'servicios-lav-orange',
    title: 'Servicios LAV — Campaña 24 hs',
    description:
      'Variante en naranja y azul marino con hexágonos, íconos médicos y énfasis en guardia 24 horas. Comunica confianza y cobertura total.',
    image: '/portfolio/servicios-lav-orange.png',
    accent: 'from-orange-500/20 to-blue-900/20',
    details: [
      { label: 'Servicio', value: 'Traslados médicos' },
      { label: 'Destacado', value: 'Guardia 24 hs' },
      { label: 'Valores', value: 'Puntualidad · Responsabilidad' },
    ],
  },
  {
    id: 'serenna',
    title: 'Serenna — Centro de Bienestar',
    description:
      'Pieza de bienvenida para centro integral de bienestar corporal. Estética minimalista con tonos tierra, ilustración delicada y mensaje emocional que transmite calma y armonía.',
    image: '/portfolio/serenna-bienestar.png',
    accent: 'from-rose-200/40 to-emerald-200/30',
    details: [
      { label: 'Servicio', value: 'Bienestar corporal y reflexología' },
      { label: 'Mensaje clave', value: 'Tu refugio de paz y armonía' },
      { label: 'Instagram', value: '@reflexologia.serena' },
    ],
  },
  {
    id: 'macri-maquillaje',
    title: 'Macri Beauty — Maquillaje de escenario',
    description:
      'Flyer para formación en maquillaje de escenario. Estética elegante en marrón y dorado, íconos premium y jerarquía clara de fecha, horario y modalidad presencial.',
    image: '/portfolio/macri-maquillaje-escenario.png',
    accent: 'from-amber-600/25 to-stone-800/20',
    details: [
      { label: 'Curso', value: 'Formación en maquillaje de escenario' },
      { label: 'Profesora', value: 'Nadia Macri' },
      { label: 'Instagram', value: '@macribeautybusiness' },
    ],
  },
];

const experienceItems = [
  {
    title: 'Marketing digital para empresas',
    period: '2022 — Presente · +2 años',
    description:
      'Llevo más de dos años impulsando marcas locales y regionales con campañas orientadas a negocio: posicionamiento en Instagram, piezas promocionales y estrategia visual pensada para generar consultas, inscripciones y ventas.',
    highlights: [
      'Gestión de campañas con Meta Business Suite e Instagram para pymes',
      'Diseño de flyers, banners y contenido alineado al objetivo comercial',
      'Comunicación clara de servicios, beneficios y llamados a la acción',
    ],
  },
  {
    title: 'Diseño gráfico & identidad visual',
    period: '2021 — Presente',
    description:
      'Desarrollo piezas gráficas completas para distintos rubros — salud, bienestar, belleza y servicios — cuidando paleta, tipografía y jerarquía para que cada marca se vea profesional y memorable.',
    highlights: [
      'Branding visual para flyers, historias y publicaciones',
      'Adaptación de mensaje según público y rubro del cliente',
      'Coherencia estética en todas las piezas de una campaña',
    ],
  },
  {
    title: 'Estrategia de contenido & redes sociales',
    period: '2020 — Presente',
    description:
      'Planifico y ejecuto contenido que conecta con la audiencia: desde la idea creativa hasta la pieza final lista para publicar, con foco en engagement y presencia digital sólida.',
    highlights: [
      'Calendarios de contenido y piezas para Instagram',
      'Copy breve y directo para captar atención en segundos',
      'Seguimiento de resultados y mejora continua de campañas',
    ],
  },
];

const skills = [
  'Meta Business Suite',
  'Instagram Ads',
  'Diseño de flyers',
  'Branding visual',
  'Campañas para pymes',
  'Copy para redes',
  'Identidad de marca',
  'Contenido comercial',
];

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageLoader />
      <FluidBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="relative z-10 w-full"
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-lg font-bold tracking-tight text-transparent"
          >
            María · Marketing
          </motion.span>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {[
              { id: 'sobre-mi', label: 'Sobre mí' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'contacto', label: 'Contacto' },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.08 }}
                whileHover={{ y: -2 }}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </motion.header>

        <HeroSection
          title={
            <>
              Diseño piezas que <br />
              venden y conectan
            </>
          }
          subtitle="Más de 2 años creando campañas de marketing para empresas: diseño visual, contenido para Instagram y estrategia con Meta Business para que cada marca crezca con imagen profesional y resultados."
          actions={[
            {
              text: 'Ver portfolio',
              onClick: () => scrollToSection('portfolio'),
              variant: 'default',
            },
            {
              text: 'Contactar',
              onClick: () => scrollToSection('contacto'),
              variant: 'outline',
            },
          ]}
          stats={[
            {
              value: '2+',
              label: 'Años en marketing empresarial',
              icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
            },
            {
              value: '5+',
              label: 'Empresas con campañas activas',
              icon: <Building2 className="h-5 w-5 text-muted-foreground" />,
            },
            {
              value: '15+',
              label: 'Piezas gráficas creadas',
              icon: <Palette className="h-5 w-5 text-muted-foreground" />,
            },
          ]}
          images={[
            {
              src: '/portfolio/macri-maquillaje-escenario.png',
              alt: 'Flyer Macri Beauty — maquillaje de escenario',
              fit: 'contain',
            },
            {
              src: '/portfolio/mascotas-en-camino.png',
              alt: 'Flyer Mascotas en Camino — propaganda de María',
              fit: 'contain',
            },
            {
              src: '/portfolio/serenna-bienestar.png',
              alt: 'Flyer Serenna — bienestar corporal',
              fit: 'contain',
            },
          ]}
        />

        <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Perfil profesional
            </span>
            <h2 className="mt-4 text-3xl font-bold">Sobre mí</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Soy María, especialista en marketing digital y diseño gráfico
              para empresas. Llevo más de <strong className="text-foreground">2 años</strong>{' '}
              trabajando con negocios reales — centros de bienestar, servicios
              de traslado, academias de belleza y marcas locales — ayudándolos
              a comunicar mejor, verse más profesionales y llegar a más clientes
              a través de Instagram y herramientas de Meta Business.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Combino creatividad con enfoque comercial: cada flyer, banner o
              pieza de contenido está pensada para vender el servicio, destacar
              el diferencial de la marca y generar confianza desde el primer
              vistazo. Me apasiona transformar una idea en una campaña visual
              completa, lista para publicar y medir.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Target className="h-5 w-5 text-primary" />,
                  title: 'Enfoque business',
                  text: 'Campañas pensadas para consultas, ventas e inscripciones.',
                },
                {
                  icon: <Megaphone className="h-5 w-5 text-primary" />,
                  title: 'Redes & Meta',
                  text: 'Instagram, historias, ads y Meta Business Suite.',
                },
                {
                  icon: <Heart className="h-5 w-5 text-primary" />,
                  title: 'Diseño con alma',
                  text: 'Piezas que conectan emocionalmente con la audiencia.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-card/70 p-5 backdrop-blur-md"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Herramientas y habilidades
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-sm text-foreground backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="portfolio" className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <ScrollReveal>
              <span className="inline-block rounded-full bg-accent/80 px-4 py-1 text-sm font-medium text-accent-foreground">
                Portfolio
              </span>
              <h2 className="mt-4 text-3xl font-bold">Proyectos de María</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                Piezas gráficas reales para belleza, bienestar, traslados y
                más: flyers y campañas con identidad visual propia.
              </p>
            </ScrollReveal>

            <div className="mt-12 space-y-20">
              {portfolioProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <article
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className={`relative overflow-hidden rounded-3xl border border-border/60 bg-white p-4 shadow-2xl backdrop-blur-md bg-gradient-to-br ${project.accent}`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — diseñado por María`}
                        width={600}
                        height={900}
                        className="h-auto w-full rounded-2xl"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-1">
                        {project.details.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur-md"
                          >
                            <p className="text-sm text-muted-foreground">
                              {item.label}
                            </p>
                            <p className="mt-1 font-semibold text-foreground">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="border-t border-border/50">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <ScrollReveal>
              <span className="inline-block rounded-full bg-accent/80 px-4 py-1 text-sm font-medium text-accent-foreground">
                Trayectoria
              </span>
              <h2 className="mt-4 text-3xl font-bold">Experiencia</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                Más de dos años acompañando empresas en su crecimiento digital:
                desde la estrategia hasta la pieza gráfica final, con foco en
                marketing de negocios y presencia profesional en redes.
              </p>
            </ScrollReveal>
            <ul className="mt-10 space-y-6">
              {experienceItems.map((job, index) => (
                <ScrollReveal key={job.title} delay={index * 0.12}>
                  <motion.li
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="rounded-xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {job.period}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-3xl px-6 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold">¿Trabajamos juntos?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ¿Tenés un negocio y querés mejorar tu presencia digital? Escríbeme
              y armamos una campaña a tu medida.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Escríbeme a{' '}
              <motion.a
                href="mailto:maria@email.com"
                whileHover={{ scale: 1.05 }}
                className="inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                maria@email.com
              </motion.a>
            </p>
          </ScrollReveal>
        </section>
      </motion.div>
    </>
  );
}
