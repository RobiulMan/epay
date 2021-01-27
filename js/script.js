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
}

function submitForm(e) {
  const userDate = username.value.trim();
  const mailData = mail.value.trim();
  const passData = pass.value.trim();
  let starttime, sets, errorx;
  errorx = setError("enter you user name");
  sets = username.parentElement;

  if (userDate === "") {
    sets.style = "margin-bottom: 0;";
    // errorx.style.fontSize = "12px";
    // errorx.style = "font-size: 14px; margin:0; line-hight:120%;";
    sets.appendChild(errorx);
    console.log(errorx);

    // setTimeout(function () {
    //   errorx.remove();

    //   document.head.removeAttribute("style");
    //   //   sets.removeAttribute("style");
    // }, 2000);
  }

  e.preventDefault();
}

//function error it takes to parrameter first text and color
function setError(text) {
  const errorText = text;

  const errorElement = document.createElement("label");
  errorElement.innerHTML = `
  
  
<svg style="margin-right: 5px" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="fill: #ffd400;" d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" fill="#2E3A59"/>
<path style="fill: #ffd400;" d="M11 16H13V18H11V16Z" fill="#ec4646"/>
</svg>
  ${errorText}

  `;

  errorElement.style =
    "display: flex; align-items: center; color: #ffd400; font-weight: 300;";

  return errorElement;
}
