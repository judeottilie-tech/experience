import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import Sparkle from './Sparkle'

const PET_IMAGE = '/pet.gif'

const STORAGE_KEY = 'pixelPetFullness'
const SEEN_KEY = 'pixelPetLastSeen'
const DECAY_PER_MINUTE = 0.4
const MIN_FULLNESS = 15
const FEED_AMOUNT = 22

const FED_LINES = ['yummers!!!', 'thankya!!', 'yummy', 'my favorite', ':3', 'heheee']

const MOOD = {
  happy: { threshold: 60, ring: 'var(--color-teal)', bob: 6, filter: 'none' },
  neutral: { threshold: 30, ring: 'var(--color-sun)', bob: 4, filter: 'none' },
  hungry: { threshold: 0, ring: 'var(--color-coral)', bob: 2, filter: 'grayscale(50%) opacity(0.85)' },
}

function getMood(fullness) {
  if (fullness >= MOOD.happy.threshold) return MOOD.happy
  if (fullness >= MOOD.neutral.threshold) return MOOD.neutral
  return MOOD.hungry
}

function loadFullness() {
  if (typeof window === 'undefined') return 80
  const stored = Number(localStorage.getItem(STORAGE_KEY))
  const lastSeen = Number(localStorage.getItem(SEEN_KEY))
  if (!stored || !lastSeen) return 80
  const minutesAway = (Date.now() - lastSeen) / 60000
  return Math.max(MIN_FULLNESS, Math.min(100, stored - minutesAway * DECAY_PER_MINUTE))
}

function saveFullness(value) {
  localStorage.setItem(STORAGE_KEY, String(value))
  localStorage.setItem(SEEN_KEY, String(Date.now()))
}

/*
function PixelSprite() {
  const cell = 6
  return (
    <svg
      viewBox={`0 0 ${SPRITE[0].length * cell} ${SPRITE.length * cell}`}
      className="h-full w-full"
      shapeRendering="crispEdges"
    >
      {SPRITE.map((row, y) =>
        row.split('').map((c, x) => {
          if (c === '.') return null
          return <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={SPRITE_COLORS[c]} />
        }),
      )}
    </svg>
  )
}
  */

const RING_R = 34
const RING_CIRC = 2 * Math.PI * RING_R

export default function PixelPet() {
  const [fullness, setFullness] = useState(loadFullness)
  const [line, setLine] = useState(null)
  const [hearts, setHearts] = useState([])
  const controls = useAnimationControls()
  const heartId = useRef(0)

  const mood = getMood(fullness)

  //decay
  useEffect(() => {
    const id = setInterval(() => {
      setFullness((f) => {
        const next = Math.max(MIN_FULLNESS, f - DECAY_PER_MINUTE)
        saveFullness(next)
        return next
      })
    }, 60000)
    return () => clearInterval(id)
  }, [])

  // squish
  useEffect(() => {
    let timeout
    const scheduleSquish = () => {
      timeout = setTimeout(() => {
        controls.start({
          scaleY: [1, 0.8, 1.08, 1],
          scaleX: [1, 1.1, 0.95, 1],
          transition: { duration: 0.5 },
        })
        scheduleSquish()
      }, 4000 + Math.random() * 5000)
    }
    scheduleSquish()
    return () => clearTimeout(timeout)
  }, [controls])

  function handleFeed() {
    const next = Math.min(100, fullness + FEED_AMOUNT)
    setFullness(next)
    saveFullness(next)

    setLine(FED_LINES[Math.floor(Math.random() * FED_LINES.length)])
    setTimeout(() => setLine(null), 2000)

    controls.start({
      scaleY: [1, 0.7, 1.15, 1],
      scaleX: [1, 1.2, 0.9, 1],
      transition: { duration: 0.55 },
    })

    const id = (heartId.current += 1)
    const burst = Array.from({ length: 5 }).map((_, i) => ({
      id: `${id}-${i}`,
      dx: (Math.random() - 0.5) * 60,
      delay: i * 0.04,
      color: [`var(--color-coral)`, `var(--color-sun)`, `var(--color-teal)`, `var(--color-purple)`][i % 4],
    }))
    setHearts((prev) => [...prev, ...burst])
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !burst.find((b) => b.id === h.id)))
    }, 700)
  }

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center">
      <AnimatePresence>
        {line && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-2 rounded-2xl bg-card px-3 py-1.5 font-pixel text-xs text-ink shadow-[0_6px_18px_-6px_rgba(43,27,61,0.35)]"
          >
            {line}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, -mood.bob, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.span
              key={h.id}
              initial={{ opacity: 1, y: 0, x: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -46, x: h.dx, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, delay: h.delay, ease: 'easeOut' }}
              className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2"
            >
              <Sparkle color={h.color} className="h-3 w-3" />
            </motion.span>
          ))}
        </AnimatePresence>

        <svg
          viewBox="0 0 76 76"
          className="pointer-events-none absolute -top-[6px] -left-[6px] h-[76px] w-[76px] -rotate-90"
          aria-hidden="true"
        >
          <circle cx="38" cy="38" r={RING_R} fill="none" stroke="var(--color-line)" strokeWidth="4" />
          <circle
            cx="38"
            cy="38"
            r={RING_R}
            fill="none"
            stroke={mood.ring}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={RING_CIRC}
            strokeDashoffset={RING_CIRC * (1 - fullness / 100)}
            style={{ transition: 'stroke-dashoffset 0.4s ease, stroke 0.4s ease' }}
          />
        </svg>

        <motion.button
          type="button"
          onClick={handleFeed}
          aria-label="Feed the pixel pet"
          animate={controls}
          whileTap={{ scale: 0.85 }}
          style={{ filter: mood.filter }}
          className="h-16 w-16 overflow-hidden rounded-full bg-white p-2 shadow-[0_10px_24px_-8px_rgba(43,27,61,0.35)]"
        >
          {PET_IMAGE ? (
            <img
              src={PET_IMAGE}
              alt=""
              className="h-full w-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          ) : (
            <PixelSprite />
          )}
        </motion.button>
      </motion.div>
    </div>
  )
}
