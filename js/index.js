"use strict";
const boxForm = document.querySelector(".user__box");
const userNumber = document.querySelector("#input");

function input(event) {
  event.preventDefault();
  const userValue = userNumber.value;
  if (userValue == 6500) {
    location.href = "dbsgusrud6500.html";
  } else if (userValue == 4881) {
    location.href = "rlagusdn4881.html";
  } else {
    alert("User 정보가 없습니다.");
    location.reload(true);
  }
}

boxForm.addEventListener("submit", input);
