new Snow ();


const btn = document.querySelector(".button-audio");
const music = document.getElementById("bgMusic");

music.volume = 0.4;

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.classList.add("active");
  } else {
    music.pause();
    btn.classList.remove("active");
  }
});
