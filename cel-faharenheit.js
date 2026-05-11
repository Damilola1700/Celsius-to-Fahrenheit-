function toFahrenheit(a) {
  let toFahrenheit = (a * 9) / 5 + 32;
  return toFahrenheit;
}

let form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userInput = form["inputCelcius"].value;
  let paragraph = document.querySelector("#pWords");
  let result = toFahrenheit(userInput);

  if (userInput === "") {
    paragraph.innerHTML = "Input your Number";
  } else if (isNaN(userInput)){
    paragraph.innerHTML = "Input Numbers only!"

  } else if (userInput <=0 ){
    paragraph.innerHTML = "Input a valid number"
  } else {
    let result = toFahrenheit(userInput);
    paragraph.innerHTML = `conversion of ${userInput} celcius to Fahrenheit is ${result}`;
  }
});
