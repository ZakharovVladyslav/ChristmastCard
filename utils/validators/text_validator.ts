const validateText = ({
    text,
    minLength,
    maxLength,
    canBeEmpty = true,
}: {
    text: string;
    minLength?: number;
    maxLength?: number;
    canBeEmpty?: boolean;
}): Validate => {
    let validate: Validate = {
        isValidated: true,
        errorMsg: null,
    };

    if (validate.isValidated && canBeEmpty && text.length === 0) {
        validate = {
            isValidated: false,
            errorMsg: "Text is required",
        };
    }

    if (validate.isValidated && minLength && text.length < minLength) {
        validate = {
            isValidated: false,
            errorMsg: "The text is too short",
        };
    }

    if (validate.isValidated && maxLength && text.length > maxLength) {
        validate = {
            isValidated: false,
            errorMsg: "The text is too long",
        };
    }

    return validate;
};

export { validateText };
