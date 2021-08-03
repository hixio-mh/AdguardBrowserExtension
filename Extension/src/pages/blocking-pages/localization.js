import locales from './locales';

class I18n {
    constructor() {
        this.dictionaries = { ...locales };
        this.dict = '';
        this.defaultDict = 'en';
    }

    /**
     * Entry point to translate app
     */
    translateApp(locale) {
        this.defineDict(locale);
        this.transformHtml();
    }

    /**
     * Define what lang messages we can use by navigator lang
     */
    defineDict(locale) {
        const navigatorLocale = locale || navigator.language || navigator.browserLanguage;
        const navigatorLanguage = navigatorLocale.substr(0, 2);
        let dict = null;

        // Looking for locale match
        const fullMatch = Object.keys(this.dictionaries)
            .some((key) => {
                const match = key.replace(/-/g, '_').toLowerCase() === navigatorLocale.replace(/-/g, '_').toLowerCase();
                if (match) {
                    dict = key;
                }
                return match;
            });

        // Looking for language match
        if (!fullMatch) {
            Object.keys(this.dictionaries)
                .some((key) => {
                    const match = key.toLowerCase() === navigatorLanguage.toLowerCase();
                    if (match) {
                        dict = key;
                    }
                    return match;
                });
        }

        this.dict = dict || this.defaultDict;
    }

    /**
     * Set appropriate text to elements in html
     */
    transformHtml() {
        const elementsForTranslationText = document.querySelectorAll('[data-key]');
        if (elementsForTranslationText) {
            elementsForTranslationText.forEach((el) => {
                const key = el.getAttribute('data-key');
                el.innerHTML = this.getMessageByKey(key);
            });
        }

        const elementsForTranslationPhldr = document.querySelectorAll('[data-key-placeholder]');
        if (elementsForTranslationPhldr) {
            elementsForTranslationPhldr.forEach((el) => {
                const key = el.getAttribute('data-key-placeholder');
                el.setAttribute('placeholder', this.getMessageByKey(key));
            });
        }
    }

    /**
     * Get message from current dictionary by key
     * @param {string} key
     */
    getMessageByKey(key) {
        if (this.dictionaries[this.dict][key]) {
            return this.dictionaries[this.dict][key];
        }

        console.warn(`${key} for ${this.dict} is not defined`);
        return this.dictionaries[this.defaultDict][key];
    }
}

export const i18n = new I18n();
