// let timeoutId;

// document.querySelector("#one").addEventListener("click", () => {
//   const sect = document.querySelector("section");
//   let text = "Clicked";
//   sect.innerText = text;
//   sect.classList.remove("hide");

//   timeoutId = setTimeout(() => {
//     sect.classList.add("hide");
//   }, 3000); //3000 = 3sec
// });
// document.querySelector("#two").addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   clearInterval(intervalId);
//   document.querySelector(".timer").innerText = "End from button";
// });

// let timer = 0;
// let intervalId = setInterval(() => {
//   document.querySelector(".timer").innerText = timer++;
//   if (timer === 15) {
//     clearInterval(intervalId);
//     document.querySelector(".timer").innerText = "End";
//   }
// }, 1000);


