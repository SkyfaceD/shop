/**
 * Выполняет проверку, является ли числовой разделитель первым в строке.
 * @param {string} value Исходная строка.
 * @returns {boolean}
 */
export const firstDelimiter = (value) => /^\d+$/g.test(value);

/**
 * Удаляет из строки все символы не являющиеся числами.
 * @param {string} value Исходная строка.
 */
const removeChars = (value) => value.replace(/[^0-9]/g, "");

/**
 * Исправляет неверную последовательность нулей в числе.
 * @param {string} value Исходная строка.
 */
const fixNumber = (value) => {
    if (/[1-9]/g.test(value)) {
        return value.replace(/^0+/g, "");
    } else {
        return value.replace(/^0+$/g, "0");
    }
};

/**
 * Нормализует число.
 * @param {string} value Исходная строка.
 */
export const normalize = (value) => {
    const delimiterPosition = value.indexOf(".");
    if (delimiterPosition !== -1) {
        const integer = removeChars(value.slice(0, delimiterPosition)) || "0";

        return fixNumber(integer);
    } else {
        return fixNumber(removeChars(value));
    }
};

const handleChange = (event) => {
    const value = event.target.value.trim();

    if (!firstDelimiter(value)) {
        const parsedValue = normalize(value);

        if (value !== parsedValue) {
            event.target.value = parsedValue;
        }
    }
};
