const julia = {
  title: "Julia's Soundboard",
  header: "Julia's Soundboard",
  face: "images/JuliaFace.jpg",
  buttons: [
    { label: "Noted", sound: "noted.m4a" },
    { label: "Laugh", sound: "laughing.m4a" },
    { label: "Don't worry about it", sound: "dontworryboutit.m4a" },
    { label: "I do what I want", sound: "dowhatiwant.m4a" },
    { label: "Woot! Bob Moses!!", sound: "wootbobmoses.m4a" },
  ],
};

const jason = {
  title: "Jason's Soundboard",
  header: "Jason's Soundboard",
  face: "images/JasonFace.png",
  buttons: [
    {
      label: "And so, what is the dinosaur",
      sound: "andsowhatisthedinosaur.m4a",
    },
    { label: "Ducks like snacks too", sound: "duckslikesnacks.m4a" },
    { label: "Electo Fleckto", sound: "electo-fleckto.m4a" },
    {
      label: "You know there should be music",
      sound: "youknowthereshouldbemusic.m4a",
    },
  ],
};

const buttonsEl = document.querySelector(".buttons");
const titleEl = document.querySelector("title");
const headerEl = document.querySelector(".title");
const faceEl = document.querySelector(".face");
const urlParams = new URLSearchParams(window.location.search);

const who = urlParams.get("name");
// default to julia
let data = julia;
if (who == "jason") {
  data = jason;
}
faceEl.setAttribute("src", data.face);
titleEl.innerText = data.title;
headerEl.innerText = data.header;
data.buttons.forEach((el) => {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("button");
  buttonEl.setAttribute("role", "button");
  buttonEl.addEventListener("click", () => playSound(el.sound));
  buttonEl.innerText = el.label;
  buttonsEl.appendChild(buttonEl);
});

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    document.querySelector(".face").classList.add("jiggle");
    audio.play();
    setTimeout(() => {
      document.querySelector(".face").classList.remove("jiggle");
    }, duration * 1000);
  });
}
