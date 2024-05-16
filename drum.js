var numButtons = document.querySelectorAll(".drum").length;
var letterHolder;
var audio;
document.addEventListener("keydown", function (event) {
  handlePress(event.key);
  animation(event.key);
});
for (var i = 0; i < numButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    handleClick(this.textContent);
    animation(this.textContent);
  });
}

function handleClick(text) {
  letterHolder = text;
  switch (letterHolder) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid letter:", letterHolder);
  }
}

function handlePress(key) {
  letterHolder = key;
  switch (letterHolder) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid letter:", letterHolder);
  }
}

function animation(currentKey) {
  var activePushed = document.querySelector("." + currentKey);
  activePushed.classList.add("pressed");
  activePushed.style.color = "white";
  setTimeout(function () {
    activePushed.classList.remove("pressed");
    activePushed.style.color = "#da0463";
  }, 100);
}
