import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Star from './Star'
import Sparkle from './Sparkle'
import Heart from './Heart'
import Confetti from './Confetti'
import Wave from './Wave'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative bg-cream">
      <Star
        variant="a"
        colors={['var(--color-sun)', 'var(--color-coral)']}
        className="pointer-events-none absolute -top-28 -right-36 h-[420px] w-[420px] opacity-80 blur-[1px] md:h-[540px] md:w-[540px]"
      />
      <Star
        variant="d"
        colors={['var(--color-teal)', 'var(--color-purple)']}
        className="pointer-events-none absolute -bottom-36 -left-28 h-[360px] w-[360px] opacity-60"
      />
      <Sparkle className="pointer-events-none absolute top-24 right-[18%] h-6 w-6 hidden md:block" color="var(--color-purple)" />
      <Sparkle className="pointer-events-none absolute bottom-20 left-[12%] h-4 w-4 hidden md:block" color="var(--color-teal)" />
      <Confetti set={1} />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.25)]"
        >
          <Heart color="var(--color-teal)" className="h-4 w-4" />
          open to junior and entry-level roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-display text-5xl leading-[1.08] font-semibold tracking-tight text-ink md:text-7xl"
        >
          building software with
          <span className="text-coral"> design in mind</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-lg text-ink-soft md:text-xl"
        >
          {profile.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="gloss game-btn inline-flex items-center gap-1 rounded-full bg-coral px-6 py-3 text-base font-bold text-white"
            style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
          >
            see my work <ArrowUpRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-card px-6 py-3 text-base font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)] transition hover:-translate-y-0.5"
          >
            contact
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-card p-2.5 text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)] transition hover:-translate-y-0.5 hover:text-purple"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-card p-2.5 text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)] transition hover:-translate-y-0.5 hover:text-teal-dark"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>
      <Wave fill="var(--color-cream-deep)" />
    </section>
  )
}
