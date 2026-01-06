function getCursorPosition(event) {
  const rightEyes = document.getElementById("Right-Eyes");
  const leftEyes = document.getElementById("Left-Eyes");

  const x = (event.clientX * 14) / window.innerWidth + "%";
  const y = (event.clientY * 14) / window.innerHeight + "%";

  rightEyes.style.transform = `translate(${x}, ${y})`;
  leftEyes.style.transform = `translate(${x}, ${y})`;
}

const menuOpenIcon = document.getElementById("menu-open-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");
const toggleMenu = document.getElementById("navigation");

function menuProcess() {
  setTimeout(() => {
    menuCloseIcon.classList.toggle("display-none");
    menuOpenIcon.classList.toggle("display-none");
    toggleMenu.classList.toggle("visibility-hidden");
  }, 200);
}
