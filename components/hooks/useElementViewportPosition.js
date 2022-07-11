import { useEffect, useRef, useState } from "react"

export function useElementViewportPosition(inputRef) {
  const ref = inputRef

  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    if (!ref || !ref.current) return

    const pageHeight = document.body.scrollHeight
    const start = ref.current.offsetTop
    const end = start + ref.current.offsetHeight

    setPosition([start / pageHeight, end / pageHeight])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { position }
}