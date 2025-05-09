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

export default Card;