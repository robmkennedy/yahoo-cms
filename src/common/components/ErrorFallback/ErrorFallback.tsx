import { isRouteErrorResponse, useRouteError } from 'react-router';
import { useTranslation } from 'react-i18next';

const getErrorMessage = (error: unknown): string => {
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error comes from react router
        errorMessage = error.data?.message || error.statusText;
    } else if (error instanceof Error) {
        // error is standard Error
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        // error is only string
        errorMessage = error;
    } else {
        // unknown error type
        errorMessage = 'Unknown error';
    }
    return errorMessage;
};

/**
 * A component used to act as an Error Boundary which catches error avoids the app crashing.
 * It accommodates catching standard errors and any routing errors thrown by react-router.
 */
export function ErrorFallback() {
    const error = useRouteError();
    const errorMessage = getErrorMessage(error);
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('common.error.title')}</h2>
            <p>{t('common.error.message')}</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}
