import { HeaderLink } from '@common/components/HeaderPanel/HeaderNav/HeaderLink/HeaderLink';
import { todayIcon, aboutIcon } from '@/assets/images/icons';
import { useTranslation } from 'react-i18next';
import styles from './HeaderNav.module.css';

/**
 * The component that holds the nav links in the header.
 * Is aligned with the header logo and remains to the right within the header.
 */
export function HeaderNav() {
    const { t } = useTranslation();

    return (
        <nav className={styles.headerNav}>
            <HeaderLink to={'today'} label={t('app.header.nav.today')} icon={todayIcon} />
            <HeaderLink to={'about'} label={t('app.header.nav.about')} icon={aboutIcon} />
        </nav>
    );
}
