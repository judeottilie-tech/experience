import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { caseStudies } from '../data/content'
import Wave from './Wave'

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
        <h2 className="mb-3 font-pixel text-sm tracking-wide text-coral-dark uppercase">case studies</h2>
        <h2 className="mb-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          ux work
        </h2>
        <p className="mb-12 max-w-xl text-ink-soft">
          wireframe-to-mockup UI/UX case studies: the problem, the research, and the design decisions behind them
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/case-study/${study.slug}`}
                className="group block overflow-hidden rounded-3xl bg-card shadow-[0_14px_32px_-14px_rgba(43,27,61,0.25)]"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={`${study.title} preview`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-teal-dark">{study.sector}</p>
                  <p className="mb-2 font-display text-xl font-semibold text-ink">{study.title}</p>
                  <p className="text-sm text-ink-soft">{study.oneLiner}</p>
                </div>
              </Link>
            </motion.div>
          ))}

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
