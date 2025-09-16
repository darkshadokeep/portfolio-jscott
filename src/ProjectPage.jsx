import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from './data/projects.json'

function ImageGallery({ images = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {images.map((src, i) => (
        <figure key={i} className="card overflow-hidden">
          <img src={src} alt={`Imagen ${i+1}`} className="w-full h-48 object-cover" />
        </figure>
      ))}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main className="container-narrow py-10">
        <h1 className="text-2xl font-semibold mb-2">Proyecto no encontrado</h1>
        <Link to="/" className="text-blue-600 hover:underline">← Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="container-narrow py-10">
      <Link to="/" className="text-blue-600 hover:underline">← Volver</Link>
      <h1 className="text-3xl font-bold mt-2">{project.title}</h1>
      <p className="text-slate-600 mt-1">{project.note}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags?.map((t, i) => (
          <span key={i} className="badge border border-slate-200">{t}</span>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Objetivo</h2>
        <p className="text-slate-700 mt-1">Describe brevemente el objetivo del proyecto.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Solución</h2>
        <p className="text-slate-700 mt-1">Cuenta tu enfoque de diseño, proceso y herramientas.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Resultado</h2>
        <p className="text-slate-700 mt-1">Incluye métricas, impacto o feedback.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Galería</h2>
        <ImageGallery images={project.images} />
      </section>

      {project.href && project.href !== '#' && (
        <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm mt-6 text-blue-600 hover:underline">
          Ver enlace del proyecto externo
        </a>
      )}
    </main>
  )
}
