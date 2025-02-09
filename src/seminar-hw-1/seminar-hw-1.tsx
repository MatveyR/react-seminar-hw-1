// ====================================================
// ====================================================
// ===================Задание 1========================
// ====================================================
// ====================================================

enum Gender {MALE, FEMALE};

function cat(name: string, age: number, hobbies: string[], gender: Gender) {
    return name + ", " + age.toString() + " лет, любит: " + hobbies.join(", ") + ". Пол: " + (gender === Gender.MALE ? "мужской." : "женский.");
}

// ====================================================
// ====================================================
// ===================Задание 2========================
// ====================================================
// ====================================================

interface FormData {
    username: string;
    email: string;
    age: number;
}

type ValidationRules = {
    [key in keyof FormData]: (value: FormData[key]) => string | null;
};

function validateForm(formData: FormData, rules: ValidationRules): Record<keyof FormData, string | null> {
    const errors: Record<keyof FormData, string | null> = {
        username: null,
        email: null,
        age: null,
    };

    for (const field in rules) {
        if (Object.prototype.hasOwnProperty.call(rules, field)) {
            const key = field as keyof FormData;
            const validate = rules[key];
            const value = formData[key];
            const errorMessage = validate(value);

            if (errorMessage) {
                errors[key] = errorMessage;
            }
        }
    }

    return errors;
}

const validationRules: ValidationRules = {
    username: (value: string) => {
        if (!value.trim()) {
            return `Поле 'username' не может быть пустым`;
        }
        return null;
    },
    email: (value: string) => {
        if (!value.trim()) {
            return `Поле 'email' не может быть пустым`;
        }
        return null;
    },
    age: (value: number) => {
        if (value <= 0) {
            return `Поле 'age' должно быть больше нуля`;
        }
        return null;
    },
};

const formData: FormData = {
    username: "",
    email: "test@example.com",
    age: -5,
};

// ====================================================
// ====================================================
// ===================Задание 3========================
// ====================================================
// ====================================================

function processValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * value;
    } else {
        return !value;
    }
}