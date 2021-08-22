const AGE = 18;
const CONTRACT = 2022;
const NAME = "Player";
function Club(clubName, year, city) {
  this.clubName = clubName;
  this.year = year;
  this.city = city;
}
let club = {};

function main() {
  document.querySelector("#form").addEventListener("submit", prepareCreate);
}

const prepareCreate = (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll("#form input");
  const prepValue = {};
  for (element of inputs) {
    prepValue[element.id] = element.value;
  }

  const club = new Club(prepValue.clubName, prepValue.year, prepValue.city);

//   club = createClub(prepValue.clubName, prepValue.year, prepValue.city, {
//     gk: prepValue.gk,
//     df: prepValue.df,
//     mf: prepValue.mf,
//     fw: prepValue.fw,
//   });

  for (element of inputs) {
    element.value = "";
  }
  renderClub();
};

function createClub(clubName, year, city, staff) {
  const club = {
    clubName: clubName,
    year: year,
    city: city,
    staff: staff,
    team: createTeam(staff),
  };
  return club;
}

function createTeam(ns) {
  const team = {};
  for (key in ns) {
    team[key] = [];
    for (let i = 0; i < ns[key]; i++) {
      team[key].push(createPlayer(key, i));
    }
  }
  return team;
}

function createPlayer(pos, number) {
  return {
    fName: `${NAME}_${pos}_${number + 1}`,
    position: pos,
    age: AGE + Math.floor(Math.random() * Math.floor(7)),
    contract: CONTRACT + Math.floor(Math.random() * Math.floor(4)),
  };
}

const renderClub = () => {
  document.querySelector("#club-form").classList.add("hide");
  const app = document.querySelector("#app");

  const h1 = document.createElement("h2");
  h1.innerText = `Футбольный клуб: ${club.clubName}`;
  const h2_1 = document.createElement("h3");
  h2_1.innerText = `Год основания: ${club.year}`;
  const h2_2 = document.createElement("h3");
  h2_2.innerText = `Город: ${club.city}`;

  app.appendChild(h1);
  app.appendChild(h2_1);
  app.appendChild(h2_2);

  const table = document.createElement("table");

  const places = {
    gk: "Вратари",
    df: "Защитники",
    mf: "Полузащитники",
    fw: "Нападающие",
  };

  for (key in places) {
    table.appendChild(rowHeader(places[key]));
    club.team[key].forEach((player) => {
      table.appendChild(rowPlayer(player));
    });
  }

  // table.appendChild(rowHeader("Вратари"));
  // club.team.gk.forEach((player) => {
  //   table.appendChild(rowPlayer(player));
  // });

  // table.appendChild(rowHeader("Защитники"));
  // club.team.df.forEach((player) => {
  //   table.appendChild(rowPlayer(player));
  // });

  // table.appendChild(rowHeader("Полузащитники"));
  // club.team.mf.forEach((player) => {
  //   table.appendChild(rowPlayer(player));
  // });

  // table.appendChild(rowHeader("Нападающие"));
  // club.team.fw.forEach((player) => {
  //   table.appendChild(rowPlayer(player));
  // });

  app.appendChild(table);
};

const rowHeader = (title) => {
  const tr = document.createElement("tr");
  const td = document.createElement("th");
  td.setAttribute("colspan", 3);
  td.innerText = title;
  tr.appendChild(td);
  return tr;
};

const rowPlayer = (player) => {
  const tr = document.createElement("tr");

  for (id of ["fName", "age", "contract"]) {
    const td = document.createElement("td");
    td.innerText = player[id];
    tr.appendChild(td);
  }

  // const td1 = document.createElement("td");
  // const td2 = document.createElement("td");
  // const td3 = document.createElement("td");
  // td1.innerText = player.fName;
  // td2.innerText = player.age;
  // td3.innerText = player.contract;
  // tr.appendChild(td1);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  return tr;
};

main();
