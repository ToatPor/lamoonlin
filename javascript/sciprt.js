const navigationLink = document.querySelectorAll(".navigation_link");
const navigationBackground = document.querySelector(".navigation_background");
const navigationNav = document.querySelector(".navigation_nav");
const navigationList = document.querySelector(".navigation_list");
const navigationButton = document.querySelector(".navigation_button");
const navigationIcon = document.querySelector(".navigation_icon");
const checkBox = document.getElementById("checkbox");
const openClose = document.querySelector(".open_close");
const allLink = document.querySelectorAll("a:link");

const toggleChecked = function (arr) {
  arr.forEach((cur) => {
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

toggleChecked(allLink);
// for (const link of navigationLink) {
//   link.preventDefault();
// }

// for (let i = 0; i < navigationLink.length; i++) {
//   navigationLink[i].addEventListener("click", function () {
//     if (checkBox.getAttribute("checked")) {
//       // navigationBackground.classList.add("hidden");
//       // navigationList.classList.add("hidden");
//       navigationIcon.style.transform =
//         "rotate(90deg)" && checkBox.toggleAttribute("checked");

//       // checkBox.getAttribute("checked") && checkBox.removeAttribute("checked");
//     }
//   });
// }
navigationButton.addEventListener("click", function (e) {
  e.preventDefault();
  checkBox.toggleAttribute("checked");
});
