import { Button } from '@common/components/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './ArticleControls.module.css';

type ArticleControlsProps = {
    onReset: () => void;
};

export function ArticleControls({ onReset }: ArticleControlsProps) {
    const { t } = useTranslation();

    return (
        <div className={styles.centerPanel}>
            <Button priority='secondary' onClick={onReset}>{t('articleControls.reset')}</Button>
        </div>
    );
}
