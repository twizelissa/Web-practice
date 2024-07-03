document.querySelector('.js-subscribe-button').onclick = function() {
    const buttonElement = document.querySelector('.js-subscribe-button'); 
    if (buttonElement.innerHTML === 'subscribe') {
        buttonElement.innerHTML = 'subscribed';
    } else {
        buttonElement.innerHTML = 'subscribe';
    }
};
