class ServicePage__serviceModalController {

    _modal = undefined;
    _footer = undefined;
    _container = undefined;

    _translateX = 0;
    _translateY = 0;

    constructor() {
        this._scrollEvHandler = this._scrollEvHandler.bind(this);
        this._resizeEvHandler = this._resizeEvHandler.bind(this);
    }

    init() {
        this._footer = document.querySelector('.footer');
        this._container = document.querySelector('.app__container');

        window.addEventListener('scroll', this._scrollEvHandler);
        window.addEventListener('resize', this._resizeEvHandler)

        this._setHorizOffset()
    }

    _scrollEvHandler(e) {
        const footerOffsetTop = this._footer.offsetTop;
        const { scrollY, screen } = window;

        if(scrollY + screen.availHeight >= footerOffsetTop - 59) {
            return;
        }

        if(scrollY > 170) {
            this._translateY = scrollY - 120 - 50;
        } else {
            this._translateY = 0;
        }

        this._modal.style.transform =  `translate(${this._translateX}px, ${this._translateY}px)`;
    }

    _resizeEvHandler(e) {
        this._setHorizOffset();
    }

    _setHorizOffset() {
        const appCntrOffsetLeft = this._container.offsetLeft;
        this._translateX = appCntrOffsetLeft;

        this._modal.style.transform = `translate(${this._translateX}px, ${this._translateY}px)`;
    }

    set modal(refModal) {
        this._modal = refModal;
    }

}

export default ServicePage__serviceModalController;