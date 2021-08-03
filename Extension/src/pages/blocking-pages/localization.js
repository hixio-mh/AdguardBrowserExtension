import { translator } from '../../common/translators/translator';

export function transformHtml() {
    const elementsForTranslationText = document.querySelectorAll('[data-key]');
    if (elementsForTranslationText) {
        elementsForTranslationText.forEach((el) => {
            const key = el.getAttribute('data-key');
            el.innerHTML = translator.getMessage(key);
        });
    }

    const elementsForTranslationPhldr = document.querySelectorAll('[data-key-placeholder]');
    if (elementsForTranslationPhldr) {
        elementsForTranslationPhldr.forEach((el) => {
            const key = el.getAttribute('data-key-placeholder');
            el.setAttribute('placeholder', translator.getMessage(key));
        });
    }
}
