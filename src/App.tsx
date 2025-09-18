
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Palette, Share2, LayoutPanelTop, MonitorSmartphone, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

const BRAND_COLORS: Record<string, string> = {
  Email: '#0A66C2',
  WhatsApp: '#25D366',
  'Adobe Photoshop': '#31A8FF',
  'Adobe Illustrator': '#FF9A00',
  'Adobe InDesign': '#FF3366',
}

const AdobeLogo: React.FC<{ label: 'Ps' | 'Ai' | 'Id'; bg: string }> = ({ label, bg }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md font-semibold text-[11px] tracking-tight" style={{ backgroundColor: bg, color: '#0B0B0B' }} aria-hidden>{label}</span>
)

const IconWhatsApp: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}><path fill="#25D366" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .27 5.26.27 11.79c0 2.08.54 4.09 1.57 5.88L0 24l6.49-1.69a11.78 11.78 0 0 0 5.57 1.43h.01c6.53 0 11.79-5.26 11.79-11.79 0-3.15-1.23-6.11-3.34-8.22Zm-8.46 18.4h-.01a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.85 1 1.03-3.75-.24-.38a9.8 9.8 0 0 1-1.52-5.26c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.92c0 5.4-4.4 9.8-9.8 9.8Zm5.38-7.32c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.03c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.56c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.08 2.85 1.23 3.05.15.2 2.13 3.25 5.17 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.76-.72 2-1.41.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z"/></svg>
)
const IconGmail: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}><path fill="#EA4335" d="M12 12.713 1.5 5.25V18A2.25 2.25 0 0 0 3.75 20.25h3V10.237L12 14.25l5.25-4.013V20.25h3A2.25 2.25 0 0 0 22.5 18V5.25L12 12.713Z"/><path fill="#4285F4" d="M20.25 3.75h-3L12 7.763 6.75 3.75h-3A3 3 0 0 0 .75 6.75v.9L12 15.213 23.25 7.65v-.9a3 3 0 0 0-3-3Z"/></svg>
)
const IconDownload: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.279 12.707a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 1 1 0 2h14a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 1 1 2 0v3a1 1 0 0 0 1 1Z"/></svg>
)

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
            <a href={`mailto:${DATA.email}`}><Button className="rounded-2xl shadow-sm bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"><span className="inline-flex"><IconGmail className="h-4 w-4 mr-2"/></span>Contáctame</Button></a>
            <a href={DATA.cvUrl} target="_blank" rel="noreferrer"><Button className="rounded-2xl shadow-sm bg-blue-600 hover:bg-blue-700 text-white"><IconDownload className="h-4 w-4 mr-2"/>Descargar CV (PDF)</Button></a>
            <a href={`https://wa.me/507${DATA.phone.replace(/[^0-9]/g, '').slice(-8)}`} target="_blank" rel="noreferrer"><Button className="rounded-2xl shadow-sm bg-[#25D366] hover:brightness-110 text-white"><IconWhatsApp className="h-4 w-4 mr-2"/>WhatsApp</Button></a>
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
        if (s === 'Adobe Photoshop') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-900/5 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-slate-700"><AdobeLogo label="Ps" bg={BRAND_COLORS[s]} /> {s}</span>)
        if (s === 'Adobe Illustrator') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-900/5 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-slate-700"><AdobeLogo label="Ai" bg={BRAND_COLORS[s]} /> {s}</span>)
        if (s === 'Adobe InDesign') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-900/5 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-slate-700"><AdobeLogo label="Id" bg={BRAND_COLORS[s]} /> {s}</span>)
        if (s === 'Branding') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"><Palette className="h-4 w-4" /> {s}</span>)
        if (s === 'Contenido Digital' || s === 'Social Media Graphics') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"><Share2 className="h-4 w-4" /> {s}</span>)
        if (s === 'Maquetación') return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"><LayoutPanelTop className="h-4 w-4" /> {s}</span>)
        if (s.startsWith('UI/UX')) return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"><MonitorSmartphone className="h-4 w-4" /> {s}</span>)
        if (s.startsWith('Inglés')) return (<span key={i} className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 dark:text-slate-100"><Languages className="h-4 w-4" /> {s}</span>)
        return (<Badge key={i} className="bg-slate-100 dark:bg-slate-700 dark:text-slate-100">{s}</Badge>)
      })}
    </div>
  </section>
)

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0)
  const projects = DATA.projects
  const prev = () => setIndex(i => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex(i => (i + 1) % projects.length)
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next() }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => { if (touchStartX === null) return; const d = e.touches[0].clientX - touchStartX; if (Math.abs(d) > 60) { d > 0 ? prev() : next(); setTouchStartX(null) } }
  const handleTouchEnd = () => setTouchStartX(null)
  const p = projects[index]
  return (
    <section id="proyectos" className="mt-10">
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <Card className="rounded-2xl overflow-hidden">
        <div className="relative aspect-[16/9] select-none" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {Array.isArray(p.images) && p.images.length > 0 ? (<motion.img key={index} src={p.images[0]} alt={p.title} initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0 w-full h-full object-cover"/>) : (<div className="absolute inset-0 bg-slate-200 dark:bg-slate-700" />)}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
            <h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">{p.title}</h3>
            <p className="text-sm md:text-base opacity-90">{p.note}</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">{p.tags.map((t, j) => (<span key={j} className="rounded-xl px-2.5 py-1 text-xs md:text-sm bg-white/20 backdrop-blur border border-white/30">{t}</span>))}</div>
          </div>
          <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">‹</button>
          <button onClick={next} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2">›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">{projects.map((_, i) => (<button key={i} onClick={() => setIndex(i)} className={\`h-2.5 w-2.5 rounded-full border border-white/60 \${i===index?'bg-white':'bg-white/30'}\`} aria-label={\`Ir al slide \${i+1}\`}/>))}</div>
        </div>
        <CardContent className="p-4 md:p-6 flex items-center justify-between gap-3">
          <div className="text-slate-700 dark:text-slate-200 text-sm md:text-base line-clamp-2">{p.note}</div>
          <a href={p.href} target="_blank" rel="noreferrer"><Button className="rounded-xl">Ver proyecto <ExternalLink className="h-4 w-4 ml-1"/></Button></a>
        </CardContent>
      </Card>
    </section>
  )
}

const Footer: React.FC = () => (<footer className="mt-16 pb-10 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} José Enrique Scott. Hecho con ♥ en Panamá.</footer>)

export default function App(){return (<main className="mx-auto max-w-6xl px-4 py-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"><Hero/><Projects/><Skills/><Footer/></main>)}
