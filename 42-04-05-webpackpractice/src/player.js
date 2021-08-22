import { AGE, CONTRACT, NAME } from "./constants";
function createPlayer(pos, number) {
  return {
    fName: `${NAME}_${pos}_${number + 1}`,
    position: pos,
    age: AGE + Math.floor(Math.random() * Math.floor(7)),
    contract: CONTRACT + Math.floor(Math.random() * Math.floor(4)),
  };
}
const rowPlayer = (player) => {
  const tr = document.createElement("tr");
  for (let id of ["fName", "age", "contract"]) {
    const td = document.createElement("td");
    td.innerText = player[id];
    tr.appendChild(td);
  }
  return tr;
};
export { createPlayer, rowPlayer };
