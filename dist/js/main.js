var menuBtn = $("nav img");
var closeBtn = $(".close");
var mobileNav = $(".mobile-nav");
var tabs = document.querySelectorAll(".tabs li");
var content = $(".content");
var content2 = $(".content2");
var content3 = $(".content3");

menuBtn.click(function () {
  mobileNav.addClass("show");
});

closeBtn.click(function () {
  mobileNav.removeClass("show");
});

tabs[0].addEventListener("click", () => {
  if (tabs[0].classList.contains("active") && content.hasClass("show")) {
    //does nothing
  } else {
    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");
    tabs[2].classList.remove("active");
    content.removeClass("hide");
    content2.addClass("hide");
    content3.addClass("hide");
    content.addClass("show");
    content2.removeClass("show");
    content3.removeClass("show");
  }
});

tabs[1].addEventListener("click", () => {
  if (tabs[1].classList.contains("active") && content2.hasClass("show")) {
    //does nothing
  } else {
    tabs[0].classList.remove("active");
    tabs[1].classList.add("active");
    tabs[2].classList.remove("active");
    content2.removeClass("hide");
    content.addClass("hide");
    content3.addClass("hide");
    content2.addClass("show");
    content.removeClass("show");
    content3.removeClass("show");
  }
});

tabs[2].addEventListener("click", () => {
  if (tabs[2].classList.contains("active")) {
    //does nothing
  } else {
    tabs[0].classList.remove("active");
    tabs[1].classList.remove("active");
    tabs[2].classList.add("active");
    content3.removeClass("hide");
    content2.addClass("hide");
    content.addClass("hide");
    content3.addClass("show");
    content2.removeClass("show");
    content.removeClass("show");
  }
});

var question = $(".questions li .overlay");
var redArrow = $(".red-arrow");
var blueArrow = $(".blue-arrow");

question.click(function (e) {
  var li = event.target.parentNode;
  var blue_arrow = li.childNodes[3].childNodes[3];
  var red_arrow = li.childNodes[3].childNodes[5];
  var ans = li.childNodes[5];

  if (ans.classList.contains("closed")) {
    blue_arrow.style.display = "none";
    red_arrow.style.display = "block";
    ans.style.animationName = "moveDown";
    red_arrow.style.transform = "rotate(180deg)";
    ans.classList.add("opened");
    ans.classList.remove("closed");
  } else {
    red_arrow.style.display = "none";
    blue_arrow.style.display = "block";
    ans.style.animationName = "moveUp";
    blue_arrow.style.transform = "rotate(0deg)";
    ans.classList.remove("opened");
    ans.classList.add("closed");
  }
});

var form = $("form");
var email = $("#email");
var submitBtn = $("#submitBtn");
var input = $("form .input");
var icon = $("form .input i");
var msg = $("form .input .msg");

const validateEmail = (email) => {
  const code = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return code.test(email);
};

const output = (msgDoc, msg, icon, iconClass, color) => {
  email.css("border", `2px solid ${color}`);

  icon.removeClass();
  icon.addClass(iconClass);
  icon.css("color", color);
  icon.css("display", "block");

  msgDoc.text(msg);
  msgDoc.css("background", color);
  msgDoc.css("display", "block");

  input.css("margin-bottom", "20px");
  submitBtn.css("margin-bottom", "20px");
};

const remove = (msgDoc, icon, time) => {
  setTimeout(() => {
    icon.css("display", "none");
    msgDoc.css("display", "none");
    email.css("border", "0");
    input.css("margin-bottom", "0");
    submitBtn.css("margin-bottom", "0");
  }, time);
};

email.click(function () {
  remove(msg, icon, 0);
});

form.on("submit", function (e) {
  e.preventDefault();
  if (validateEmail(email.val())) {
    output(msg, "Successful", icon, "fa fa-check-circle", "green", "green");
    remove(msg, icon, 4000);
  } else {
    output(
      msg,
      "Whoops, make sure its an email",
      icon,
      "fas fa-exclamation-circle",
      "hsl(0, 94%, 66%)"
    );
  }
});
