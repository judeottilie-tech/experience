import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import Star from './Star'
import Confetti from './Confetti'

export default function Projects() {
  return (
    <section id="projects" className="relative bg-cream">
      <Star
        variant="d"
        colors={["var(--color-teal)", "var(--color-purple)"]}
        className="pointer-events-none absolute -top-12 left-[8%] h-20 w-20 opacity-20 md:h-28 md:w-28"
      />
      <Confetti set={1} />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-3 font-pixel text-sm tracking-wide text-coral uppercase">
          projects
        </p>

        {/* <h2 className="mb-3 font-display text-2xl font-semibold text-ink md:text-4xl">
          my builds
        </h2>
        <p className="mb-12 max-w-xl text-ink-soft">
          mix of solo and team projects. full-stack apps built + designed end to end.
        </p>*/}

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
