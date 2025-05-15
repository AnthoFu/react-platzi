import { createContext, useContext, useState } from "react"
import Counter from "./components/counter/counter"
import './App.css'
import CounterWithCustomHook from "./components/counterWithCustomHook/counterWithCustomHook"
import CounterWithMemo from "./components/counterWithReactMemo/counterWithReactMemo"

// Tipamos valores por defecto para evitar errores con TypeScript
type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}
// Como toggleTheme no recibe ningun argumento, se le asigna el tipo 'void' para indicar que no devuelve nada

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})


// Tipamos valores por defecto del ThemeProvider como 'Cualquier nodo valido en react', que es el 'ReactNode'
type ThemeProviderProps = {
  children: React.ReactNode
}
// Este tipo asegura que el componente reciba correctamente elementos hijos para prevenir errores y mejorar la autocompletación en el VSCode

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('dark') 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return(
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#FFF',
        color: theme === 'dark' ? '#FFF' : '#000' // Coma agregada
      }}>
      Cambiar tema
    </button>
  )
}

function App() { 
  return(
    <div>
      <ThemeProvider>
        <hr />
        <Counter/>
        <hr />
        <ThemeButton/>
      </ThemeProvider>
      <hr />
      <CounterWithCustomHook/>
      <hr />
      <CounterWithMemo/>
      <hr />
    </div>
  )
}

export default App 