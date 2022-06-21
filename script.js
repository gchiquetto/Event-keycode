const keyPressed = document.querySelector('.heading-2');
const eventKey = document.getElementById('event-key');
const eventCode = document.getElementById('event-code');

window.addEventListener('keydown', e => {
    keyPressed.textContent = ( e.key === ' ' ? 'spacebar' : e.key);
    eventKey.textContent = ( e.key === ' ' ? `" "` : e.key);
    eventCode.textContent = e.code;
});