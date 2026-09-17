import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const items = images.map((img) => (typeof img === 'string' ? { src: img, caption: null } : img))
  const current = items[index]
  const currentAlt = current.caption || `case study image ${index + 1} of ${items.length}`

  if (items.length === 0) return null

  function go(delta) {
    setIndex((i) => (i + delta + items.length) % items.length)
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border-2 border-line bg-card sm:h-96 md:h-[480px]"
        onKeyDown={handleKeyDown}
      >
        <img src={current.src} alt={currentAlt} className="max-h-full max-w-full object-contain" />
        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="previous image"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.3)] transition hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="next image"
              onClick={() => go(1)}
              className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card text-ink shadow-[0_4px_14px_-4px_rgba(43,27,61,0.3)] transition hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {current.caption && <p className="text-center text-sm text-ink-soft">{current.caption}</p>}

      {items.length > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto pb-1">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`go to image ${i + 1}${item.caption ? `: ${item.caption}` : ''}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === index ? 'border-coral-dark' : 'border-line opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
