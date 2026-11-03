'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import styles from './AnimatedLogo.module.css'

const AVE = ['A', 'V', 'E']
const ENTRY = ['E', 'N', 'T', 'R', 'Y']

export default function AnimatedLogo() {
  const container = useRef<HTMLDivElement | null>(null)
  const dRef = useRef<HTMLSpanElement | null>(null)
  const aveRefs = useRef<(HTMLSpanElement | null)[]>([])
  const spaceRef = useRef<HTMLSpanElement | null>(null)
  const gRef = useRef<HTMLSpanElement | null>(null)
  const entryRefs = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const aveEls = aveRefs.current.filter(Boolean) as HTMLSpanElement[]
      const entryEls = entryRefs.current.filter(Boolean) as HTMLSpanElement[]
      const spaceEl = spaceRef.current
      const firstGroup = spaceEl ? [...aveEls, spaceEl] : aveEls

      // Collapse first — note we do NOT pre-measure widths with
      // getBoundingClientRect(). Animating to width: 'auto' lets GSAP
      // re-measure each element's natural size at tween-start time,
      // every time, so there's no stale/zero width left over from a
      // prior run (e.g. React Strict Mode's mount -> cleanup -> mount).
      gsap.set([...firstGroup, ...entryEls], {
        width: 0,
        opacity: 0,
        overflow: 'hidden',
      })

      const allLetters = [...firstGroup, ...entryEls]
      const tl = gsap.timeline({ delay: 0.4 })

      // Stage 1: widths open first (opacity stays at 0) — this is the
      // pure "slide", G moves into its final position before anything
      // becomes visible.
      tl.to(firstGroup, {
        width: 'auto',
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
      }).to(
        entryEls,
        {
          width: 'auto',
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
        },
        '-=0.15'
      )

      // Stage 2: once the layout has settled, slow fade-in of every
      // letter together (not tied to width timing anymore).
      tl.to(
        allLetters,
        {
          opacity: 1,
          duration: 1.1,
          stagger: 0.03,
          ease: 'power2.out',
        },
        '-=0.3'
      )

      // Label marking the true end of the fade-in (last staggered letter
      // finishes), so the flash can be timed relative to this fixed point
      // instead of relative to the start of the (staggered) fade tween.
      tl.addLabel('fadeDone')

      // Stage 3: color flash sweep across the full name, left to right,
      // once everything has faded in. Reads the accent/text colors from
      // CSS variables at runtime so it stays in sync with your tokens.
      const styles = getComputedStyle(container.current as HTMLElement)
      const accentColor = styles.getPropertyValue('--color-accent').trim()
      const textColor = styles.getPropertyValue('--color-text').trim()

      const fullNameInOrder = [
        dRef.current,
        ...aveEls,
        gRef.current,
        ...entryEls,
      ].filter(Boolean) as HTMLSpanElement[]

      if (accentColor) {
        tl.to(
          fullNameInOrder,
          {
            color: accentColor,
            duration: 0.25,
            stagger: 0.03,
            ease: 'power1.inOut',
          },
          'fadeDone+=0.1'
        ).to(
          fullNameInOrder,
          {
            color: textColor || '',
            duration: 0.4,
            stagger: 0.03,
            ease: 'power1.inOut',
          },
          '-=0.1'
        )
      }
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={container} className={styles.logo}>
      <span className="sr-only">Dave Gentry</span>

      <span ref={dRef} className={styles.letter} aria-hidden="true">D</span>

      {AVE.map((char, i) => (
        <span
          key={`ave-${i}`}
          ref={(el) => {
            aveRefs.current[i] = el
          }}
          className={styles.letter}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}

      <span ref={spaceRef} className={styles.space} aria-hidden="true">
        &nbsp;
      </span>

      <span ref={gRef} className={styles.letter} aria-hidden="true">G</span>

      {ENTRY.map((char, i) => (
        <span
          key={`entry-${i}`}
          ref={(el) => {
            entryRefs.current[i] = el
          }}
          className={styles.letter}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </div>
  )
}
