addEventListener("submit", (event) => {
  event.preventDefault();
});

// Function to be executed when a scroll event occurs
function handleScroll() {
  // You can add your logic here to respond to the scroll event.
  // For example, you can log the scroll position:
  console.log("Page is scrolling. Current scrollY:", window.scrollY);

  // Or change a CSS class based on scroll position:
  if (window.scrollY > 20) {
    document.querySelector("#hero").classList.add("scrolled");
  } else {
    document.querySelector("#hero").classList.remove("scrolled");
  }
}

// Add the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
