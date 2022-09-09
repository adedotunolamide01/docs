//Define Global Variables

const sections = document.querySelectorAll("[data-nav]");
const navList = document.querySelector("#navbar__list");

// function build nav menu
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
// build the nav
document.addEventListener("DOMContentLoaded", buildNav);

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
document.addEventListener("scroll", setActive);

// Scroll to section on link click
function scroll(e) {
  e.preventDefault();
  if (e.target.dataset.nav) {
    document
      .getElementById(`${e.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth", duration: 3000 });
  }
}
navList.addEventListener("click", scroll);

//function for the form validation
function validateForm() {
  const x = document.myform.email.value;
  const name = document.myform.name.value;
  const atposition = x.indexOf("@");
  const dotposition = x.lastIndexOf(".");
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
