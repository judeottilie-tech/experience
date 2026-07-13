import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { designWork } from '../data/content'
import Wave from './Wave'

const SLOT_ACCENTS = [
  'border-coral/40 text-coral',
  'border-teal/40 text-teal-dark',
  'border-sun/50 text-[#8a6a00]',
  'border-purple/40 text-purple',
]
const MIN_SLOTS = 6

export default function Design() {
  const emptySlots = Math.max(0, MIN_SLOTS - designWork.length)

  return (
    <section id="design" className="relative bg-cream-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-pixel text-sm tracking-wide text-coral uppercase">design</p>
        <h2 className="mb-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          visual work
        </h2>
        <p className="mb-12 max-w-xl text-ink-soft">
          graphic design, signage, and UI/UX work
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {designWork.map((piece, i) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-[0_14px_32px_-14px_rgba(43,27,61,0.25)]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-lg font-semibold text-ink">{piece.title}</p>
                {piece.role && <p className="text-sm text-ink-soft">{piece.role}</p>}
              </div>
            </motion.div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className={`flex aspect-square flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed ${SLOT_ACCENTS[i % SLOT_ACCENTS.length]}`}
            >
              <Plus size={22} />
              <span className="font-pixel text-xs uppercase">Empty slot</span>
            </div>
          ))}
        </div>
      </div>
      <Wave fill="var(--color-cream)" />
    </section>
  )
}
