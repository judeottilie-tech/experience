import { motion } from 'framer-motion'
import { howIWork } from '../data/content'
import Heart from './Heart'

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-3 font-pixel text-sm tracking-wide text-coral-dark uppercase">how i work</h2>
        <h2 className="mb-12 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
          design principles i build with
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {howIWork.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-3 rounded-[1.75rem] bg-card p-6 shadow-[0_14px_32px_-14px_rgba(43,27,61,0.25)] md:p-7"
            >
              <Heart color="var(--color-teal)" className="h-4 w-4" />
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="leading-relaxed text-ink-soft">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
