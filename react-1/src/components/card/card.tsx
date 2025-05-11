import styles from './card.module.scss'

interface CardProps {
    title: string;
    description: string;
    tag: string;
    img: string;
}

const Card: React.FC<CardProps> = ({ title, description, tag, img }) => {
    return (
        <div>
            <div className={styles.card_contenedor}>
                <h2 className={styles.card_titulo}>
                    {title}
                </h2>
                <div className={styles.card_imagen}>
                    <img className={styles.img} src={img} alt="" />
                    <div className={styles.card_overlay}>
                        <p className={styles.card_descripcion}>
                            {description}
                        </p>
                        <span className={styles.card_tag}>
                            {tag}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Se pueden utilizar estilos en linea, como en el propio HTML de esta forma:
// <div style={{color:"blue", fontSize:"2rem", textAlign:"center"}}><div/>
// Pero no es recomendado por visibilidad y comprension del codigo.

//Tambien se puede hacer una variable para que sea el style con los estilos. Ejemplo:
// const Card = () => {
//const textStyles = {
//  color="blue",
//  fontSize="2rem",
//  textAlign="center"
//  }
//}

//E importarlos en donde se vaya a utilizar. ejemplo: <div style={textStyles}><div/>


export default Card;