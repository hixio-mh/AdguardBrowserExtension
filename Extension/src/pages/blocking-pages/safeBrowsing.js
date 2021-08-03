import { BrowserExtension } from './browserExtension';

/**
 * SafeBrowsing block page controller
 */
export class SafeBrowsing extends BrowserExtension {
    constructor() {
        const defaultConfiguration = {
            locale: navigator.language || navigator.browserLanguage,
        };

        super(defaultConfiguration);
    }

    /**
     * Initialization of the SafeBrowsing controller
     * Should be executed when DOM loaded
     */
    init() {
        super.translateApp();
        super.initGoBackButton();
        super.showContent();
    }
}
