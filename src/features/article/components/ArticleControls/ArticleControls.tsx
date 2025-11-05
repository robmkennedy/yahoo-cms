import { Button } from '@common/components/Button/Button';
import { useTheme } from '@common/utils/theme/ThemeContext';
import { useAuthControl } from '@common/utils/auth/AuthContext';
import { useTranslation } from 'react-i18next';
import styles from './ArticleControls.module.css';

type ArticleControlsProps = {
    onReset: () => void;
};

export function ArticleControls({ onReset }: ArticleControlsProps) {
    const { t } = useTranslation();
    const { toggleTheme } = useTheme();
    const toggleAuth = useAuthControl();

    return (
        <div className={styles.centerPanel}>
            <Button priority='secondary' onClick={onReset}>{t('articleControls.reset')}</Button>
            <Button priority='secondary' onClick={toggleTheme}>Toggle Theme</Button>
            <Button priority='secondary' onClick={toggleAuth}>Toggle Auth Value</Button>
        </div>
    );
}
