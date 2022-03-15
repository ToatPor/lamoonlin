const navigationLink = document.querySelectorAll(".navigation_link");
const navigationBackground = document.querySelector(".navigation_background");
const navigationNav = document.querySelector(".navigation_nav");
const navigationList = document.querySelector(".navigation_list");
const navigationButton = document.querySelector(".navigation_button");
const navigationIcon = document.querySelector(".navigation_icon");
const checkBox = document.getElementById("checkbox");
const openClose = document.querySelector(".open_close");
const allLink = document.querySelectorAll("a:link");
const link = [...allLink];

//external link
const externalLink = function (link) {
  const exLink = link.filter((cur) => {
    const arr = cur.getAttribute("href").charAt(0) !== "#";
    return arr;
  });
  exLink.forEach((cur) => {
    cur.addEventListener("click", function (event) {
      event.preventDefault();
      const href = cur.getAttribute("href");
      console.log(href);
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
  const internalLink = arr.filter((cur) =>
    cur.getAttribute("href").startsWith("#")
  );
  internalLink.forEach((cur) => {
    cur.addEventListener("click", function (e) {
      e.preventDefault();
      const href = cur.getAttribute("href");
      // console.log(href);
      href === "#" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      if (href !== "#" && href.startsWith("#")) {
        //go direct to href each section
        const hrefEach = document.querySelector(href);
        hrefEach.scrollIntoView({
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
externalLink(link);
toggleChecked(link);
clickBackground(navigationNav, checkBox);
pressEsc(checkBox);
