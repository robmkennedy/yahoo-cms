import i18next from "i18next";

export const validateUrl = (value: string): string | null => {
    if (!URL.canParse(value)) {
        return i18next.t("common.validation.invalidUrl")
    }
    return null
}

export const validateCharCount = (char: string, count: number): string | null => {
    if (char.length > count) {
        return i18next.t("common.validation.charCount", {count: count} );
    }
    return null;
};

export const validate20 = (char: string) => {
    return validateCharCount(char, 20);
}

export const validate30 = (char: string) => {
    return validateCharCount(char, 30);
}

export const validate50 = (char: string) => {
    return validateCharCount(char, 50);
}

export const validate70 = (char: string) => {
    return validateCharCount(char, 70);
}






