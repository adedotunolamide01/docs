/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("[data-nav]");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// build nav menu
function buildNav() {
  sections.forEach((section) => {
    const [item, link] = [
      document.createElement("li"),
      document.createElement("a"),
    ];
    const [title, target] = [
      section.getAttribute("data-nav"),
      section.getAttribute("id"),
    ];
    navList.appendChild(item);
    item.appendChild(link);
    link.textContent = title;
    link.setAttribute("href", `#${target}`);
    link.setAttribute("data-nav", `${target}`);
    link.classList.add("menu__link");
  });
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Set sections as active
function setActive() {
  sections.forEach((section) => {
    const move = section.getBoundingClientRect();
    const activeLink = navList.querySelector(`[data-nav=${section.id}]`);
    if (move.top <= 150 && move.bottom >= 150) {
      section.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
}

// Scroll to section on link click
function scroll(e) {
  e.preventDefault();
  if (e.target.dataset.nav) {
    document
      .getElementById(`${e.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth", duration: 3000 });
  }
}

function validateForm() {
  var x = document.myform.email.value;
  var name = document.myform.name.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address");
    return false;
  } else {
    alert("Congratulations " + name + "!" + "email address successfully!");
    return true;
  }
}

document.addEventListener("DOMContentLoaded", buildNav);
document.addEventListener("scroll", setActive);
navList.addEventListener("click", scroll);
