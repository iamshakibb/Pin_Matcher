//Add random number in the random number output
const generateBtn = document.querySelector(".generate-btn");
const randomNumberOutput = document.querySelector(".random_number_output");
generateBtn.addEventListener("click", () => {
  randomNumberOutput.value = generateRandomNumber().toString();
});

//function for generate random number
function generateRandomNumber() {
  let maxNumber = 9999;
  let minNumber = 1000;
  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomNumber;
}

//Disable notify message  section and worng message section
const match = document.querySelector(".match");
const notMatch = document.querySelector(".not_match");
const emptyMessage = document.querySelector(".empty_message");
const digitMessage = document.querySelector(".digit_message");
disablemessage();

//function for disable notify message and worng message all
function disablemessage() {
  match.style.display = "none";
  notMatch.style.display = "none";
  emptyMessage.style.display = "none";
  digitMessage.style.display = "none";
}

//function for notify message disable according to pin match
function notify(isitmatch) {
  if (isitmatch === true) {
    match.style.display = "block";
    notMatch.style.display = "none";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
  }
}

// select all the number button and add event Listener
const numberBtn = document.querySelectorAll(".number_btn");
numberBtn.forEach((item) => {
  item.addEventListener("click", () => {
    appendNumber(item);
  });
});

//function for add number beside a number in user input.
function appendNumber(number) {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = userInputShow.value + number.innerText;
}

// All clear from user input
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = "";
  disablemessage();
});

//delete a number from user input
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = userInputShow.value.slice(0, -1);
  disablemessage();
});

//check is pin number match
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", checkingTheNumber);

function checkingTheNumber() {
  const randomNumberOutput = document.querySelector(".random_number_output");
  let userInputShow = document.querySelector(".user_input_show");
  if (userInputShow.value.length === 4) {
    if (randomNumberOutput.value === userInputShow.value) {
      notify(true);
    } else {
      notify(false);
    }
  } else if (userInputShow.value.length === 0) {
    wrongMessage(true);
  } else {
    wrongMessage(false);
  }

  // try counter message
  const tryMessage = document.querySelector(".try_message");
  let tryCount = document.getElementById("try_count");
  tryCountMinus = parseInt(tryCount.innerText) - 1;
  tryCount.innerText = tryCountMinus;
  if (randomNumberOutput.value === userInputShow.value) {
    tryCount.innerText = 3;
  } else if (parseInt(tryCount.innerText) <= 0) {
    tryCount.innerText = 0;
    tryMessage.style.color = "red";
    submitBtn.classList.add("disable_btn");
    submitBtn.setAttribute("disabled", "disabled");
  }
}

//function for wrong message
function wrongMessage(message) {
  if (message === true) {
    emptyMessage.style.display = "block";
    digitMessage.style.display = "none";
  } else {
    digitMessage.style.display = "block";
    emptyMessage.style.display = "none";
  }
}

// windows reload and input and output value erase
window.onload = () => {
  let userInputShow = document.querySelector(".user_input_show");
  const randomNumberOutput = document.querySelector(".random_number_output");
  userInputShow.value = "";
  randomNumberOutput.value = "";
};
