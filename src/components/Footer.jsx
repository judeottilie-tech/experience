import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-cream px-6 py-8 text-center text-sm text-ink-soft">
      <p>
        designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
