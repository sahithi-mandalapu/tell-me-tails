(function () {
  // ----- Newsletter Form -----
  const form = document.getElementById("newsletterForm");
  const msg = document.getElementById("subscribeMsg");

  const years = ["year", "year2", "year3"];
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = new Date().getFullYear();
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();

      if (!email.includes("@")) {
        msg.textContent = "Please enter a valid email 💌";
        return;
      }

      // Create a Netlify submission using fetch
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          msg.textContent = "You're on the list! 💌";
          msg.style.fontSize = "0.5rem";
          form.reset();
        })
        .catch(() => {
          msg.textContent = "Oops! Something went wrong. Try again.";
          msg.style.fontSize = "0.5rem";
        });
    });
  }

  // ----- Confetti Burst around Hero Toy -----
  const confettiTarget = document.getElementById("confettiTarget");

  function popConfetti() {
    if (!confettiTarget) return;

    const colors = ["#FFD966", "#FF9AA2", "#B5EAD7", "#C7CEEA", "#FFDAC1"];

    for (let i = 0; i < 20; i++) {
      const piece = document.createElement("span");
      piece.classList.add("confetti");

      const angle = Math.random() * 2 * Math.PI;
      const distance = 120 + Math.random() * 80; 

      piece.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      piece.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.left = "50%";
      piece.style.top = "50%";

      piece.style.width = `${10 + Math.random() * 8}px`;  // width 10–18px
      piece.style.height = `${12 + Math.random() * 10}px`; // height 12–22px

      confettiTarget.appendChild(piece);

      setTimeout(() => piece.remove(), 1200);
    }
  }

  // trigger confetti on load
  window.addEventListener("load", popConfetti);

  // OPTIONAL: trigger confetti on hover
  if (confettiTarget) {
    confettiTarget.addEventListener("mouseenter", popConfetti);
  }
})();
