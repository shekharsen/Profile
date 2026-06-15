import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {

  const [displayText, setDisplayText] = useState<string>("")
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {

    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {

      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1))
        setIndex(index + 1)

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1200)
        }

      } else {
        setDisplayText(text.substring(0, index - 1))
        setIndex(index - 1)

        if (index - 1 === 0) {
          setIsDeleting(false)
        }
      }

    }, typingSpeed)

    return () => clearTimeout(timeout)

  }, [index, isDeleting, text])

  return (
    <h1 className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  )
}

export default Typewriter