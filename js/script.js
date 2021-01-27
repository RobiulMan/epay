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
    // errorx.style.fontSize = "12px";
    errorx.style = "font-size: 14px; margin:0; line-hight:120%;";
    sets.appendChild(errorx);

    setTimeout(function () {
      errorx.remove();
      //   sets.removeAttribute("style");
    }, 2000);
  }

  e.preventDefault();
}

//function error
function setError(text) {
  const errorText = text;

  const errorElement = document.createElement("label");
  errorElement.appendChild(document.createTextNode(errorText));
  errorElement.style.color = "#810202";
  // errorElement.style.fontSize = "16px";

  return errorElement;
}
