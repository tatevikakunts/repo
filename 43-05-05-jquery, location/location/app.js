const links = document.querySelectorAll("#mainNav a");

for (let link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const toGo = e.target.id;
    location.href = toGo + ".html";
  });
}

const users = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Marya" },
  { id: 3, name: "John Smith" },
];
if (
  location.pathname.split("/").pop() === "index.html" ||
  location.pathname.split("/").pop() === ""
)
  users.forEach((user) => {
    document.querySelector(".users").innerHTML += `
    <li><a href="#" id="user_${user.id}">${user.name}</a></li>
    `;
  });

const usersLinks = document.querySelectorAll(".users a");
for (let link of usersLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const [, userId] = e.target.id.split("_");
    localStorage.setItem("userId", userId);
    location.href = "user.html";
  });
}

if (location.pathname.split("/").pop() === "user.html") {
  console.log(123);
  const userIdx = users.findIndex((user) => user.id === +localStorage.userId);
  if (userIdx === -1) {
    location.href = "index.html";
  }
  document.querySelector("h1").innerText = `Hello, 
    ${users[userIdx].name};`;
}
