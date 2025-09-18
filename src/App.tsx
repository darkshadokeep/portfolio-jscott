
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved as 'light' | 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  return { theme, setTheme }
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-700" aria-label="Cambiar tema">
      <span className="h-3 w-3 rounded-full" style={{ background: isDark ? '#F5C542' : '#0F172A' }} />
      {isDark ? 'Modo oscuro' : 'Modo claro'}
    </button>
  )
}

const SKILL_STYLE: Record<string, { label: string; bg: string; img?: string }> = {
  'Adobe Photoshop': { label: 'Ps', bg: '#31A8FF', img: '/brand/adobe-ps.png' },
  'Adobe Illustrator': { label: 'Ai', bg: '#FF9A00', img: '/brand/adobe-ai.png' },
  'Adobe InDesign': { label: 'Id', bg: '#FF3366', img: '/brand/adobe-id.png' },
  'Branding': { label: 'Br', bg: '#C084FC' },
  'Contenido Digital': { label: 'Cd', bg: '#38BDF8' },
  'Social Media Graphics': { label: 'Sm', bg: '#22C55E' },
  'Maquetación': { label: 'Mq', bg: '#14B8A6' },
  'UI/UX (básico)': { label: 'Ux', bg: '#F59E0B' },
  'Inglés Intermedio': { label: 'En', bg: '#94A3B8' },
}

const DATA = {
  name: 'José Enrique Scott',
  alias: 'Scotty / Mozan',
  role: 'Diseñador Gráfico & Creador de Contenido',
  location: 'Panamá',
  phone: '+507 6006-2740',
  id: 'Cédula: 8-830-470',
  email: 'blackberry.scream@gmail.com',
  cvUrl: '/cv/CV_JSCOTT_FINAL.pdf',
  summary: 'Diseñador con +7 años de experiencia creando soluciones visuales para instituciones públicas y marcas. Especialista en Adobe Creative Suite, branding y contenido digital.',
  skills: ['Adobe Photoshop','Adobe Illustrator','Adobe InDesign','Branding','Contenido Digital','Social Media Graphics','Maquetación','UI/UX (básico)','Inglés Intermedio'],
  projects: [
    { title: 'Campaña institucional (IDAAN)', tags: ['Branding','RRSS','Impresos'], href: '#', note: 'Antes/Después — piezas para concienciación ambiental.', images: ['/screenshots/campana-institucional-idaan-1.jpg'] },
    { title: 'Identidad para emprendimiento local', tags: ['Logo','Manual','Aplicaciones'], href: '#', note: 'Sistema visual y aplicaciones en redes.', images: ['/screenshots/identidad-emprendimiento-1.jpg'] },
    { title: 'Catálogo de productos (Freelance)', tags: ['Maquetación','Impreso'], href: '#', note: 'Estructura limpia enfocada en conversión.', images: ['/screenshots/catalogo-productos-freelance-1.jpg'] },
  ],
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">{children}</h2>
)

const Hero: React.FC = () => (
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
            <a href={`mailto:${DATA.email}`}><Button className="rounded-2xl shadow-sm bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900">Contáctame</Button></a>
            <a href={DATA.cvUrl} target="_blank" rel="noreferrer"><Button className="rounded-2xl shadow-sm bg-blue-600 hover:bg-blue-700 text-white">Descargar CV (PDF)</Button></a>
            <a href={`https://wa.me/507${DATA.phone.replace(/[^0-9]/g, '').slice(-8)}`} target="_blank" rel="noreferrer"><Button className="rounded-2xl shadow-sm bg-[#25D366] hover:brightness-110 text-white">WhatsApp</Button></a>
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

const Skills: React.FC = () => (
  <section id="habilidades" className="mt-10">
    <SectionTitle>Habilidades</SectionTitle>
    <div className="flex flex-wrap gap-2">
      {DATA.skills.map((s, i) => {
        const st = SKILL_STYLE[s] || { label: s.slice(0,2), bg: '#CBD5E1' }
        return (
          <Badge key={i} className="ring-1 ring-slate-200 dark:ring-slate-700 bg-slate-900/5 dark:bg-white/10">
            {st.img
              ? (<img src={st.img} alt={st.label} className="w-6 h-6 rounded-md" />)
              : (<span className="inline-flex items-center justify-center w-6 h-6 rounded-md font-semibold text-[11px] tracking-tight" style={{ backgroundColor: st.bg, color: '#0B0B0B' }} aria-hidden>{st.label}</span>)
            }
            <span>{s}</span>
          </Badge>
        )
      })}
    </div>
  </section>
)

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0)
  const projects = DATA.projects
  const prev = () => setIndex(i => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex(i => (i + 1) % projects.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const delta = e.touches[0].clientX - touchStartX
    if (Math.abs(delta) > 60) { delta > 0 ? prev() : next(); setTouchStartX(null) }
  }
  const handleTouchEnd = () => setTouchStartX(null)

  const p = projects[index]

  return (
    <section id="proyectos" className="mt-10">
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <Card className="rounded-2xl overflow-hidden">
        <div className="relative aspect-[16/9] select-none" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {Array.isArray(p.images) && p.images.length > 0 ? (
            <img src={p.images[0]} alt={p.title} className="absolute inset-0 w-full h-full object-cover"/>
          ) : (<div className="absolute inset-0 bg-slate-200 dark:bg-slate-700" />)}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
            <h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">{p.title}</h3>
            <p className="text-sm md:text-base opacity-90">{p.note}</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">{p.tags.map((t, j) => (<span key={j} className="rounded-xl px-2.5 py-1 text-xs md:text-sm bg-white/20 backdrop-blur border border-white/30">{t}</span>))}</div>
          </div>
          <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">‹</button>
          <button onClick={next} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">{projects.map((_, i) => (<button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full border border-white/60 ${i===index?'bg-white':'bg-white/30'}`} aria-label={`Ir al slide ${i+1}`} />))}</div>
        </div>
        <CardContent className="p-4 md:p-6 flex items-center justify-between gap-3">
          <div className="text-slate-700 dark:text-slate-200 text-sm md:text-base line-clamp-2">{p.note}</div>
          <a href={p.href} target="_blank" rel="noreferrer"><Button className="rounded-xl">Ver proyecto</Button></a>
        </CardContent>
      </Card>
    </section>
  )
}

const Footer: React.FC = () => (<footer className="mt-16 pb-10 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} José Enrique Scott. Hecho con ♥ en Panamá.</footer>)

export default function App(){return (<main className="mx-auto max-w-6xl px-4 py-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"><Hero/><Projects/><Skills/><Footer/></main>)}
