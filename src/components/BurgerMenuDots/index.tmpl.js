'use strict';

(function () {
    const TAG = 'div';

    const element = document.createElement(TAG);

    element.textContent = 'Мой второй тег';
    document.body.appendChild(element);
})();