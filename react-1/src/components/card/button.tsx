import styled from "styled-components";

interface ButtonProps {
    children: React.ReactNode;
    blue?: boolean;
}

const StyledButton = styled.button<{ blue?: boolean }>`
    background-color: ${(props) => (props.blue ? "blue" : "gray")};
`;

// Lo que hace este codigo es que si tiene la propiedad "Blue", el fondo se pondra azul, si no la tiene, se volvera gris.

const Button: React.FC<ButtonProps> = ({ children, blue }) => {
    return <StyledButton blue={blue}>{children}</StyledButton>;
};

export default Button;