import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

/**
 * A link shown in the header. It uses the react-router NavLink to switch the Outlet between pages.
 * @param to - the route to switch to
 * @param label - the label for the link
 * @param icon - the icon shown to the left of the label
 */
export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    return (
        <NavLink className={styles.headerLink} to={to}>
            {icon}
            {label}
        </NavLink>
    );
}
