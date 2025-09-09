import type { Article } from '@common/types/commonTypes';
import { Card } from '@common/components/Card/Card';
import { Link } from '@common/components/Link/Link';
import { ArticleImage } from '@features/article/components/PreviewPanel/ArticleImage/ArticleImage';
import { useTranslation } from 'react-i18next';
import styles from './PreviewPanel.module.css';

type PreviewPanelProps = {
    article: Article;
};

export function PreviewPanel({ article }: PreviewPanelProps) {
    const { t } = useTranslation();

    return (
        <Card title={t('articlePreview.title')}>
            <div className={styles.preview}>
                <ArticleImage src={article.imageUrl} shortTitle={article.shortTitle} longTitle={article.longTitle} />
                <div className={styles.previewDescription}>{article.description}</div>
                {article.ctaText && <Link priority='secondary' href={article.clickUrl}>{article.ctaText}</Link>}
            </div>
        </Card>
    );
}
