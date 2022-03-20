const navigationLink = document.querySelectorAll(".navigation_link");
const navigationBackground = document.querySelector(".navigation_background");
const navigationNav = document.querySelector(".navigation_nav");
const navigationList = document.querySelector(".navigation_list");
const navigationButton = document.querySelector(".navigation_button");
const navigationIcon = document.querySelector(".navigation_icon");
const checkBox = document.getElementById("checkbox");
const openClose = document.querySelector(".open_close");
const allLink = document.querySelectorAll("a:link");
const links = Array.from(allLink);

//new way to create array

//external link
const externalLink = function (link) {
  const linked = Array.from(allLink).filter(
    (cur) => cur.getAttribute("href").charAt(0) !== "#"
  );
  linked.forEach((cur) => {
    cur.addEventListener("click", function (event) {
      event.preventDefault();
      const href = cur.getAttribute("href");
      // console.log(href);
      href === "https://lin.ee/yF4W1vj" &&
        window.open("https://lin.ee/yF4W1vj") &&
        checkBox.removeAttribute("checked");
      href === "tel:0645546362" && window.open("tel:0645546362");
      href === "mailto:lamoon.linbox@gmail.com" &&
        window.open("mailto:lamoon.linbox@gmail.com");
      href === "https://www.facebook.com/lamoon.linbox" &&
        window.open("https://www.facebook.com/lamoon.linbox");
    });
  });
};
//internal link
const toggleChecked = function (arr) {
  const links = Array.from(allLink).filter(
    (cur) => cur.getAttribute("href").charAt(0) === "#"
  );
  links.forEach((cur) => {
    cur.addEventListener("click", function (e) {
      e.preventDefault();
      const linked = cur.getAttribute("href");
      if (linked === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (linked.startsWith("#") && linked !== "#") {
        const eachLink = document.querySelector(linked);
        eachLink.scrollIntoView({
          behavior: "smooth",
        });
        checkBox.removeAttribute("checked");
      }
    });
  });
};
//toggle button
const toggleButton = function (check, nav) {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    check.toggleAttribute("checked");
  });
};

const clickBackground = function (background, check) {
  background.addEventListener("click", function (e) {
    e.preventDefault();
    check.removeAttribute("checked");
  });
};
const pressEsc = function (check) {
  document.addEventListener("keydown", function (event) {
    event.key === "Escape" && check.removeAttribute("checked");
  });
};
toggleButton(checkBox, navigationButton);
externalLink(links);
toggleChecked(links);
clickBackground(navigationNav, checkBox);
pressEsc(checkBox);
