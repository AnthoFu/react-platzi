import { useReducer } from "react"

type Action = { type: 'increment' | 'decrement' };
type State = { count: number };

const reducer = (estado: State, accion: Action) => {
    switch (accion.type) {
        case "increment":
            return { count: estado.count + 1 };
        case "decrement":
            return { count: estado.count - 1 };
        default:
            return estado;
    }
}

const Counter = () => {
    const [estado, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Contador: {estado.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>
                ¡Incrementar!
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                ¡Decrementar!
            </button>
        </div>
    )
}


export default Counter