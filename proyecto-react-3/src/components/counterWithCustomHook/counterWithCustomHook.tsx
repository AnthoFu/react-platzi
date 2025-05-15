import useCounter from "../../hooks/useCounter" // Este es el custom hook que hicimos

const CounterWithCustomHook = () => {
    const {
        count,
        increment,
        decrement,
        reset,
        } = useCounter (10) // el 10 sera el valor inicial

    
    return (

        <div>
            <h2> Contador con Hooks Personalizados (O custom hooks) 🦊🎣</h2>
            <p>
                Contador: {count}
            </p>
            <button onClick={increment}>
                ¡Incrementar!
            </button>
            <button onClick={decrement}>
                ¡Decrementar!
            </button>
            <button onClick={reset}>
                ¡Reset!
            </button>
        </div>
        
    )

}

export default CounterWithCustomHook