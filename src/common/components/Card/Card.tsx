import type { PropsWithChildren } from 'react';
import { CardTitle } from '@common/components/Card/CardTitle/CardTitle';
import styles from './Card.module.css';

type CardProps = PropsWithChildren & {
    title?: string;
};

/**
 * Displays a container to group elements in the UI. Styled box shadow acts as borders between cards.
 * @param title - the text shown at the top of the card
 * @param children - the content to show within the node
 */
export function Card({ title, children }: CardProps) {
    return (
        <div className={`${styles.card}`}>
            {title && <CardTitle text={title} />}
            {children}
        </div>
    );
}
