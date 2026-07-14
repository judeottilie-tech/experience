import { motion } from 'framer-motion'
import { skills } from '../data/content'
import Wave from './Wave'
import Star from './Star'
import Heart from './Heart'
import Confetti from './Confetti'

const GROUP_ACCENT = {
  design: 'bg-coral/15 text-coral-dark',
  strengths: 'bg-purple/15 text-purple',
}

const GROUP_LABEL = {
  design: 'design',
  strengths: 'strengths',
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-cream-deep">
      <Star
        variant="a"
        colors={["var(--color-coral)", "var(--color-sun)"]}
        className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 opacity-25 md:h-32 md:w-32"
      />
      <Confetti set={1} />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-10 font-pixel text-sm tracking-wide text-coral uppercase">
          skills
        </h2>
        {/* 
        <h2 className="mb-12 font-display text-3xl font-semibold text-ink md:text-4xl">
          my toolbox
        </h2>
        */}

        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-3 font-display text-lg font-semibold text-ink">
              faves{" "}
            </h3>
            {/*
            <p className="mb-4 text-sm text-ink-soft">
              most of my experience + strongest assets
            </p>*/}
            <div className="flex flex-wrap gap-2.5">
              {skills.core.map((skill) => (
                <span
                  key={skill}
                  className="gloss inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-sm font-bold text-[#102a33]"
                >
                  <Heart color="#102a33" className="h-3.5 w-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <h3 className="mb-3 font-display text-lg font-semibold text-ink">
              learning
            </h3>
            {/* 
            <p className="mb-4 text-sm text-ink-soft">
              experienced and gaining strength
            </p>
            */}
            <div className="flex flex-wrap gap-2.5">
              {skills.growing.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border-2 border-line px-4 py-2 text-sm font-semibold text-ink-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {["design", "strengths"].map((group, gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.12 + gi * 0.06 }}
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-ink">
                {GROUP_LABEL[group]}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills[group].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${GROUP_ACCENT[group]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Wave fill="var(--color-cream)" />
    </section>
  );
}
