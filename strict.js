"use strict";
const wrapper = document.querySelector(".wrapper");
const linkRegister = document.querySelector(".register-link");
const linkLogin = document.querySelector(".login-link");
const formRegister = document.querySelector(".form-box .register");
const btnLoginHome = document.querySelector(".btnLoginHome");
const iconClose = document.querySelector(".icon-close");
linkRegister.addEventListener("click", function () {
  wrapper.classList.add("active");
});
linkLogin.addEventListener("click", function () {
  wrapper.classList.remove("active");
});
btnLoginHome.addEventListener("click", function () {
  wrapper.classList.add("pop");
});
iconClose.addEventListener("click", function () {
  wrapper.classList.remove("pop");
});
