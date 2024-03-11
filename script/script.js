function renderCopyright() {
  document.getElementsByClassName("footer__copyright")[0].innerHTML =
    "&copy" + new Date().getFullYear() + " Ammara Haroon";
}

renderCopyright();
