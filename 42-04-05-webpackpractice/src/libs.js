const rowHeader = (title) => {
  const tr = document.createElement("tr");
  const td = document.createElement("th");
  td.setAttribute("colspan", 3);
  td.innerText = title;
  tr.appendChild(td);
  return tr;
};
export { rowHeader };
