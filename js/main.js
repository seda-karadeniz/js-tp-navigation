const app = {
  cacheDom() {},
  init() {
    this.cacheDom();
    window.document.documentElement.classList.add('js-enabled');
    this.addEventListeners();
  },
  addEventListeners() {},
};

app.init();
