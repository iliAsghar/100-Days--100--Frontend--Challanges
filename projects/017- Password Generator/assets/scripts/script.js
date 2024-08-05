"use strict";

const generateButton = document.querySelector('.title__generate');
const passwordField = document.querySelector('.password-field__password');
const copyButton = document.querySelector('.password-field__copy');

function generateNewPassword() {
  var length = 12,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

function newPassword() {
  let newPassword = generateNewPassword();
  passwordField.innerHTML = newPassword;
}

generateButton.addEventListener('click', () => {
  setTimeout(() => {
    newPassword();
  }, 200);
});

copyButton.addEventListener('click', () => {
  if(passwordField.innerHTML != '-') {
    navigator.clipboard.writeText(passwordField.innerHTML);
    alert("Password Copied!")
  } else {
    alert('Generate a password first!');
  }
});