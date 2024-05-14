let password = "";
const indicator = document.getElementById("indicator");
let pwdValue = 8;
let isGeneratePassword = false;

const characterSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+=-".split(
    ""
  );

addEventListener("DOMContentLoaded", () => {
  const indicator = document.getElementById("indicator");
  let pwdLength = document.getElementById("pwdLength");

  pwdLength.innerHTML = indicator.value;

  indicator.oninput = function () {
    pwdLength.textContent = this.value;
    pwdValue = pwdLength.textContent;
  };
});

function generatePwd() {
  let arrayPwd = [];
  let pwd = [];
  let Password = "";
  fourPwd = [];
  isGeneratePassword = true;

  for (let i = 0; i < pwdValue; i++) {
    let indexOfArrayElements = Math.floor(Math.random() * characterSet.length);
    pwd.push(characterSet[indexOfArrayElements]);
  }

  arrayPwd.push(pwd);
  let PasswordArr = arrayPwd[0];

  for (let j = 0; j < PasswordArr.length; j++) {
    Password += PasswordArr[j];
  }
  return Password;
}

function generateFourPwd() {
  const passwordContainers = [
    document.getElementById((id = "password1")),
    document.getElementById((id = "password2")),
    document.getElementById((id = "password3")),
    document.getElementById((id = "password4")),
  ];
  for (let i = 0; i < 4; i++) {
    const passwordGenerated = generatePwd();
    passwordContainers[i].textContent = passwordGenerated;
  }
}

if (isGeneratePassword) {
  generateFourPwd();
}
