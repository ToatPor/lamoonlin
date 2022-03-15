const navigationLink = document.querySelectorAll(".navigation_link");
const navigationBackground = document.querySelector(".navigation_background");
const navigationNav = document.querySelector(".navigation_nav");
const navigationList = document.querySelector(".navigation_list");
const navigationButton = document.querySelector(".navigation_button");
const navigationIcon = document.querySelector(".navigation_icon");
const checkBox = document.getElementById("checkbox");

const addHidden = function () {
  navigationBackground.classList.add("hidden");
  navigationNav.classList.add("hidden");
};

for (let i = 0; i < navigationLink.length; i++) {
  navigationLink[i].addEventListener("click", function () {
    if (
      !navigationBackground.classList.contains("hidden") &&
      !navigationList.classList.contains("hidden")
    ) {
      navigationBackground.classList.add("hidden");
      navigationList.classList.add("hidden");
      navigationIcon.style.transform = "rotate(90deg)";
    }
  });
}
navigationButton.addEventListener("click", function () {
  if (
    navigationBackground.classList.contains("hidden") &&
    navigationList.classList.contains("hidden")
  ) {
    navigationBackground.classList.remove("hidden");
    navigationList.classList.remove("hidden");
  }
});
