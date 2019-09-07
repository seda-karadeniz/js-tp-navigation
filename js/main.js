(function () {
    "use strict";

    if (!('querySelector' in document && 'addEventListener' in window)) {
        return;
    }
    window.document.documentElement.classList.add(' js-enabled');

})();

