import '../../src/pages/blocking-pages/styles/index.pcss';
import { AdBlockedPage } from '../../src/pages/blocking-pages/adBlockedPage';
import { SafeBrowsing } from '../../src/pages/blocking-pages/safeBrowsing';

document.addEventListener('DOMContentLoaded', () => {
    const pageNameNode = document.querySelector('[data-page-name]');
    if (!pageNameNode) {
        return;
    }

    const pageName = pageNameNode.getAttribute('data-page-name');
    let controller = null;

    switch (pageName) {
        case 'safebrowsing':
            controller = new SafeBrowsing();
            break;
        case 'adBlockedPage':
            controller = new AdBlockedPage();
            break;
        default:
            break;
    }

    if (controller) {
        controller.init();
    }
});
