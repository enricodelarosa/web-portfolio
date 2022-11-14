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