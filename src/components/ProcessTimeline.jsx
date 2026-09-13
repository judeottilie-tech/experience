const ACCENT_CLASSES = {
  coral: 'bg-coral text-[#2b1b3d]',
  teal: 'bg-teal text-[#102a33]',
  purple: 'bg-purple text-[#2b1b3d]',
  sun: 'bg-sun text-[#2b1b3d]',
  lime: 'bg-lime text-[#1a2b0a]',
}

export default function ProcessTimeline({ steps, activeId }) {
  return (
    <nav
      aria-label="case study sections"
      className="relative flex flex-row gap-2 overflow-x-auto pb-2 md:sticky md:top-24 md:flex-col md:gap-1 md:self-start md:overflow-visible md:pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[28px] bottom-[28px] left-[30px] z-0 hidden w-0.5 -translate-x-1/2 rounded-full bg-line md:block"
      />
      {steps.map((step) => {
        const Icon = step.icon
        const isActive = step.id === activeId
        return (
          <a
            key={step.id}
            href={`#section-${step.id}`}
            aria-current={isActive || undefined}
            className={`group relative z-10 flex shrink-0 items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition md:whitespace-normal ${
              isActive ? 'text-ink' : 'text-ink-soft hover:bg-card hover:text-ink'
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-[0_4px_14px_-4px_rgba(43,27,61,0.3)] transition group-hover:scale-105 ${
                isActive ? `${ACCENT_CLASSES[step.accent]} scale-110` : 'bg-card text-ink-soft'
              }`}
            >
              <Icon size={16} />
            </span>
            {step.label}
          </a>
        )
      })}
    </nav>
  )
}
