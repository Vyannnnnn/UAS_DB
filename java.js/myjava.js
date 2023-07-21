// Ambil elemen video
var video = document.getElementById("myVideo");

// Atur kecepatan video (misalnya, 2x)
video.playbackRate = 0.9;

window.addEventListener("DOMContentLoaded", (event) => {
  const video = document.getElementById("myVideo");
  video.play();
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });
});

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
