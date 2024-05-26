document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  const section = document.querySelectorAll("section");
  const menuList = document.querySelectorAll(".menu-link");
  //scroll nav//
  menuList.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjustment dari tinggi header
        behavior: "smooth",
      });
    });
  });
  //function nav//
  window.addEventListener("scroll", () => {
    console.log("scroll activate");
    let current = "";

    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      console.log(
        `condition: ${pageYOffset >= sectionTop - sectionHeight / 3}`
      );

      if (pageYOffset >= sectionTop - sectionHeight / 4) {
        current = section.getAttribute("id");
        console.log(
          `attVa:${section.getAttribute("id")}`,
          `current2:${current}`
        );
      }
    });

    // Get the "Kontak" link
    const contactLink = document.querySelector(".contact");

    // Add click event listener to the "Kontak" link
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the target section id
      const targetId = contactLink.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    });
    // Get the "Mulai" link
    const mulaiLink = document.querySelector(".mulai");

    // Add click event listener to the "Mulai" link
    mulaiLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the target section id
      const targetId = mulaiLink.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    });

    ///////////////////////////////////
    //bento box//
    menuList.forEach((link) => {
      console.log(`link:${link.getAttribute("href") === "#" + current}`);
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});

function scrollTrigger(selector, options = {}) {
  let elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach((element) => {
    addObserver(element, options);
  });
}

function addObserver(element, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(element);
    } else {
      entry.target.classList.add(".active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(element);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(element);
}

scrollTrigger(".item");

//jus kodeeeee
document
  .getElementById("findLocationBtn")
  .addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const query = encodeURIComponent("Jus Kode");
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}&query_place_id=${latitude},${longitude}`;

          window.open(googleMapsUrl, "_blank");
        },
        function (error) {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

//coba buah//
document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 100;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });

  document.querySelectorAll(".object1").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 10000;
    var y = (e.clientY * moving_value) / 100;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
