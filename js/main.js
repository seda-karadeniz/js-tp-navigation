const SlideInOnScroll = {
  cacheDom() {},
  init() {
    this.cacheDom();
    window.document.documentElement.classList.add('js-enabled');
    this.addEventListeners();
  },
  addEventListeners() {},
};

SlideInOnScroll.init();
