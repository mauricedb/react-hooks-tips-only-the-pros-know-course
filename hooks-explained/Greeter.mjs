import { useEffect, useState } from "./fakeReact.mjs"

function Greeter({ initialName }) {
  const [name, setName] = useState(initialName)

  useEffect(() => {
    if (name === "Zaphod Beeblebrox") {
      setName("Ford Prefect")
    }
  })

  console.log(`The Greeter component for (${initialName}) with state:`, {
    name,
  })

  return []
}

export function ArthurDent() {
  return Greeter({ initialName: "Arthur Dent" })
}

export function ZaphodBeeblebrox() {
  return Greeter({ initialName: "Zaphod Beeblebrox" })
}
