"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = "1"
        sectionRef.current.style.transform = "none"
      }
      return
    }

    const section = sectionRef.current
    if (!section) return

    // Set initial styles
    let translateValue = ""
    switch (direction) {
      case "up":
        translateValue = `translateY(${distance}px)`
        break
      case "down":
        translateValue = `translateY(-${distance}px)`
        break
      case "left":
        translateValue = `translateX(${distance}px)`
        break
      case "right":
        translateValue = `translateX(-${distance}px)`
        break
    }

    section.style.opacity = "0"
    section.style.transform = translateValue
    section.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            section.style.opacity = "1"
            section.style.transform = "none"
            hasAnimated.current = true

            // Unobserve after animation
            observer.unobserve(section)
          }
        })
      },
      { threshold },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [delay, direction, distance, threshold])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

interface StaggeredListProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  baseDelay?: number
  delayIncrement?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function StaggeredList({
  children,
  className,
  itemClassName,
  baseDelay = 0.1,
  delayIncrement = 0.1,
  direction = "up",
  distance = 20,
}: StaggeredListProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          className={itemClassName}
          delay={baseDelay + index * delayIncrement}
          direction={direction}
          distance={distance}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeIn({ children, className, delay = 0, duration = 0.6 }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      if (elementRef.current) {
        elementRef.current.style.opacity = "1"
      }
      return
    }

    const element = elementRef.current
    if (!element) return

    // Set initial styles
    element.style.opacity = "0"
    element.style.transition = `opacity ${duration}s ease-out ${delay}s`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            element.style.opacity = "1"
            hasAnimated.current = true

            // Unobserve after animation
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

