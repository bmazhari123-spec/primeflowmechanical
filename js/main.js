document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  var form = document.querySelector("#contact-form");
  var successMsg = document.querySelector("#form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // NOTE: this form has no backend wired up yet.
      // Connect it to a form service (e.g. Formspree, Netlify Forms)
      // or your own endpoint to actually receive submissions.
      if (successMsg) {
        successMsg.classList.add("visible");
      }
      form.reset();
    });
  }
});
