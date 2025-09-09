import type { PropsWithChildren } from 'react';
import styles from './PreviewLayout.module.css';

type PreviewLayoutProps = PropsWithChildren;

export function PreviewLayout({ children }: PreviewLayoutProps) {
    return <div className={styles.previewLayout}>{children}</div>;
}
