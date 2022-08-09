const header = $("header");
const headerMain = $(".header_main");
const subMenuElem = $(".header_sub_menu");
const license = document.querySelector(".license");

let isOpen = false;
header.css({ minHeight: `${window.visualViewport.height}px` });
headerMain.css({ minHeight: `${window.visualViewport.height - 104}px` });
license.innerText = `© Арх-дом, ${new Date().getFullYear()}`;

function scrollToPosition(position) {
  $("body,html").animate({ scrollTop: position }, 500);
}

function ShowMenu() {
  isOpen = true;
  $(".menu img:first-child").hide();
  $(".menu img:last-child").show();
  subMenuElem.show();
}

function hideMenu() {
  isOpen = false;
  $(".menu img:last-child").hide();
  $(".menu img:first-child").show();
  subMenuElem.hide();
}

function onMenuClickHandler() {
  isOpen ? hideMenu() : ShowMenu();
}

function onArrowClickHandler() {
  const position = $("#our_services").offset().top;

  scrollToPosition(position);
}

function onLinkClickHandler(event) {
  event.preventDefault();

  const id = $(this).attr("href");
  const position = $(id).offset().top;

  scrollToPosition(position);

  hideMenu();
}

$(".header_nav_menu").on("click", "a", onLinkClickHandler);
$(".header_sub_menu nav").on("click", "a", onLinkClickHandler);
$(".arrow").on("click", onArrowClickHandler);
$(".menu").on("click", onMenuClickHandler);
