type ButtonProps = {
    onclick: () => void;
    label: string | number;
}

const Button = ({onclick, label}: ButtonProps) => {
    return(
    <div> 
        <button 
        onClick={onclick}>
            {label}
        </button>
    </div>)
}

export default Button;