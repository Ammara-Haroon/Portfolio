function renderCopyright() {
  document.getElementsByClassName("footer__copyright")[0].innerHTML =
    "&copy" + new Date().getFullYear() + " Ammara Haroon";
}

renderCopyright();

const emailIcon = document.querySelector("#emailIcon");
const contactForm = document.querySelector("#contactForm");
const btnSend = document.querySelector("#submitButton");
contactForm.style.display = "none";

btnSend.addEventListener("click", () => {
  if (document.querySelector(":invalid")) {
    console.log("invalid input");
    return;
  }
  contactForm.style.display = "none";
});

emailIcon.addEventListener("click", () => {
  if (contactForm.style.display === "none") {
    contactForm.style.display = "flex";
  } else {
    contactForm.style.display = "none";
  }
});

const textArr = ["Ammara Haroon", "Junior Software Developer"];

const elementArr = [
  //document.getElementsByClassName("landing-page__container__text")[0],
  document.getElementsByClassName("landing-page__container__info__name")[0],
  document.getElementsByClassName("landing-page__container__info__title")[0],
];

elementArr.forEach((item) => {
  item.innerHTML = "";
});
const speed = [200, 100, 50];
let txtInd = 0;
let elemInd = 0;
window.setTimeout(typeWriter, 1000);

function typeWriter() {
  if (txtInd < textArr[elemInd].length) {
    elementArr[elemInd].innerHTML += textArr[elemInd].charAt(txtInd);
    txtInd++;
    window.setTimeout(typeWriter, speed[elemInd]);
  } else {
    txtInd = 0;
    elemInd++;
    if (elemInd < elementArr.length) {
      window.setTimeout(typeWriter, 1000);
    }
  }
  //console.log(elementArr[elemInd].innerHTML);
}
