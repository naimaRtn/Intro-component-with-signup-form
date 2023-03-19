// get warning messages
let warning = document.querySelectorAll(".warning");
//remove warning messages on load
window.onload = function () {
  // get warning paragraphs

  warning.forEach(function (elem) {
    elem.style.visibility = "hidden";
  });
};
//get form
let form = document.querySelector("form");

//get submit button
let submitBtn = document.querySelector("input[type='submit']");
console.log(submitBtn);

//get input fields
let inputs = document.querySelectorAll("input:not([type='submit'])");
console.log(inputs);

//add eventlistner to submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //verify returned values
  inputs.forEach(function (elem) {
    if (elem.value === "") {
      elem.style.backgroundImage = "url('images/icon-error.svg')";
      elem.style.backgroundRepeat = "no-repeat";
      elem.style.backgroundPosition = "90% center";
      elem.style.borderColor = "hsl(0, 100%, 74%)";

      //adding warning message
      switch ([...inputs].indexOf(elem)) {
        case 0:
          document.querySelector("#w1").style.visibility = "visible";
          break;
        case 1:
          document.querySelector("#w2").style.visibility = "visible";
          break;
        case 2:
          document.querySelector("#w3").style.visibility = "visible";
          break;
        case 3:
          document.querySelector("#w4").style.visibility = "visible";
      }
    }
  });
});

//remove background and red borders and warning msg while submitting second time
form.addEventListener("change", function (e) {
  inputs.forEach(function (elem) {
    elem.style.borderColor = "#DDD";
    elem.style.background = "none";
    //hide warnin message
    warning.forEach(function (ele) {
      ele.style.visibility = "hidden";
    });
    //put back place holder
    // elem.setAttribute("placeholder", elem.getAttribute("placeholder"));
  });
});
// submitBtn.onclick = function () {
// //   submitBtn.style.color = "lime";
// };
