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
const textArr = ["Ammara Haroon", "Full-Stack Software Developer"];
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
const animatedHeadings = document.querySelectorAll(
  ".section__heading--animated"
);
const movingDivsFromLeft = document.querySelector(".animated-left");

addEventListener("scroll", (event) => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
 
  if (
    arrow.getBoundingClientRect().top <=
    3 * Number(getComputedStyle(arrow).height.replace("px", ""))
  ) {
    arrow.style.opacity = "0";
  } else if (isArrowCreated) {
    arrow.style.opacity = "1";
  }
  //console.log(animatedHeadings);
  animatedHeadings.forEach((heading) => {
    // console.log(
    //   "top",
    //   window.innerHeight -
    //     heading.getBoundingClientRect().top -
    //     4 * Number(getComputedStyle(heading).fontSize.replace("px", ""))
    // );

    if (
      window.innerHeight -
        heading.getBoundingClientRect().top -
        4 * Number(getComputedStyle(heading).fontSize.replace("px", "")) >=
      0
    ) {
      heading.style.paddingLeft = `${
        0.5 * window.innerWidth -
        0.3 *
          heading.innerText.length *
          Number(getComputedStyle(heading).fontSize.replace("px", ""))
      }px`;
    } else {
      heading.style.paddingLeft = `0`;
    }
  });
  console.log(screen.width);
  if (
    movingDivsFromLeft.getBoundingClientRect().top -
      Number(getComputedStyle(movingDivsFromLeft).height.replace("px", "")) <
    200
  ) {
    if (screen.width > 500) {
      movingDivsFromLeft.style.translate = "20.3%";
    }
    movingDivsFromLeft.style.opacity = 1;
  } else {
    if (screen.width > 500) {
      movingDivsFromLeft.style.translate = "-100%";
    }
    movingDivsFromLeft.style.opacity = 0;
  }
});

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", () => {
  contactForm.style.display = "none";
  contactForm.style.opacity = "0";
});
