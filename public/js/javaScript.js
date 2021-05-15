$(document).ready(function () {
  $(document).ready(function () {
    $("#flip").click(function () {
      $("#panel").slideToggle("hide");
    });
  });

  $("#nameOf")
    .on("change", function () {
      $(".data").hide();
      $("#" + $(this).val()).fadeIn(700);
    })
    .change();
});

new Swiper(".slider-section", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disablenOnInteraction: false,
  },

  breakpoints: {
    1440: {
      spaceBetween: 40,

      slidesPerView: 1,
    },

    768: {
      spaceBetween: 20,

      slidesPerView: 1,
    },
    500: {
      spaceBetween: 20,

      slidesPerView: 1,
    },

    320: {
      spaceBetween: 20,

      slidesPerView: 1,
    },
  },
});

// input

// items
(function () {
  const link = document.querySelectorAll(".items-footer > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector(".item-footer");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 10,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();

let closeBtn = document.querySelector(".close-btn");
let modalBtns = document.querySelectorAll(".modal-button");
let myModal = document.getElementById("myModal");

for (let i = 0; i < modalBtns.length; i++) {
  const modalBtn = modalBtns[i];
  modalBtn.addEventListener("click", function (e) {
    myModal.classList.add("show-modal");
  });

  closeBtn.addEventListener("click", function () {
    myModal.classList.remove("show-modal");
  });
}

function myFunction(x) {
  x.classList.toggle("change");
}
