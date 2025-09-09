/**
 * Represents the hierarchy of various UI components.
 */
export type Priority = 'primary' | 'secondary' | 'tertiary';

export type Article = {
    longTitle: string;
    shortTitle: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    clickUrl: string;
}
