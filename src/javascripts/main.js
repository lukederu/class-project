// Required by Webpack - do not touch
require.context("../", true, /\.(html|json|txt|dat)$/i);
require.context("../images/", true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i);
require.context("../stylesheets/", true, /\.(css)$/i);

//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap";

window.addEventListener("scroll", (event) => {
  const button = document.getElementById("scroll-button");
  if (button) {
    const atBottom =
      document.documentElement.scrollTop + window.innerHeight + 50 >=
      document.body.scrollHeight;

    if (atBottom) {
      button.classList.remove("scroll-in");
      button.classList.add("scroll-out");
    } else {
      button.classList.remove("scroll-out");
      button.classList.add("scroll-in");
    }
  }
});

function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight);
}

window.scrollDown = scrollDown;

const bikes = [
  { speed: 10, img: "./images/mtb-bike.png" },
  { speed: 5, img: "./images/motor-bike.png" },
  { speed: 4, img: "./images/Motorcycle-Bike-PNG.png" },
  { speed: 9, img: "./images/pngwing.com.png" },
];

//bike race stuff
function initRoad() {
  let road = document.getElementById("road");
  for (let index = 0; index < 40; index++) {
    let line = document.createElement("span");
    line.classList.add("line");
    line.innerText = "";
    road.appendChild(line);
  }
}

function race() {
  let bike1 = document.getElementById("slow-bike");
  let bike2 = document.getElementById("fast-bike");

  let indexes = [];
  while (indexes.length < 2) {
    let r = Math.floor(Math.random() * bikes.length);
    if (indexes.indexOf(r) === -1) indexes.push(r);
  }

  let bikeObj1 = bikes[indexes[0]];
  let bikeObj2 = bikes[indexes[1]];

  //set random bikes
  bike1.src = bikeObj1.img;
  bike2.src = bikeObj2.img;
  //set animations
  bike1.style.animation = "none";
  bike2.style.animation = "none";

  bike1.offsetHeight;
  bike2.offsetHeight;

  bike1.style.animation = `race ${bikeObj1.speed}s ease-in`;
  bike2.style.animation = `race ${bikeObj2.speed}s ease-in`;
}

window.race = race;

window.init = initRoad();
