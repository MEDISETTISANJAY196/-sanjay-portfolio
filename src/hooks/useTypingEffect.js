import { useState, useEffect } from 'react'

export const useTypingEffect = (words, speed = 100, deleteSpeed = 60, pause = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pause)
      return () => clearTimeout(timeout)
    }

    const currentWord = words[currentWordIndex]

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        setIsPaused(true)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deleteSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, speed, deleteSpeed, pause])

  return currentText
}
