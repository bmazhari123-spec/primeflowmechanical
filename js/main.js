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

  var galleryItems = document.querySelectorAll(".gallery-item img");
  if (galleryItems.length) {
    var loaded = 0;
    var remaining = galleryItems.length;
    var checkEmpty = function () {
      remaining -= 1;
      if (remaining === 0 && loaded === 0) {
        var empty = document.querySelector(".gallery-empty");
        if (empty) empty.style.display = "block";
      }
    };
    galleryItems.forEach(function (img) {
      img.addEventListener("load", function () {
        loaded += 1;
        remaining -= 1;
      });
      img.addEventListener("error", function () {
        img.closest(".gallery-item").style.display = "none";
        checkEmpty();
      });
    });
  }
});
