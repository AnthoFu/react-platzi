import { useCallback, useMemo, useState } from "react"
import React from "react"

type ChildProps = {
    count: number
}


// Se define el tipo de las propiedades que recibe el componente hijo

const Child = React.memo<ChildProps>(({ count }) => { // Se utiliza React.memo para evitar re-renderizados innecesarios
    console.log('[Child]: Renderizado') // Se imprime en consola cada vez que el componente hijo se vuelve a renderizar
    return <p>
        Contador: {count}
    </p>
})

function CounterWithMemo () {
    const [count, setCounter] = useState (0); // Se define el estado inicial del contador como 0


function ExpensiveCalculation ({number}: {number: number}) {
    const result = useMemo(() => {
        return number * 2
    }, [number]) // Se utiliza useMemo para memorizar el resultado de la operación costosa
    return (
        <div>
            <p>Resultado: {result}</p>
        </div>
    )
}

    const increment = useCallback (() => { // Se utiliza useCallback para evitar la creación de una nueva función en cada renderizado
        setCounter(prevValue => prevValue + 1) // Se incrementa el contador en 1
    }, [])


    return (
        <div>
            <button
            onClick={increment}>
                Incrementar
            </button>
            <Child count={count}/>
            <ExpensiveCalculation number={count}/>
        </div>

    )
}

export default CounterWithMemo