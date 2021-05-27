import React, {
  createContext,
  CSSProperties,
  ReactElement,
  ReactNode,
  useState,
} from "react"

export interface ThemeContext {
  style?: CSSProperties
  setStyle: (style?: CSSProperties) => void
}

export const themeContext = createContext<ThemeContext>({
  setStyle: () => void null,
})

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props): ReactElement {
  const [style, setStyle] = useState<CSSProperties>()

  return (
    <themeContext.Provider value={{ style, setStyle }}>
      {children}
    </themeContext.Provider>
  )
}
