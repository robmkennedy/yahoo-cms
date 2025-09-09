import { useState } from 'react';
import type { Article } from '@common/types/commonTypes';
import { ArticleForm } from '@features/article/components/ArticleForm/ArticleForm';
import { PreviewPanel } from '@features/article/components/PreviewPanel/PreviewPanel';
import { PreviewLayout } from '@common/components/PreviewLayout/PreviewLayout';

const blankArticle: Article = {
    longTitle: '',
    shortTitle: '',
    description: '',
    imageUrl: 'https://placehold.co/600x400?text=Sample',
    ctaText: '',
    clickUrl: 'https://sample.com'
};

const storageId = 'news-article';

export function ArticlePage() {
    const locallyStored = localStorage.getItem(storageId);
    const initialArticle = locallyStored ? JSON.parse(locallyStored) : blankArticle;
    const [article, setArticle] = useState<Article>(initialArticle);

    const handleChange = (id: string, value: string) => {
        const newArticle = { ...article, [id]: value };
        setArticle(newArticle);
        localStorage.setItem(storageId, JSON.stringify(newArticle));
    };

    const handleReset = () => {
        setArticle(blankArticle);
        localStorage.setItem(storageId, JSON.stringify(blankArticle));
    };

    return (
        <PreviewLayout>
            <ArticleForm article={article} onChange={handleChange} onReset={handleReset} />
            <PreviewPanel article={article} />
        </PreviewLayout>
    );
}
