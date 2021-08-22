//CLICK
const clickMeHandler = () => {
  alert("Click me!");
};
const btn = document.querySelector("#clickMeId");
// btn.onclick = clickMeHandler;

// btn.addEventListener("click", clickMeHandler);

// btn.addEventListener("click", function () { //callback
//   console.log("Hello World");
// });

btn.addEventListener("click", () => {
  //callback
  console.log("Hello World");
});

//MOUSEOVER & MOUSEOUT

const elem = document.querySelector(".red-green");
elem.addEventListener("mouseover", () => {
  elem.classList.remove("red");
  elem.classList.add("green");
  elem.innerText = "Green Text";
});
elem.addEventListener("mouseout", () => {
  elem.classList.remove("green");
  elem.classList.add("red");
  elem.innerText = "Red Text";
});

const resultBlock = document.querySelector("#result");
const listItems = document.querySelectorAll("#any-list li");

for (item of listItems) {
  item.addEventListener("click", (event) => {
    console.log(event.type);
    resultBlock.innerText = event.target.innerText;
  });
}
