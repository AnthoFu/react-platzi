import { createContext, useContext, useState, type ReactNode } from "react";


type ThemeContextType = {
    theme: string,
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider ( { children }: {children: React.ReactNode} ):ReactNode {
    const [theme, setTheme] = useState <'dark' | 'light'> ("light");

    const toggleTheme = () => {
        setTheme ( ( TemaAnterior => ( TemaAnterior === "light" ? "dark" : "light" ) ) )
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


function ThemeButton () {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeButton debe ser usado con ThemeProvider");
    }
    const { theme, toggleTheme } = context;

    return (
    <button
        onClick={toggleTheme}
        style={{
            backgroundColor: theme === 'light' ? '#FFF' : '#333',
            color: theme === 'light' ? '#000' : '#FFF',
            }}>
        Cambiar tema
    </button>

    )
}

function ContextApi () {
    return (
        <>
        <ThemeProvider>
            <ThemeButton>

            </ThemeButton>
        </ThemeProvider>
        </>
    )
}



export default ContextApi