import { useReducer } from "react";

type state = {
    count: number
}

type action = {
    type: "increment" | "decrement"
}



const reducer = (state:state, action:action) =>{
    switch (action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>
                Contador: {state.count}
            </p>
            <button 
            onClick={() => dispatch ({type: "increment"})}>
                Incrementar
            </button>
            <button
            onClick={() => dispatch ({type: "decrement"})}>
                Decrementar
            </button>
        </div>
    )
}

export default CounterWithUseReducer