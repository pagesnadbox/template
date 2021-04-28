const defaultImages = [
    '/assets/pagesandbox_logo.png',
    '/assets/office_bg.jpg',
    '/assets/logo.svg',
    '/assets/omurtag-logo-light.png',
];

let imageService = null;

class ImagesService {
    get defaultImages() {
        return defaultImages;
    }

    get BASE_URL() {
        return __webpack_public_path__
    }

    transformURL({ assetName }) {
        if (this.defaultImages.indexOf(assetName) > -1) {
            return `${this.BASE_URL}${assetName}`;
        }

        return `${this.BASE_URL}assets/${assetName}`;
    }
}

export default class ImagesServiceSingleton {
    static getInstance() {
        if (!imageService) {
            imageService = new ImagesService();
        }

        return imageService;
    }
}