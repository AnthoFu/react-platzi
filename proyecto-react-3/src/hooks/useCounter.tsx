import { useState } from "react";


function useCounter (initialValue = 0){
    const [count, setCount] = useState (initialValue) // Aqui se le coloca la variable inicial, porque si le colocamos por defecto 0 aca dejaria de ser un custom hook

    const increment = () => setCount (PrevValue => PrevValue + 1) // Esto toma el valor previo y lo suma uno.

    const decrement = () => setCount (PrevValue => PrevValue - 1) // Esto toma el valor previo y lo resta uno.
    

    const reset = () => setCount (initialValue) // Esto resetea a 0

    return {
        count,
        increment,
        decrement,
        reset
    }
}


export default useCounter