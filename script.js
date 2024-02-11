const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyyyyyyyyyyyyyyyyyyyyyy";
  gif.src = "./images/yes-image.png";
  
  // Hide both "Yes" and "No" buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Create firework animation
  const firework = document.createElement("div");
  firework.classList.add("pyro");
  const before = document.createElement("div");
  before.classList.add("before");
  const after = document.createElement("div");
  after.classList.add("after");
  firework.appendChild(before);
  firework.appendChild(after);
  wrapper.appendChild(firework);

  // Remove firework after animation
  firework.addEventListener("animationend", () => {
    firework.remove();
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
