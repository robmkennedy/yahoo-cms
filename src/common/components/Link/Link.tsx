import type { PropsWithChildren } from 'react';
import type { Priority } from '@common/types/commonTypes';
import styles from './Link.module.css';

type LinkProps = PropsWithChildren & {
    href?: string;
    priority?: Priority;
};

/**
 * A common Link that can be used to maintain styles and functionality across the app.
 * @param disabled - sets the button to disabled
 * @param onClick - callback to be executed when the button is clicked
 * @param priority - whether the button is primary/secondary or tertiary
 * @param children - content to be contained within the button
 */
export function Link({ href, priority = 'primary', children }: LinkProps) {
    return (
        <a className={`${styles.link} ${priority}`} href={href} target='_blank' rel='noopener noreferrer'>
            {children}
        </a>
    );
}
