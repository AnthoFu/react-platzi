import { useEffect, useState } from "react"

const CounterWithEffect = () => {
    const [count, setCount] = useState (0);

    useEffect(() =>{
        console.log(`[CounterWithEffect] El contador cambio a: ${count}`)
    }, [count])

        return (
        <div>
            <p>El contador esta en: {count} </p>
            <button onClick={() => setCount(count + 1)}>¡Sumar!</button>
            <button onClick={() => setCount(count - 1)} disabled={count <= 0}>¡Restar!</button>
        </div>
        
    )
}


export default CounterWithEffect