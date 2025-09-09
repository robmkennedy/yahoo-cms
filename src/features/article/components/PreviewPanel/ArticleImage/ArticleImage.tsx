import { decodeString, limitString } from '@common/utils/formatter';
import styles from './ArticleImage.module.css';

type ArticleImageProps = {
    src: string;
    shortTitle: string;
    longTitle: string;
};

/**
 * A slide to be shown in the headline carousel.
 * Includes an overlay to display the title and summary of the article.
 * @param data - the data of the article to be shown in this particular slide
 */
export function ArticleImage({ src, shortTitle, longTitle }: ArticleImageProps) {
    return (
        <div className={styles.articleImage}>
            <img src={src} alt='No Image Found' />
            <div className={styles.description}>
                <h2 className={styles.title}>{decodeString(shortTitle)}</h2>
                <span className={styles.summary}>{limitString(decodeString((longTitle)), 50)}</span>
            </div>
        </div>
    );
}
