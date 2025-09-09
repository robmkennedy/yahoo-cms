import { useTranslation } from 'react-i18next';
import { Card } from '@common/components/Card/Card';
import type { Article } from '@common/types/commonTypes';
import { ArticleInput } from '@features/article/components/ArticleInput/ArticleInput';
import { ArticleControls } from '@features/article/components/ArticleControls/ArticleControls';
import { validate20, validate30, validate50, validate70, validateUrl } from '@common/utils/validator';
import styles from './ArticleForm.module.css';

type ArticleFormProps = {
    article: Article;
    onReset: () => void;
    onChange: (id: string, value: string) => void;
};

export function ArticleForm({ article, onChange, onReset }: ArticleFormProps) {
    const { t } = useTranslation();

    return (
        <Card title={t('articleForm.title')}>
            <div className={styles.articleForm}>
                <ArticleInput
                    value={article.longTitle}
                    label={t('articleForm.longTitle')}
                    onChange={(value) => onChange('longTitle', value)}
                    validateFunc={validate50}
                    showCount={50}
                />
                <ArticleInput
                    value={article.shortTitle}
                    label={t('articleForm.shortTitle')}
                    onChange={(value) => onChange('shortTitle', value)}
                    validateFunc={validate30}
                    showCount={30}
                />
                <ArticleInput
                    value={article.description}
                    label={t('articleForm.description')}
                    onChange={(value) => onChange('description', value)}
                    validateFunc={validate70}
                    showCount={70}
                />
                <ArticleInput
                    value={article.imageUrl}
                    label={t('articleForm.imageUrl')}
                    onChange={(value) => onChange('imageUrl', value)}
                    validateFunc={validateUrl}
                />
                <ArticleInput
                    value={article.ctaText}
                    label={t('articleForm.ctaText')}
                    onChange={(value) => onChange('ctaText', value)}
                    validateFunc={validate20}
                    showCount={20}
                />
                <ArticleInput
                    value={article.clickUrl}
                    label={t('articleForm.clickUrl')}
                    onChange={(value) => onChange('clickUrl', value)}
                    validateFunc={validateUrl}
                />
                <ArticleControls onReset={onReset} />
            </div>
        </Card>
    );
}
