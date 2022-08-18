const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme") ?
  localStorage.getItem("theme") :
  null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

const menu = document.querySelector(".nav-menu")
const menuItems = document.querySelectorAll(".nav-link");

function clickItem(item, index) {

  const itemActive = menu.querySelectorAll(".active");

  if (itemActive.length > 0) {
    itemActive.forEach(e => {
      e.classList.remove("active")

    })
  }

  item.classList.add("active");

}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
})

window.onscroll = function () {

  let navegationScroll = window.pageYOffset

  if (navegationScroll >= 0 && navegationScroll <=  500) {
    document.getElementById("nav-link-home").classList.add("active");
  } else {
    document.getElementById("nav-link-home").classList.remove("active");
  }

  if (navegationScroll >= 501 && navegationScroll <=  850) {
    document.getElementById("nav-link-projects").classList.add("active");
  } else {
    document.getElementById("nav-link-projects").classList.remove("active");
  }

  if (navegationScroll >= 851 ) {
    document.getElementById("nav-link-skills").classList.add("active");
    document.getElementById("skills-progress").style.display = 'block'
  } else {
    document.getElementById("nav-link-skills").classList.remove("active");
    document.getElementById("skills-progress").style.display= 'none'
  }
  
  console.log(navegationScroll)
}