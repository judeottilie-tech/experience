import { motion } from 'framer-motion'
import { about, education } from '../data/content'
import Wave from './Wave'
import Star from './Star'
import Confetti from './Confetti'

export default function About() {
  return (
    <section id="about" className="relative bg-cream-deep">
      <Star
        variant="d"
        colors={["var(--color-sun)", "var(--color-lime)"]}
        className="pointer-events-none absolute top-10 -right-10 h-24 w-24 opacity-30 md:h-32 md:w-32"
      />
      <Confetti set={2} />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 font-pixel text-sm tracking-wide text-coral uppercase">
            about
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-soft md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <h3 className="mb-3 font-pixel text-sm tracking-wide text-teal-dark uppercase">
            education
          </h3>
          <div className="rounded-[1.75rem] bg-card p-6 shadow-[0_16px_36px_-12px_rgba(43,27,61,0.25)]">
            <ul className="flex flex-col gap-4">
              {education.map((e) => (
                <li key={e.program} className="border-l-2 border-line pl-4">
                  <p className="font-semibold text-ink">{e.program}</p>
                  <p className="text-sm text-ink-soft">
                    {e.school} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <Wave fill="var(--color-cream)" />
    </section>
  );
}
