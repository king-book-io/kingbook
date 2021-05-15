$(document).ready(function () {
  var $wrapper = $(".tab-wrapper"),
    $allTabs = $wrapper.find(".tab-content > div"),
    $tabMenu = $wrapper.find(".tab-menu li"),
    $line = $('<div class="line"></div>').appendTo($tabMenu);

  $allTabs.not(":first-of-type").hide();
  $tabMenu.filter(":first-of-type").find(":first").width("100%");

  $tabMenu.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });

  $allTabs.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });

  $tabMenu.on("click", function () {
    var dataTab = $(this).data("tab"),
      $getWrapper = $(this).closest($wrapper);

    $getWrapper.find($tabMenu).removeClass("active");
    $(this).addClass("active");

    $getWrapper.find(".line").width(0);
    $(this).find($line).animate({ width: "100%" }, "fast");
    $getWrapper.find($allTabs).hide();
    $getWrapper
      .find($allTabs)
      .filter("[data-tab=" + dataTab + "]")
      .show();
  });

  $("#flip").click(function () {
    $("#panel").slideToggle("hide");
  });
}); //end ready

function myFunction(x) {
  x.classList.toggle("change");
}

new Swiper(".swiper-one", {
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disablenOnInteraction: false,
  },
});

new Swiper(".swiper-two", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
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
      slidesPerView: 2,
    },
    1336: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      spaceBetween: 20,
      slidesPerView: 1,
    },

    320: {
      spaceBetween: 10,

      slidesPerView: 1,
    },
  },
});

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
