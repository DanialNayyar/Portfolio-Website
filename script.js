function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
   
}


const greetings = [
  "Hello, My name is Danial Nayyar",
  "Bonjour, je m'appelle Danial Nayyar",
  "Hola, mi nombre es Danial Nayyar",
  "مرحبًا، اسمي دانيال نير",
  "ہیلو، میرا نام دانیال نير",
  "Hallo, mein Name ist Danial Nayyar",
  "你好，我的名字是丹尼爾·納亞爾"
];
let index = 0;
const textElement = document.getElementById("hello-text");

setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = greetings[index];
    textElement.style.opacity = 1;
    index = (index + 1) % greetings.length;
  }, 0); // fade duration
}, 2000); // interval
