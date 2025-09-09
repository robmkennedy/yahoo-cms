import { Outlet } from 'react-router';
import { Container } from '@common/components/Container/Container';
import styles from './MainPanel.module.css';

/**
 * Provides the contents of the apps <main> section.
 * The Outlet is used by react-router to populate the component assigned to the current route in router.tsx.
 * Wrapped in a Container to automatically limit the page width for all routes.
 */
export function MainPanel() {
    return (
        <Container className={styles.mainPanel}>
            <Outlet />
        </Container>
    );
}
