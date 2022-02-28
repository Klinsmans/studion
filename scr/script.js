$(document).ready(() => {
  // MENU
  $(".navbar__menu-btn").on("click", function () {
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-regular fa-xmark");
  });

  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider-prevArrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider-nextArrow">Next</button>',
  };

  $(".slider").slick(slickOptions);

  setInterval(() => {
    const numberCollection = document.querySelectorAll(".counter_number");

    numberCollection.forEach((number) => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);
});
