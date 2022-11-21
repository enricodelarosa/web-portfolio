const videoElement = document.getElementById('bg-video');
videoElement
.play()
.then(() => {})
 .catch((error) => {
    //Do something like adding controls to allow user to manually play
    console.log('in low power mode');
    const alert = document.getElementById('lower-power-alert');
    alert.style.display = 'flex';
});


const montyhallCloseBtnElement = document.getElementById('monty-close');
const montyhallVideo = document.getElementById('monty-hall-video');

const montyModal = document.getElementById('monty-modal');

montyModal.addEventListener('click', () => {
    montyhallVideo.play();
});

montyhallCloseBtnElement.addEventListener('click', () => {
    montyhallVideo.pause();
});