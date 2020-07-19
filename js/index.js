"use strict";
const boxForm = document.querySelector(".userBox");
const userNumber = document.querySelector("#input");

function input(event) {
  event.preventDefault();
  const userValue = userNumber.value;
  if (userValue == 1) {
    location.href = "student_1.html";
  } else {
    alert("User 정보가 없습니다.");
  }
}

boxForm.addEventListener("submit", input);
