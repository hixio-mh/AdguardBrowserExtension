import { BrowserExtension } from './browserExtension';

/**
 * DocumentBlockedPage controller
 */
export class AdBlockedPage extends BrowserExtension {
    constructor() {
        const defaultConfiguration = {
            locale: navigator.language || navigator.browserLanguage,
        };

        super(defaultConfiguration);
    }

    /**
     * Initialization DocumentBlockedPage controller
     * Should be execute when DOM loaded
     */
    init() {
        super.translateApp();
        super.initGoBackButton();
        super.showContent();
    }
}
