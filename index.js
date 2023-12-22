/*function showAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "050313a3f76481c83c1td60bf280ofe6";
let context = "be polite, andd provide a very short answer";
let prompt = "When was the first AI created";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiUrl).then(showAnswer);

/*
function handleClick() {
  let heading = document.querySelector("h1");
  heading.classList = "highlight";
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
*/

/*function handleClick() {
  let heading = document.querySelector("h1");
  heading.classList.add("hidden");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick); */

let heading = document.querySelector("h1");

new Typewriter("h1", {
  strings: "Hello World, Welcome to SheCodes!!",
  autoStart: true,
  cursor: "",
  delay: 10,
});

