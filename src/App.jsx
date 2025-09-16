import React from 'react'
import { Mail, Phone, Download, ExternalLink } from 'lucide-react'

const BRAND_COLORS = {
  Email: '#0A66C2',
  WhatsApp: '#25D366',
  'Adobe Photoshop': '#31A8FF',
  'Adobe Illustrator': '#FF9A00',
  'Adobe InDesign': '#FF3366',
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
  summary:
    'Diseñador con +7 años de experiencia creando soluciones visuales para instituciones públicas y marcas. Especialista en Adobe Creative Suite, branding y contenido digital. Transformo ideas en piezas que conectan con la audiencia.',
  skills: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Branding',
    'Contenido Digital',
    'Social Media Graphics',
    'Maquetación',
    'UI/UX (básico)',
    'Inglés Intermedio',
  ],
  experience: [
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
    },
    {
      title: 'Identidad para emprendimiento local',
      tags: ['Logo', 'Manual', 'Aplicaciones'],
      href: '#',
      note: 'Sistema visual y aplicaciones en redes.',
    },
    {
      title: 'Catálogo de productos (Freelance)',
      tags: ['Maquetación', 'Impreso'],
      href: '#',
      note: 'Estructura limpia enfocada en conversión.',
    },
  ],
}

function SectionTitle({ children }) {
  return <h2 className="text-2xl font-semibold tracking-tight mb-4">{children}</h2>
}

function Hero() {
  const waNum = DATA.phone.replace(/[^0-9]/g, '').slice(-8)
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-gradient-to-br from-slate-50 to-slate-100 border">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{DATA.name}</h1>
          <p className="text-slate-500">{DATA.alias} · {DATA.location}</p>
          <p className="mt-3 text-lg max-w-2xl">{DATA.role}</p>
          <p className="mt-2 max-w-2xl text-slate-600">{DATA.summary}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${DATA.email}`} className="btn btn-primary rounded-2xl shadow-sm">
              <Mail size={16} style={{ color: BRAND_COLORS.Email }} /> Contáctame
            </a>
            <a href={DATA.cvUrl} target="_blank" rel="noreferrer" className="btn btn-secondary rounded-2xl shadow-sm">
              <Download size={16} /> Descargar CV (PDF)
            </a>
            <a href={`https://wa.me/507${waNum}`} target="_blank" rel="noreferrer" className="btn btn-outline rounded-2xl" style={{ borderColor: BRAND_COLORS.WhatsApp }}>
              <Phone size={16} style={{ color: BRAND_COLORS.WhatsApp }} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="min-w-[260px] md:text-right">
          <p className="text-sm text-slate-500">Tel: {DATA.phone}</p>
          <p className="text-sm text-slate-500">{DATA.id}</p>
          <p className="text-sm text-slate-500">Email: {DATA.email}</p>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="mt-10">
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.projects.map((p, i) => (
          <div className="card p-4 group" key={i}>
            <div className="mb-2 font-semibold">{p.title}</div>
            <p className="text-sm text-slate-600 mb-3">{p.note}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t, j) => (
                <span key={j} className="badge border border-slate-200">{t}</span>
              ))}
            </div>
            <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm hover:underline">
              Ver proyecto <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="habilidades" className="mt-10">
      <SectionTitle>Habilidades</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((s, i) => (
          <span
            key={i}
            className="badge"
            style={BRAND_COLORS[s] ? { backgroundColor: BRAND_COLORS[s], color: 'white' } : {}}
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
      <SectionTitle>Experiencia Creativa</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {DATA.experience.map((job, i) => (
          <div className="card p-4" key={i}>
            <div className="font-semibold">{job.title}</div>
            <div className="text-sm text-slate-500">{job.company}</div>
            <div className="text-xs text-slate-500 mb-2">{job.period}</div>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 pb-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {DATA.name}. Hecho con ♥ en Panamá.
    </footer>
  )
}

export default function App() {
  return (
    <main className="container-narrow py-10">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
