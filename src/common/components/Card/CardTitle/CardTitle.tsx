import styles from './CardTitle.module.css';

type CardTitleProps = {
    text: string;
};

/**
 * Allows common styling for the title of a card.
 * @param text - the text to show
 */
export function CardTitle({ text }: CardTitleProps) {
    return (
        <div className={`${styles.cardTitle}`}>
            <div className={`${styles.cardTitleTag}`} />
            <h3>{text}</h3>
        </div>
    );
}
