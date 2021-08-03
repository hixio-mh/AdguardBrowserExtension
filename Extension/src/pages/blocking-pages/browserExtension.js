/* eslint-disable class-methods-use-this */
import { i18n } from './localization';

/**
 * Class for BrowserExtension page controllers
 */
export class BrowserExtension {
    constructor(defaultConfiguration) {
        this.setConfiguration(defaultConfiguration);
    }

    /**
     * Initialization method
     * Should be executed when DOM loaded
     */
    init() {
        this.translateApp();
        this.initGoBackButton();
        this.showContent();
    }

    /**
     * Translate page
     */
    translateApp() {
        i18n.translateApp(this.currentConfiguration && this.currentConfiguration.locale);
    }

    /**
     * Show content of the page by removing `hidden` class
     */
    showContent() {
        const app = document.getElementById('app');
        if (app) {
            app.classList.remove('hidden');
        }
    }

    /**
     * Set configuration to controller
     */
    setConfiguration(defaultConfiguration = {}) {
        this.currentConfiguration = defaultConfiguration;
    }

    /**
     * Set Go Back button
     */
    initGoBackButton() {
        const backButton = document.getElementById('btnGoBack');
        if (backButton) {
            backButton.setAttribute('href', '#');
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                // eslint-disable-next-line no-restricted-globals
                history.back();
            });
        }
    }
}
