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

const scrollSignal = document.getElementById('scroll-signal')

window.addEventListener(`scroll`, function (e) {
  const heroOpas = this.scrollY / 1000;
  if (heroOpas === 0) {
    scrollSignal.style.visibility = 'visible';
  }
  if (heroOpas > 0) {
    scrollSignal.style.visibility = 'hidden';
  }
});