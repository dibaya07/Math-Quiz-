"use strict";
const submitBtn = document.getElementById("submit");
const btns = document.querySelectorAll(".btns");
const reGenerateBtn = document.getElementById("re-generate");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let realAns;
let easyQuestion = () => {
  let a = Math.floor(Math.random() * 50) + 1;
  let b = Math.floor(Math.random() * 50) + 1;
  question.innerText = `${a}+${b}`;
  realAns = a + b;
};
let mediumQuestion = () => {
  let a = Math.floor(Math.random() * 500) + 1;
  let b = Math.floor(Math.random() * 500) + 1;
  question.innerText = `${a}+${b}`;
  realAns = a + b;
  console.log(question.innerText);
};
let hardQuestion = () => {
  let a = Math.floor(Math.random() * 5000) + 1;
  let b = Math.floor(Math.random() * 5000) + 1;
  question.innerText = `${a}+${b}`;
  realAns = a + b;
  console.log(question.innerText);
};
let target;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    target = btn.innerText;
    if (target === "Easy") {
      easyQuestion();
    }
    if (target === "Medium") {
      mediumQuestion();
    }
    if (target === "Hard") {
      hardQuestion();
    }
  });
});
reGenerateBtn.addEventListener("click", () => {
  console.log("regen");
  if (target === "Easy") {
    easyQuestion();
  }
  if (target === "Medium") {
    mediumQuestion();
  }
  if (target === "Hard") {
    hardQuestion();
  }
});
answer.addEventListener("input", () => {
  answer.value = answer.value.replace(/\D/g, "");
});
submitBtn.addEventListener("click", () => {
  let userInput = parseInt(answer.value);
  if (realAns === userInput) {
    console.log("correct");
    if (target === "Easy") {
      easyQuestion();
    }
    if (target === "Medium") {
      mediumQuestion();
    }
    if (target === "Hard") {
      hardQuestion();
    }
  } else {
    console.log("incorrect");
    alert("Wrong answer");
  }
  answer.value = "";
});