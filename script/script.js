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
    console.dir(contactForm);
  } else {
    contactForm.style.display = "none";
  }
});
