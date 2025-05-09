import { useState } from "react"


// Utilizar "is" en las variables es buena practica para saber que sera un metodo Booleano, true o false
const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
    <div>
        <button onClick={() => setIsActive(!isActive)}>
            {isActive? "Alerta 🦊❗": "Inactivo... 🦊💤"}
        </button>
    </div>
    )
}

export default ToggleButton