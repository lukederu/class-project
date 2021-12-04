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
