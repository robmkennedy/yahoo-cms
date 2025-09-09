import { Container } from '@common/components/Container/Container';
import { HeaderNav } from '@common/components/HeaderPanel/HeaderNav/HeaderNav';
import { HeaderLogo } from '@common/components/HeaderPanel/HeaderLogo/HeaderLogo';
import styles from './HeaderPanel.module.css';

/**
 * Holds the contents within the app <header>.
 * Uses a container to limit the width of the header when the browser is resized.
 */
export function HeaderPanel() {
    return (
        <Container className={styles.headerPanel}>
            <HeaderLogo />
            <HeaderNav />
        </Container>
    );
}
