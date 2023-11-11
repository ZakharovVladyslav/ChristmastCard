const validateEmail = function ({ email }: { email: string }): Validate {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let validate: Validate = {
        isValidated: true,
        errorMsg: null,
    };

    if (validate.isValidated && (email == null || email == "")) {
        validate = {
            isValidated: false,
            errorMsg: "Email is required",
        };
    }

    if (validate.isValidated && !email?.match(emailRegex)) {
        validate = {
            isValidated: false,
            errorMsg: "Email is invalid",
        };
    }

    return validate;
};

export default validateEmail;
