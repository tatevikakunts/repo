document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let val1 = +document.querySelector("#inp1").value;
  let val2 = +document.querySelector("#inp2").value;
  let res;
  try {
    res = getResult(val1, val2);
  } catch (e) {
    res = e.message;
  }
  document.querySelector("p span").innerText = res;
});
function getResult(a, b) {
  if (b !== 0) {
    return a / b;
  }
  throw new Error("Division by zero");
}

try {
  hello();
} catch (e) {
  console.log(e.message);
}
