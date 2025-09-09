import { type ChangeEvent, useEffect, useState } from 'react';
import { errorIcon } from '@assets/images/icons';
import styles from './ArticleInput.module.css';

type ArticleInputProps = {
    label: string;
    value: string;
    showCount?: number;
    onChange: (value: string) => void;
    validateFunc: (value: string) => string | null;
};

export function ArticleInput({ label, value, showCount, onChange, validateFunc }: ArticleInputProps) {
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const result = validateFunc(value);
        setMessage(result);
    }, [value, validateFunc]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
    };

    return (
        <div className={styles.articleInput}>
            <div className={styles.title}>
                <label className={styles.label}>{label}</label>
                {showCount && <div className={styles.count}>{`${value.length} / ${showCount}`}</div>}
            </div>
            <input
                type='text'
                value={value}
                className={`${styles.input} ${message ? styles.error : ''}`}
                onChange={handleChange}
            />
            {message && <div className={styles.message}>{errorIcon}{message}</div>}
        </div>
    );
}
