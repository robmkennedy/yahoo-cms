import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { AboutPage } from '@features/about/components/AboutPage/AboutPage';
import { DesignPage } from '@features/design/components/DesignPage/DesignPage';
import { ArticlePage } from '@features/article/components/ArticlePage/ArticlePage';
import { ErrorFallback } from '@common/components/ErrorFallback/ErrorFallback';

/**
 * Creates the react-router config and assigns corresponding components to each route.
 * When switching to a route - the Outlet in the MainPanel will be assigned to the page component.
 * If any unknown paths are entered, the app will default to the /today route.
 * The base App component will be wrapped with the React error boundary of ErrorFallback.
 */
export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/article' /> },
                { path: '/article', Component: ArticlePage },
                { path: '/about', Component: AboutPage },
                { path: '/design', Component: DesignPage },
                { path: '/*', element: <Navigate to='/article' /> }
            ],
            errorElement: <ErrorFallback />
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
