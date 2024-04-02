//displays copyright tag int he footer
function renderCopyright() {
  document.getElementsByClassName("footer__copyright")[0].innerHTML =
    "&copy" + new Date().getFullYear() + " Ammara Haroon";
}

renderCopyright();

const emailIcon = document.querySelector("#emailIcon");
const contactForm = document.querySelector("#contactForm");
const btnSend = document.querySelector("#submitButton");
const contactPage = document.querySelector("#contactPage");
contactForm.style.display = "none";
contactForm.style.animationName = "become-visible";
//opens up the message form after the email icon is clicked
emailIcon.addEventListener("click", () => {
  if (contactForm.style.display === "none") {
    contactForm.style.display = "flex";
    contactForm.style.opacity = "1";
  } else {
    contactForm.style.display = "none";
    contactForm.style.opacity = "0";
  }
});

//types the name and title one character at a time
const textArr = ["Ammara Haroon", "Junior Software Developer"];
const elementArr = [
  document.getElementsByClassName("info__name")[0],
  document.getElementsByClassName("info__title")[0],
];
const arrow = document.getElementsByClassName("arrow")[0];
const speed = [200, 100, 50];
let txtInd = 0;
let elemInd = 0;
let isArrowCreated = false;
elementArr.forEach((item) => {
  item.innerHTML = "";
});
window.setTimeout(typeWriter, 1000);
function typeWriter() {
  //type the text one character at a time
  if (txtInd < textArr[elemInd].length) {
    elementArr[elemInd].innerHTML += textArr[elemInd].charAt(txtInd);
    txtInd++;
    //call the same function to type in the next character
    window.setTimeout(typeWriter, speed[elemInd]);
  } else {
    //move on to the title after typing the name
    txtInd = 0;
    elemInd++;
    if (elemInd < elementArr.length) {
      window.setTimeout(typeWriter, 1000);
    } else {
      //display bouncing arrow after typing is done
      arrow.style.opacity = "1";
      isArrowCreated = true;
    }
  }
}

const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

mobileMenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

menu.addEventListener("click", (e) => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    return;
  }
});

menu.addEventListener("mouseleave", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    return;
  }
});

addEventListener("scroll", (event) => {
  if (arrow.getBoundingClientRect().top <= 200) {
    arrow.style.opacity = "0";
  } else if (isArrowCreated) {
    arrow.style.opacity = "1";
  }
});
