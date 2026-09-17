import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/content'
import Wave from './Wave'
import Heart from './Heart'

const ACCENTS = {
  coral: { chip: 'bg-coral/10 text-coral-dark', glow: 'rgba(255,62,165,0.35)', color: 'var(--color-coral)' },
  teal: { chip: 'bg-teal/10 text-teal-dark', glow: 'rgba(53,201,240,0.35)', color: 'var(--color-teal)' },
  sun: { chip: 'bg-sun/20 text-[#6b5200]', glow: 'rgba(255,217,61,0.4)', color: 'var(--color-sun)' },
  purple: { chip: 'bg-purple/10 text-purple', glow: 'rgba(140,82,255,0.35)', color: 'var(--color-purple)' },
}
const ACCENT_CYCLE = ['coral', 'teal', 'sun', 'purple']

const SLOT_ACCENTS = [
  'border-coral/40 text-coral-dark',
  'border-teal/40 text-teal-dark',
  'border-purple/40 text-purple',
]
const MIN_SLOTS = 2

export default function CaseStudies() {
  const emptySlots = Math.max(0, MIN_SLOTS - caseStudies.length)

  return (
    <section id="case-studies" className="relative bg-cream-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-pixel text-sm tracking-wide text-coral-dark uppercase">case studies</p>
        <h2 className="mb-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          ux work
        </h2>
        <p className="mb-12 max-w-xl text-ink-soft">
          wireframe-to-mockup UI/UX case studies: the problem, the research, and the design decisions behind them
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => {
            const accent = ACCENTS[study.accent] || ACCENTS[ACCENT_CYCLE[i % ACCENT_CYCLE.length]]
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                className="rounded-[1.75rem] shadow-[0_18px_20px_-1px_var(--glow)]"
                style={{ '--glow': accent.glow }}
              >
                <Link
                  to={`/case-study/${study.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[1.75rem] md:min-h-96"
                  style={{ backgroundColor: study.cardBg || 'var(--color-card)' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.thumbnail}
                      alt={`${study.title} preview`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Heart color={accent.color} className="h-4 w-4" />
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${accent.chip}`}>
                        {study.sector}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-2xl font-semibold text-ink">{study.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-ink-soft md:text-base">{study.oneLiner}</p>

                    {study.tools?.length > 0 && (
                      <div className="mt-auto mb-5 flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <span key={tool} className={`rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    <span
                      className="gloss game-btn inline-flex w-fit items-center gap-1 rounded-full bg-coral px-4 py-2 text-sm font-bold text-[#1a0f26]"
                      style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
                    >
                      read case study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed ${SLOT_ACCENTS[i % SLOT_ACCENTS.length]}`}
            >
              <Plus size={22} />
              <span className="font-pixel text-xs uppercase">case study coming soon</span>
            </div>
          ))}
        </div>
      </div>
      <Wave fill="var(--color-cream)" />
    </section>
  )
}
