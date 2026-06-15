import { useEffect, useRef } from "react"

const useCursorShake = (strength = 10) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()

      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      element.style.transform = `translate(${-x * strength}px, ${-y * strength}px)`
    }

    const reset = () => {
      element.style.transform = `translate(0px,0px)`
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", reset)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", reset)
    }
  }, [strength])

  return ref
}

export default useCursorShake