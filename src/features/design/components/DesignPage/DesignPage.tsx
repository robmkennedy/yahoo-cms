import ReactMarkdown from 'react-markdown';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import designText from '@assets/DESIGN.md?raw';
import datadogText from '@assets/DATADOG.md?raw';
import performanceText from '@assets/PERFORMANCE.md?raw';
import stateText from '@assets/STATE.md?raw';
import { PreviewLayout } from '@common/components/PreviewLayout/PreviewLayout';
import styles from './DesignPage.module.css';

/**
 */
export function DesignPage() {
    const { t } = useTranslation();

    return (
        <div className={styles.designPage}>
            <PreviewLayout>
                <div className={styles.spacer}>
                    <Card title={t('design.title')}>
                        <ReactMarkdown children={designText} />
                    </Card>
                    <Card title={t('datadog.title')}>
                        <ReactMarkdown children={datadogText} />
                    </Card>
                </div>
                <div className={styles.spacer}>
                    <Card title={t('performance.title')}>
                        <ReactMarkdown children={performanceText} />
                    </Card>
                    <Card title={t('state.title')}>
                        <ReactMarkdown children={stateText} />
                    </Card>
                </div>
            </PreviewLayout>
        </div>
    );
}
