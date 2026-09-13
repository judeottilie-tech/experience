import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, Lightbulb, Search, PenTool, Palette, Flag } from 'lucide-react'
import { caseStudies } from '../data/content'
import ProcessTimeline from './ProcessTimeline'
import ImageCarousel from './ImageCarousel'
import Heart from './Heart'

function buildSteps(study) {
  if (!study) return []
  const steps = []

  if (study.problem) {
    steps.push({
      id: 'problem',
      label: 'the problem',
      icon: Lightbulb,
      accent: 'coral',
      content: <p className="leading-relaxed text-ink-soft">{study.problem}</p>,
    })
  }

  if (study.research?.summary || study.research?.findings?.length > 0) {
    steps.push({
      id: 'research',
      label: 'research & discovery',
      icon: Search,
      accent: 'teal',
      content: (
        <div className="flex flex-col gap-4">
          {study.research?.summary && <p className="leading-relaxed text-ink-soft">{study.research.summary}</p>}
          {study.research?.findings?.length > 0 && (
            <ul className="flex flex-col gap-2">
              {study.research.findings.map((finding) => (
                <li key={finding} className="rounded-xl border-l-4 border-teal bg-card p-4 text-ink-soft">
                  {finding}
                </li>
              ))}
            </ul>
          )}
        </div>
      ),
    })
  }

  if (study.wireframeImages?.length > 0) {
    steps.push({
      id: 'wireframes',
      label: 'wireframes',
      icon: PenTool,
      accent: 'purple',
      content: <ImageCarousel images={study.wireframeImages} />,
    })
  }

  if (study.mockupImages?.length > 0) {
    steps.push({
      id: 'mockups',
      label: 'final mockups',
      icon: Palette,
      accent: 'sun',
      content: <ImageCarousel images={study.mockupImages} />,
    })
  }

  if (study.decisions?.length > 0 || study.outcome) {
    steps.push({
      id: 'outcome',
      label: 'decisions & outcome',
      icon: Flag,
      accent: 'lime',
      content: (
        <div className="flex flex-col gap-4">
          {study.decisions?.length > 0 && (
            <ul className="flex flex-col gap-2">
              {study.decisions.map((decision) => (
                <li key={decision} className="rounded-xl border-l-4 border-purple bg-card p-4 text-ink-soft">
                  {decision}
                </li>
              ))}
            </ul>
          )}
          {study.outcome && <p className="leading-relaxed text-ink-soft">{study.outcome}</p>}
          {study.currentStateImages?.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink-soft">
                <Heart color="var(--color-lime)" className="h-3.5 w-3.5" /> desktop
              </p>
              <ImageCarousel images={study.currentStateImages} />
            </div>
          )}
          {study.currentStateImagesMobile?.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink-soft">
                <Heart color="var(--color-lime)" className="h-3.5 w-3.5" /> mobile
              </p>
              <ImageCarousel images={study.currentStateImagesMobile} />
            </div>
          )}
        </div>
      ),
    })
  }

  return steps
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)
  const steps = useMemo(() => buildSteps(study), [study])
  const [activeId, setActiveId] = useState(steps[0]?.id)

  useEffect(() => {
    setActiveId(steps[0]?.id)
    if (steps.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('section-', ''))
          }
        })
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 }
    )

    steps.forEach((step) => {
      const el = document.getElementById(`section-${step.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [steps])

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
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 md:py-28">
        <header className="flex flex-col gap-4">
          <p className="font-pixel text-sm uppercase tracking-wide text-coral-dark">{study.sector}</p>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{study.title}</h1>
          <p className="max-w-xl text-lg text-ink-soft">{study.oneLiner}</p>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="gloss game-btn inline-flex w-fit items-center gap-1 rounded-full bg-coral px-6 py-3 text-base font-bold text-[#2b1b3d]"
              style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
            >
              view live site <ArrowUpRight size={18} />
            </a>
          )}
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

        {steps.length > 0 && (
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-12">
            <ProcessTimeline steps={steps} activeId={activeId} />

            <div className="flex flex-col gap-16">
              {steps.map((step) => (
                <section key={step.id} id={`section-${step.id}`} className="scroll-mt-24">
                  <h2 className="mb-4 font-display text-2xl font-semibold text-ink">{step.label}</h2>
                  {step.content}
                </section>
              ))}
            </div>
          </div>
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
