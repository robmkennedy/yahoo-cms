import type { PropsWithChildren } from 'react';
import styles from './Container.module.css';

type ContainerProps = PropsWithChildren & {
    className: string;
};

/**
 * A simple wrapper component that sets the max width of it's content. Used for top-level pages.
 * @param className - allows any extra classes to be applied to the container
 * @param children - the content to show within the container
 */
export function Container({ className, children }: ContainerProps) {
    return <div className={`${className} ${styles.container}`}>{children}</div>;
}
