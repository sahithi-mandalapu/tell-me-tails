(function () {
  const form = document.getElementById("newsletterForm");
  const msg = document.getElementById("subscribeMsg");

  const years = ["year", "year2", "year3"];
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = new Date().getFullYear();
  });

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email.includes("@")) {
      msg.textContent = "Please enter a valid email 💌";
      return;
    }

    msg.textContent = "You're on the list!";
    form.reset();
  });
})();
