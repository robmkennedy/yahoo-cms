import { MainPanel } from '@common/components/MainPanel/MainPanel';
import { HeaderPanel } from '@common/components/HeaderPanel/HeaderPanel';
import './App.css';

/**
 * The primary App component that is attached to the root html. It is split into the header section and the main section.
 */
export function App() {
    return (
        <>
            <header>
                <HeaderPanel />
            </header>
            <main>
                <MainPanel />
            </main>
        </>
    );
}
