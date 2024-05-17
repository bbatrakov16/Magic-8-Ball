// Variables HTML
var btnImg = document.getElementById("btn-img");
var inp = document.getElementById("inp-question");
var outpAnswer = document.getElementById("outp-answer");

// Event Listener
btnImg.addEventListener("click", imgClicked);

// Function
function imgClicked() {
  // Input the question
  let inpValue = inp.value;
  inpValue = inpValue.toLowerCase();

  if (inpValue === "") {
    answer1 = "Please ask a question...";
    outpAnswer.innerHTML = answer1;
  } else if (inpValue === "does a magic 8 ball actually work?") {
    answer2 = "How dare you doubt me!";
    outpAnswer.innerHTML = answer2;
  } else if (inpValue === "is javascript awesome?") {
    answer3 = "Of Course!";
    outpAnswer.innerHTML = answer3;
  } else {
    // Variants for innerHtml
    let answerRand1 = "Without a Doubt.";
    let answerRand2 = "As I see it, yes.";
    let answerRand3 = "Concentrate and ask again.";
    let answerRand4 = "Don't count on it.";
    let answerRand5 = "Outlook not so good.";

    // Equal chance (20%) of getting five different answer lines
    let chance = Math.random();
    console.log(chance);

    if (chance >= 0 && chance < 0.2) {
      outpAnswer.innerHTML = answerRand1;
    } else if (chance >= 0.2 && chance < 0.4) {
      outpAnswer.innerHTML = answerRand2;
    } else if (chance >= 0.4 && chance < 0.6) {
      outpAnswer.innerHTML = answerRand3;
    } else if (chance >= 0.6 && chance < 0.8) {
      outpAnswer.innerHTML = answerRand4;
    } else if (chance >= 0.8 && chance < 1) {
      outpAnswer.innerHTML = answerRand5;
    }
  }
}
