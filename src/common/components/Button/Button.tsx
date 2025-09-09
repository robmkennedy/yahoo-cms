import type { Priority } from '@common/types/commonTypes';
import type { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = PropsWithChildren & {
    disabled?: boolean;
    onClick?: () => void;
    priority?: Priority;
};

/**
 * A common Link that can be used to maintain styles and functionality across the app.
 * @param disabled - sets the button to disabled
 * @param onClick - callback to be executed when the button is clicked
 * @param priority - whether the button is primary/secondary or tertiary
 * @param children - content to be contained within the button
 */
export function Button({ disabled = false, onClick, priority = 'primary', children }: ButtonProps) {
    return (
        <button className={`${styles.button} ${priority}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
