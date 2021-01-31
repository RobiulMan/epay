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
  submit.addEventListener("click", submitForm);

  //usernmae filed event
  username.addEventListener("focusout", userInputDate);
}

function submitForm(e) {
  const userDate = username.value.trim();
  const mailData = mail.value.trim();
  const passData = pass.value.trim();

  if (userDate === "") {
    inputChecker(username, "enter you user name", 1500);
  }
  if (mailData === "") {
    inputChecker(mail, "enter you mail address", 1500);
  }
  if (passData === "") {
    inputChecker(pass, "enter you passeord", 1500);
  }
}

/**
 * error shower function
 * @param {element name reference} parent
 * @param {string} text
 * @param {number} times
 */
const inputChecker = (parent, text, times) => {
  let userParentTag = parent.parentElement;
  let userError = setError(text);

  userParentTag.style = "margin-bottom: 0;";
  userParentTag.appendChild(userError);

  submit.setAttribute("disabled", "disabled");

  setTimeout(() => {
    userParentTag.removeAttribute("style");
    userError.remove();
    submit.removeAttribute("disabled");
  }, times);
};

function userInputDate(e) {
  let userInputDate = username;
  let checkValue = userInputDate.value.trim();
  let userParentTag = username.parentElement;

  if (+checkValue === 0 || checkValue.length <= 5) {
    if (userParentTag.children[2] != undefined) {
      userParentTag.children[2].remove();
    }
  }
  if (checkValue.length > 0 && checkValue.length < 5) {
    let userError = inputFiledError("must be at least 5 characters");

    userParentTag.style = "margin-bottom: 0;";
    userParentTag.appendChild(userError);

    setTimeout(() => {
      userParentTag.removeAttribute("style");
      userError.remove();
    }, 1500);
  } else if (checkValue.length >= 5) {
    let suscessTag = validInput();
    userParentTag.appendChild(suscessTag);
    userParentTag.style.transition = "3s";
  }
  e.preventDefault();
}

/**
 *
 * @param {string} reusable Error function
 */

const setError = (text) => {
  const errorText = text;

  const errorElement = document.createElement("label");
  errorElement.style = `display: flex; align-items: center; color: #444444; background-color:rgba(255, 212, 0, .8); font-weight: 300;`;

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

/**
 *
 * @param {string} reusable input filed error function
 */

const inputFiledError = (text) => {
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
};

/**
 *
 *  reusable label svg icon function
 */
//parfectly wrote text function tomorrow implamention
const validInput = () => {
  const suscessElement = document.createElement("label");
  suscessElement.style = `position: absolute;
    right: 0;
    top: 0;
    transform: translate(-10px, 8px);
    font-weight: 300;
    
    `;

  suscessElement.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path style="fill: #28d018"; d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="#2E3A59"/>
  </svg>  `;
  return suscessElement;
};
