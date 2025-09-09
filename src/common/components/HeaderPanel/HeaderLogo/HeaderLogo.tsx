import logo from '@assets/images/logo.svg';
import styles from './HeaderLogo.module.css';

/**
 * Contains the svg logo shown in the top left of the app.
 */
export function HeaderLogo() {
    return <img className={styles.headerLogo} src={logo} alt='Header Logo' />;
}
