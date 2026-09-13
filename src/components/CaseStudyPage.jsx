import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/content'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return (
      <section className="relative bg-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-28">
          <h1 className="font-display text-3xl font-semibold text-ink">case study not found</h1>
          <p className="text-ink-soft">
            this one isn't published yet — check back soon, or head back to see what's live.
          </p>
          <Link
            to="/#case-studies"
            className="gloss game-btn inline-flex items-center gap-1 rounded-full bg-coral px-6 py-3 text-base font-bold text-[#2b1b3d]"
            style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
          >
            back to case studies <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="relative bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col gap-14 px-6 py-20 md:py-28">
        <header className="flex flex-col gap-4">
          <p className="font-pixel text-sm uppercase tracking-wide text-coral-dark">{study.sector}</p>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{study.title}</h1>
          <p className="max-w-xl text-lg text-ink-soft">{study.oneLiner}</p>
          <dl className="flex flex-wrap gap-6 rounded-2xl bg-card p-5 text-sm shadow-[0_10px_24px_-10px_rgba(43,27,61,0.2)]">
            <div>
              <dt className="font-bold text-ink-soft">role</dt>
              <dd className="text-ink">{study.role}</dd>
            </div>
            <div>
              <dt className="font-bold text-ink-soft">duration</dt>
              <dd className="text-ink">{study.duration}</dd>
            </div>
            <div>
              <dt className="font-bold text-ink-soft">tools</dt>
              <dd className="text-ink">{study.tools?.join(', ')}</dd>
            </div>
          </dl>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold text-ink">the problem</h2>
          <p className="leading-relaxed text-ink-soft">{study.problem}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold text-ink">research &amp; discovery</h2>
          <p className="leading-relaxed text-ink-soft">{study.research?.summary}</p>
          {study.research?.findings?.length > 0 && (
            <ul className="flex flex-col gap-2">
              {study.research.findings.map((finding) => (
                <li key={finding} className="rounded-xl border-l-4 border-teal bg-card p-4 text-ink-soft">
                  {finding}
                </li>
              ))}
            </ul>
          )}
        </section>

        {study.wireframeImages?.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink">wireframes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {study.wireframeImages.map((src) => (
                <img key={src} src={src} alt={`${study.title} wireframe`} className="rounded-2xl border-2 border-line" />
              ))}
            </div>
          </section>
        )}

        {study.mockupImages?.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink">final mockups</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {study.mockupImages.map((src) => (
                <img key={src} src={src} alt={`${study.title} mockup`} className="rounded-2xl border-2 border-line" />
              ))}
            </div>
          </section>
        )}

        {study.decisions?.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink">key decisions</h2>
            <ul className="flex flex-col gap-2">
              {study.decisions.map((decision) => (
                <li key={decision} className="rounded-xl border-l-4 border-purple bg-card p-4 text-ink-soft">
                  {decision}
                </li>
              ))}
            </ul>
          </section>
        )}

        {study.outcome && (
          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink">outcome</h2>
            <p className="leading-relaxed text-ink-soft">{study.outcome}</p>
          </section>
        )}

        <footer className="flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-1 rounded-full bg-card px-6 py-3 text-base font-bold text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.2)] transition hover:-translate-y-0.5"
          >
            more case studies
          </Link>
          <Link
            to="/#contact"
            className="gloss game-btn inline-flex items-center gap-1 rounded-full bg-coral px-6 py-3 text-base font-bold text-[#2b1b3d]"
            style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
          >
            get in touch <ArrowUpRight size={18} />
          </Link>
        </footer>
      </div>
    </article>
  )
}
