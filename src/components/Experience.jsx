import { motion } from 'framer-motion'
import { experience } from '../data/content'
import Wave from './Wave'
import Heart from './Heart'
import Confetti from './Confetti'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-cream">
      <Confetti set={2} />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-pixel text-sm tracking-wide text-coral uppercase">Experience</p>
        {/* 
        <h2 className="mb-12 font-display text-3xl font-semibold text-ink md:text-4xl">
         
        </h2> */}

        <div className="flex flex-col gap-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl bg-card p-6 shadow-[0_14px_32px_-14px_rgba(43,27,61,0.25)] md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="font-semibold text-ink-soft">{job.org}</p>
                </div>
                <div className="text-right text-sm text-ink-soft">
                  <p className="font-semibold">{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-soft md:text-base">
                {job.points.map((point) => (
                  <li key={point.slice(0, 24)} className="flex items-start gap-2">
                    <Heart color="var(--color-coral)" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <Wave fill="var(--color-cream-deep)" />
    </section>
  )
}
