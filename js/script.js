"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    if (noCount == 5) {
      noCount = 0
    }
    noCount++;
    const imageIndex = noCount % (MAX_IMAGES + 1);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  const gif = [
    `valentine/gif/1.gif`,
    `valentine/gif/2.gif`,
    `valentine/gif/3.gif`,
    `valentine/gif/4.gif`
  ]
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  var gifCount = 1
  catImg.src = gif[0];
  setInterval(function () {
    
    // Tempatkan kode yang ingin dijalankan setiap 1 detik di sini
    // console.log("Loop berjalan setiap 1 detik");
    catImg.src = gif[gifCount];
    gifCount++
    if(gifCount == 4){
      gifCount =0
    }
  }, 2000);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
