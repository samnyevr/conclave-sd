addEventListener("submit", (event) => {});

// Function to be executed when a scroll event occurs
function handleScroll() {
  if (window.scrollY > 20) {
    document.querySelector("#hero").classList.add("scrolled");
  } else {
    document.querySelector("#hero").classList.remove("scrolled");
  }
}

// Add the scroll event listener to the window
window.addEventListener("scroll", handleScroll);

const QUERY = {
  /* Modal */
  members: {},
  modal: {},
};

window.addEventListener("DOMContentLoaded", () => {
  /* Modal */
  // loop through all the members and add in the toggle
  Array.from(document.querySelectorAll(".js-dialog-toggle")).forEach(
    (member) => {
      let memberName = member.classList[0];
      QUERY.members[memberName] = member;
      console.log(QUERY);
    }
  );
  Array.from(document.querySelectorAll(".js-dialog")).forEach((modal) => {
    QUERY.modal[modal.id] = modal;
  });

  console.log(QUERY);

  /* Modal Code */
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-dialog")) {
      QUERY.modal[e.target.id].close();
    }
  });

  // assigning eventListeners to each portrait cards to show modal
  for (let [key, member] of Object.entries(QUERY.members)) {
    member.addEventListener("click", (event) => {
      if (!isNaN(key.slice(-1))) {
        key = key.slice(0, -1);
      }
      if (QUERY.modal[key].showModal) {
        QUERY.modal[key].showModal();
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.documentElement.classList.add("safari-dialog");
        QUERY.modal[key].setAttribute("open", "");
      }
    });
    member.addEventListener("keypress", (event) => {
      if (a11yClick(event) === true) {
        if (key === "stephenB2") {
          key = "stephenB";
        }
        if (QUERY.modal[key].showModal) {
          QUERY.modal[key].showModal();
          document.querySelector("body").style.overflow = "hidden";
        } else {
          document.documentElement.classList.add("safari-dialog");
          QUERY.modal[key].setAttribute("open", "");
        }
      }
    });
  }

  document.querySelectorAll("dialog").forEach((element) => {
    element.addEventListener("close", () => {
      document.querySelector("body").style.overflow = "visible";
    });
  });

  // for accessbility (a11y) concerns on tab and click events
  function a11yClick(event) {
    if (event.type === "keypress") {
      let code = event.charCode || event.keyCode;
      if (code === 32 || code === 13) {
        return true;
      }
    }
    return false;
  }
});
