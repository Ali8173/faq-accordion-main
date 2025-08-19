const accordion = document.querySelectorAll(".accordion-question");

accordion.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    const accordionAnswer = this.parentElement.children[1];
    if (accordionAnswer.classList.contains("hidden")) {
      accordionAnswer.classList.remove("hidden");
      accordionAnswer.classList.add("show");
    } else {
      accordionAnswer.classList.remove("show");
      accordionAnswer.classList.add("hidden");
    }

    let accordionImage = this.children[1].children[0];
    if (accordionImage.src.endsWith("icon-plus.svg")) {
      accordionImage.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      accordionImage.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});

accordion.forEach(function (accordion) {
  accordion.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      this.click();
    }
  });
});

/* 
accordion.forEach()("click", function () {
  const answerEl = this.parentElement.children[1];

  if (answerEl.classList.contains("hidden")) {
    answerEl.classList.remove("hidden");
    answerEl.classList.add("show");
  } else {
    answerEl.classList.remove("show");
    answerEl.classList.add("hidden");
  }
  console.log(this.parentElement.children[1].classList);
}); */
