let program = document.querySelectorAll(".lessons");
let phone = document.querySelector("#phone");

// Format Phone Number Function

const formatPhoneNumber = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

// Input Phone Number Events

phone.addEventListener("input", (e) => {
  const formattedInputValue = formatPhoneNumber(e.target.value);
  phone.value = formattedInputValue;
});

window.onload = () => {
  program.forEach((item, index) => {
    item.classList.toggle("active");
  });
};

// Handle Click Get ID

const handleClickGetId = () => {
  program.forEach((item, index) => {
    item.addEventListener("click", () => {
      let programId = document.getElementById(`program_${index + 1}`);

      if (programId) {
        program[index].classList.toggle("active");
      }
    });
  });
};

handleClickGetId();

// Open modal and Close modal

$("[data-modal]").on("click", function (event) {
  event.preventDefault();
  let modal = $(this).data("modal");

  $("body").addClass("no-scroll");
  $(modal).addClass("show");

  setTimeout(function () {
    $(modal).find(".modal__content").css({
      transform: "rotate(0)",
      opacity: "1",
    });
  });
});

$("[data-close]").on("click", function (event) {
  event.preventDefault();

  let modal = $(this).parents(".modal");

  modal.find(".modal__content").css({
    transform: "rotate(360deg)",
    opacity: "0",
  });

  setTimeout(function () {
    $("body").removeClass("no-scroll");
    modal.removeClass("show");
  }, 400);
});

$(".modal").on("click", function () {
  $("body").removeClass("no-scroll");
  $(this).removeClass("show");
});

$(".modal__content").on("click", function (event) {
  event.stopPropagation();
});

// Burger Show Item

let navToggle = $("#navToggle");
let nav = $("#nav_list");

navToggle.on("click", function (event) {
  event.preventDefault();

  nav.toggleClass("show");
});

$("#close_nav").on("click", function (event) {
  event.preventDefault();
  nav.removeClass("show");
});

// Scroll to top

$("#go-up").click(() => {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "slow"
  );

  return false;
});

goUpScroll()

$(window).on('scroll resize', () => {
    goUpScroll()
})

function goUpScroll() {
    let topScroll = $(this).scrollTop()

    if (topScroll) {
        $("#go-up").addClass("active")
    } else {
        $("#go-up").removeClass("active")
    }
}

