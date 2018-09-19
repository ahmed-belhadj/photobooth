const player = document.querySelector(".player");
const photo = document.querySelector(".photo");
const context = photo.getContext("2d");
const photos = document.querySelector(".photos");
const snap = document.querySelector(".snap");

function displayUserCamera() {
  photo.height = player.videoHeight;
  photo.width = player.videoWidth;
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(mediaStream => {
      player.src = window.URL.createObjectURL(mediaStream);
      player.play();
    })
    .catch(error => {
      console.error("Error: " + error);
      alert("Error: " + error);
    });
}

displayUserCamera();
