/*
 * Title: epay sign up
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Robil Islam
 * Date: 1/27/2021
 *
 */
const form = document.querySelector("form");
const username = document.querySelector("#user");
const mail = document.querySelector("#mail");
const pass = document.querySelector("#pass");
const checkbox = document.querySelector("#check");
const submit = document.querySelector("#submit-btn");

//l
//L

//eventlistner function
eventlistner();
function eventlistner() {
  //sumbit button  event
  submit.addEventListener("click", submitForm, false);

  //usernmae filed event
  username.addEventListener("focusout", userInputDate);
}

function submitForm(e) {
  const userDate = username.value.trim();
  const mailData = mail.value.trim();
  const passData = pass.value.trim();

  // let inputParentTag, inputError;

  if (userDate === "") {
    let userParentTag = username.parentElement;
    let userError = setError("enter you user name");

    userParentTag.style = "margin-bottom: 0;";
    userParentTag.appendChild(userError);

    setTimeout(function () {
      userParentTag.removeAttribute("style");
      userError.remove();
    }, 1500);
  }
  if (mailData === "") {
    let mailParentTag = mail.parentElement;
    let mailError = setError("enter you mail address");

    mailParentTag.style = "margin-bottom: 0;";
    mailParentTag.appendChild(mailError);

    setTimeout(function () {
      mailParentTag.removeAttribute("style");
      mailError.remove();
    }, 1500);
  }
  if (passData === "") {
    let passParentTag = pass.parentElement;
    let passError = setError("enter you passeord");

    passParentTag.style = "margin-bottom: 0;";
    passParentTag.appendChild(passError);

    setTimeout(function () {
      passParentTag.removeAttribute("style");
      passError.remove();
    }, 1500);
  }
}
function userInputDate(e) {
  let userInputDate = username;
  let checkValue = userInputDate.value.trim();

  if (checkValue.length < 5) {
    let userParentTag = username.parentElement;
    let userError = inputFiledError("must be at least 5 characters", "#DB1F48");

    userParentTag.style = "margin-bottom: 0;";
    userParentTag.appendChild(userError);

    setTimeout(function () {
      userParentTag.removeAttribute("style");
      userError.remove();
    }, 1500);
  } else {
  }
  e.preventDefault();
}
//function error it takes to parrameter first text and color
function setError(text) {
  const errorText = text;

  const errorElement = document.createElement("label");
  errorElement.style =
    "display: flex; align-items: center; color: #444444; background-color:rgba(255, 212, 0, .8); font-weight: 300;";

  errorElement.innerHTML = `
  
  
<svg style="margin-right: 5px" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="fill: #444444;" d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" fill="#2E3A59"/>
<path style="fill: #444444;" d="M11 16H13V18H11V16Z" fill="#ec4646"/>
</svg>
  ${errorText}

  `;
  errorElement.style.transition = "all 2s";

  return errorElement;
}

function inputFiledError(text, color) {
  const inputErrorElement = document.createElement("label");
  // inputErrorElement.style = `display: flex; justify-content: space-around; align-items: center;
  // color: #ffffff; background-color:rgba(228, 61, 64,.8);  font-weight: 300;`;

  inputErrorElement.style = `display: flex; justify-content: space-around; align-items: center; 
  color: #E43D40; background-color:rgba(255, 227, 228, .7);  font-weight: 400;`;

  inputErrorElement.innerHTML = `
      <span>${text} </span>
      <span>error</span>
    `;

  return inputErrorElement;
}

//parfectly wrote text function tomorrow implamention
const validInput = () => {
  const errorElement = document.createElement("label");
  errorElement.style =
    "display: flex; align-items: center; color: #444444; background-color:rgba(255, 212, 0, .8); font-weight: 300;";

  errorElement.innerHTML = `
  
  
<svg style="margin-right: 5px" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="fill: #444444;" d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" fill="#2E3A59"/>
<path style="fill: #444444;" d="M11 16H13V18H11V16Z" fill="#ec4646"/>
</svg>
  ${errorText}

  `;
  errorElement.style.transition = "all 2s";

  return errorElement;
};
