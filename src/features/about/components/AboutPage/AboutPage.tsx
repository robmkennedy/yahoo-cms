import ReactMarkdown from 'react-markdown';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import readmeText from '/README.md?raw';

/**
 * Shows information about this application. To avoid repetition of documentation, it uses the README.md file.
 * The markup file is parsed to HTML using the react-markdown library and then inserted in to a Card.
 */
export function AboutPage() {
    const { t } = useTranslation();

    return (
        <Card title={t('about.title')}>
            <ReactMarkdown children={readmeText} />
        </Card>
    );
}
