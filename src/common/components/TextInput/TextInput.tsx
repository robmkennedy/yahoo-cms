import type { KeyboardEvent, ChangeEvent } from 'react';
import styles from './TextInput.module.css';

type TextInputProps = {
    placeholder: string;
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Provides a common text input to be used throughout the app.
 * @param placeholder - the placeholder string to show
 * @param onEnter - called when the user presses the enter key
 * @param onChange - called when the user changes the input text
 */
export function TextInput({ placeholder, onEnter, onChange }: TextInputProps) {
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onEnter) {
            onEnter(event);
        }
    };

    return (
        <input
            type='text'
            placeholder={placeholder}
            className={styles.textInput}
            onChange={onChange}
            onKeyUp={handleKeyUp}
        />
    );
}
