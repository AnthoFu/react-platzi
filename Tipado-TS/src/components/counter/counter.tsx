import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState <number> (0);

    const incremetar = () => setCount(valorPrevio => valorPrevio + 1)


    return (
        <button
        onClick={incremetar}>
            ¡Incrementar! 🆙 {count}
        </button>
    )
}

export default Counter