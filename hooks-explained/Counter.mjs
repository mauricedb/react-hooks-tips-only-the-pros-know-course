import { useEffect, useState } from "./fakeReact.mjs"

export function Counter() {
  const [simpleCounter, setSimpleCounter] = useState(1)
  const [squareCounter, setSquareCounter] = useState(2)

  useEffect(() => {
    if (simpleCounter < 6) {
      setSimpleCounter(simpleCounter + 1)
    }
  })

  useEffect(() => {
    switch (simpleCounter) {
      case 2:
        setSquareCounter(Math.pow(squareCounter, 2))
        break
      case 4:
        setSquareCounter(Math.pow(squareCounter, 2))
        break
      default:
        break
    }
  })

  console.log("The Counter component state:", {
    simpleCounter,
    squareCounter,
  })

  return []
}
