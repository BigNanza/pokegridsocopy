// Initialize navigation links when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".otherPages a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });

  // Add click event to mainTitle to redirect to index.html
  const mainTitle = document.querySelector(".mainTitle");
  if (mainTitle) {
    mainTitle.style.cursor = "pointer"; // Change cursor to indicate clickable
    mainTitle.addEventListener("click", function () {
      window.location.href = "/";
    });
  }

  // Add click event to logo to redirect to index.html
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.cursor = "pointer"; // Change cursor to indicate clickable
    logo.addEventListener("click", function () {
      window.location.href = "/";
    });
  }
});

/**
 * Navigate to the single player game with selected options
 */
function goSingle() {
  // Get all selected categories
  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="catOpt"]')
  ).reduce((arr, button) => {
    if (button.checked) arr.push(button.value);
    return arr;
  }, []);

  // Check if at least one category is selected
  if (selectedCategories.length === 0) {
    alert("Please select at least one category to play!");
    return;
  }

  const minmax = !document.getElementById("minmax").checked;
  const second = document.getElementById("second").checked;

  const winCon = document.querySelector('input[name="winOpt"]:checked')
    ? document.querySelector('input[name="winOpt"]:checked').value
    : -1;

  // Get additional options
  const pp = document.getElementById("pp").checked;
  const options = document.getElementById("options").checked;

  // Navigate to the game page with parameters
  window.location.href =
    "game.html?categories=[" +
    selectedCategories +
    "]&winCon=[" +
    minmax +
    "," +
    second +
    "," +
    winCon +
    "]&pp=" +
    pp +
    "&options=" +
    options;
}

/**
 * Navigate to the multiplayer game with selected options
 */
function goMulti() {
  console.log("WORK IN PROGRESS");
}
