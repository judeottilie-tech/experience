import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import Star from './Star'
import Confetti from './Confetti'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream">
      <Star
        variant="d"
        colors={['var(--color-purple)', 'var(--color-coral)']}
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 opacity-30"
      />
      <Confetti set={2} />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-display text-4xl font-semibold text-ink md:text-5xl"
        >
          build with me!
        </motion.h2>
        <p className="mb-10 text-lg text-ink-soft">
          i'm looking for a junior or entry-level front-end / full-stack role in nashville or remote!
          say hi :)
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="gloss game-btn inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-base font-bold text-white"
            style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
          >
            <Mail size={18} /> email me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)]"
          >
            <GithubIcon size={16} /> github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)]"
          >
            <LinkedinIcon size={16} /> linkedin
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)]"
          >
            resume <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
