import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import Heart from './Heart'

const ACCENTS = {
  coral: { chip: 'bg-coral/10 text-coral-dark', glow: 'rgba(255,62,165,0.35)', color: 'var(--color-coral)' },
  teal: { chip: 'bg-teal/10 text-teal-dark', glow: 'rgba(53,201,240,0.35)', color: 'var(--color-teal)' },
  sun: { chip: 'bg-sun/20 text-[#8a6a00]', glow: 'rgba(255,217,61,0.4)', color: 'var(--color-sun)' },
  purple: { chip: 'bg-purple/10 text-purple', glow: 'rgba(140,82,255,0.35)', color: 'var(--color-purple)' },
}

const STATUS_STYLE = {
  'shippin soon': 'bg-sun/25 text-[#8a6a00]',
  'in progress': 'bg-teal/20 text-teal-dark',
  GitHub: 'bg-ink/5 text-ink-soft',
}

export default function ProjectCard({ project, index }) {
  const accent = ACCENTS[project.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
      className="flex flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-[0_18px_20px_-1px_var(--glow)]"
      style={{ '--glow': accent.glow }}
    >
      {project.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:min-h-96 md:p-7">
        <div className="mb-3 flex items-center justify-between gap-2">
          <Heart color={accent.color} className="h-4 w-4" />
          <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${STATUS_STYLE[project.status]}`}>
            {project.status}
          </span>
        </div>

        <h3 className="mb-2 font-display text-2xl font-semibold text-ink">{project.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-ink-soft md:text-base">
          {project.description}
        </p>

        <div className="mt-auto mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="gloss inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream"
            >
              live site <ArrowUpRight size={14} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream-deep px-4 py-2 text-sm font-bold text-ink"
          >
            <GithubIcon size={14} /> {project.githubLabel || 'client'}
          </a>
          {project.githubSecondary && (
            <a
              href={project.githubSecondary}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-cream-deep px-4 py-2 text-sm font-bold text-ink"
            >
              <GithubIcon size={14} /> API
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
