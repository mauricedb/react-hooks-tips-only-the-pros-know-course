import React, { ReactElement, useState } from "react"

export function Counter(): ReactElement {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>Count: {counter}</div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
