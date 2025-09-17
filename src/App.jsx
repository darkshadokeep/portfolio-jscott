
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Download, ExternalLink, Menu, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

// Theme hook + toggle
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    const root = document.documentElement
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  return { theme, setTheme }
}
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-700">
      <span className="h-3 w-3 rounded-full" style={{ background: isDark ? '#F5C542' : '#0F172A' }} />
      {isDark ? 'Oscuro' : 'Claro'}
    </button>
  )
}

// Brand colors
const BRAND_COLORS = {
  Email: '#0A66C2',
  WhatsApp: '#25D366',
  'Adobe Photoshop': '#31A8FF',
  'Adobe Illustrator': '#FF9A00',
  'Adobe InDesign': '#FF3366',
}

// Data
const DATA = {
  name: 'José Enrique Scott',
  alias: 'Scotty / Mozan',
  role: 'Diseñador Gráfico & Creador de Contenido',
  location: 'Panamá',
  phone: '+507 6006-2740',
  id: 'Cédula: 8-830-470',
  email: 'blackberry.scream@gmail.com',
  cvUrl: '/cv/CV_JSCOTT_FINAL.pdf',
  summary:
    'Diseñador con +7 años de experiencia creando soluciones visuales para instituciones públicas y marcas. Especialista en Adobe Creative Suite, branding y contenido digital.',
  skills: [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
    'Branding', 'Contenido Digital', 'Social Media Graphics',
    'Maquetación', 'UI/UX (básico)', 'Inglés Intermedio',
  ],
  experience: [
    {
      title: 'Diseñador Gráfico',
      company: 'IDAAN — Instituto de Acueductos y Alcantarillados Nacionales',
      period: 'May 2022 – Abr 2025',
      bullets: [
        'Diseño de campañas institucionales para concienciación y programas sociales.',
        'Soporte visual a comunicación interna y externa en medios digitales e impresos.',
      ],
    },
    {
      title: 'Diseñador Gráfico',
      company: 'ISA — Instituto de Seguro Agropecuario',
      period: 'Abr 2017 – May 2022',
      bullets: [
        'Producción de piezas impresas y digitales para campañas institucionales.',
        'Coordinación interdepartamental para optimizar la comunicación visual.',
      ],
    },
    {
      title: 'Diseñador Freelance & Proyectos Creativos',
      company: 'Panamá',
      period: 'Abr 2025 – Actualidad',
      bullets: [
        'Branding y artes para redes sociales y campañas digitales para emprendimientos.',
        'Catálogos, flyers y asesoría visual de marca.',
      ],
    },
    {
      title: 'Promotor de Ventas (Nintendo)',
      company: 'Videojuegos Latinoamérica',
      period: 'Ago 2014 – Ene 2015',
      bullets: [
        'Activaciones y demostraciones en retail para consolas y juegos Nintendo.',
        'Experiencia en marketing experiencial y atención al cliente.',
      ],
    },
  ],
  projects: [
    {
      title: 'Campaña institucional (IDAAN)',
      tags: ['Branding', 'RRSS', 'Impresos'],
      href: '#',
      note: 'Antes/Después — piezas para concienciación ambiental.',
      images: ['/screenshots/campana-institucional-idaan-1.jpg'],
    },
    {
      title: 'Identidad para emprendimiento local',
      tags: ['Logo', 'Manual', 'Aplicaciones'],
      href: '#',
      note: 'Sistema visual y aplicaciones en redes.',
      images: ['/screenshots/identidad-emprendimiento-1.jpg'],
    },
    {
      title: 'Catálogo de productos (Freelance)',
      tags: ['Maquetación', 'Impreso'],
      href: '#',
      note: 'Estructura limpia enfocada en conversión.',
      images: ['/screenshots/catalogo-productos-freelance-1.jpg'],
    },
  ],
}

// Sticky Header with hamburger
function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const items = [
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#experiencia', label: 'Experiencia' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container-narrow py-3 flex items-center justify-between">
        <a href="#" className="font-semibold">JScott</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => <a key={it.href} href={it.href} className="hover:underline">{it.label}</a>)}
          <ThemeToggle />
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700">
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="container-narrow py-2 flex flex-col gap-2">
            {items.map((it) => <a key={it.href} href={it.href} className="py-2">{it.label}</a>)}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{DATA.name}</h1>
              <ThemeToggle />
            </div>
            <p className="text-slate-500 dark:text-slate-300">{DATA.alias} · {DATA.location}</p>
            <p className="mt-3 text-lg max-w-2xl text-slate-800 dark:text-slate-200">{DATA.role}</p>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{DATA.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${DATA.email}`} className="btn bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900">
                <Mail size={16} style={{ color: BRAND_COLORS.Email }} /> Contáctame
              </a>
              <a href={DATA.cvUrl} target="_blank" rel="noreferrer" className="btn bg-blue-600 hover:bg-blue-700 text-white">
                <Download size={16} /> Descargar CV (PDF)
              </a>
              <a href={`https://wa.me/507${DATA.phone.replace(/[^0-9]/g, '').slice(-8)}`} target="_blank" rel="noreferrer" className="btn bg-[#25D366] hover:brightness-110 text-white">
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="min-w-[260px] md:text-right">
            <p className="text-sm text-slate-500 dark:text-slate-300">Tel: {DATA.phone}</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">{DATA.id}</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">Email: {DATA.email}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Projects slider (one big card with arrows, dots, swipe)
function Projects() {
  const [index, setIndex] = useState(0)
  const projects = DATA.projects

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex((i) => (i + 1) % projects.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const [touchStartX, setTouchStartX] = useState(null)
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX)
  const handleTouchMove = (e) => {
    if (touchStartX === null) return
    const delta = e.touches[0].clientX - touchStartX
    if (Math.abs(delta) > 60) {
      delta > 0 ? prev() : next()
      setTouchStartX(null)
    }
  }
  const handleTouchEnd = () => setTouchStartX(null)

  const p = projects[index]

  return (
    <section id="proyectos" className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">Proyectos Destacados</h2>
      <div className="card overflow-hidden border-slate-200 dark:border-slate-700 dark:bg-slate-800">
        <div
          className="relative aspect-[16/9] select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Array.isArray(p.images) && p.images.length > 0 ? (
            <motion.img
              key={index}
              src={p.images[0]}
              alt={p.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700" />
          )}

          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
            <h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">{p.title}</h3>
            <p className="text-sm md:text-base opacity-90">{p.note}</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {p.tags.map((t, j) => (
                <span key={j} className="rounded-xl px-2.5 py-1 text-xs md:text-sm bg-white/20 backdrop-blur border border-white/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/60 ${i === index ? 'bg-white' : 'bg-white/30'}`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="p-4 md:p-6 flex items-center justify-between gap-3">
          <div className="text-slate-700 dark:text-slate-200 text-sm md:text-base line-clamp-2">{p.note}</div>
          <a href={p.href} target="_blank" rel="noreferrer" className="btn border border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
            Ver proyecto <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="habilidades" className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((s, i) => (
          <span
            key={i}
            className="rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"
            style={BRAND_COLORS[s] ? { backgroundColor: BRAND_COLORS[s], color: 'white' } : undefined}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">Experiencia Creativa</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {DATA.experience.map((job, i) => (
          <div key={i} className="card p-4 border-slate-200 dark:border-slate-700 dark:bg-slate-800 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="font-semibold text-slate-900 dark:text-white">{job.title}</div>
            <div className="text-sm text-slate-500 dark:text-slate-300">{job.company}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{job.period}</div>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-800 dark:text-slate-200">
              {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// Floating WhatsApp button (mobile only)
function FloatingWhatsApp() {
  const num = DATA.phone.replace(/[^0-9]/g, '').slice(-8)
  return (
    <a
      href={`https://wa.me/507${num}`}
      target="_blank"
      rel="noreferrer"
      className="fixed md:hidden bottom-5 right-5 rounded-full p-4 bg-[#25D366] text-white shadow-lg hover:brightness-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  )
}

function Footer() {
  return (
    <footer className="mt-16 pb-10 text-center text-sm text-slate-500 dark:text-slate-400">
      © {new Date().getFullYear()} {DATA.name}. Hecho con ♥ en Panamá.
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="container-narrow py-6 md:py-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
