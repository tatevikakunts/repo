import { createTeam } from "./team";
import { rowHeader } from "./libs";
import { rowPlayer } from "./player";

let club = {};

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
const renderClub = () => {
  document.querySelector("#club-form").classList.add("hide");
  const app = document.querySelector("#app");

  const h1 = document.createElement("h2");
  h1.innerText = `Football Club: ${club.clubName}`;
  const h2_1 = document.createElement("h3");
  h2_1.innerText = `Year of Establishment: ${club.year}`;
  const h2_2 = document.createElement("h3");
  h2_2.innerText = `City: ${club.city}`;

  app.appendChild(h1);
  app.appendChild(h2_1);
  app.appendChild(h2_2);

  const table = document.createElement("table");

  const places = {
    gk: "Goalkeepers",
    df: "Defenders",
    mf: "Midfielders",
    fw: "Forwards",
  };

  for (let key in places) {
    table.appendChild(rowHeader(places[key]));
    club.team[key].forEach((player) => {
      table.appendChild(rowPlayer(player));
    });
  }

  app.appendChild(table);
};
const prepareCreate = (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll("#form input");
  const prepValue = {};
  for (let element of inputs) {
    prepValue[element.id] = element.value;
  }

  club = createClub(prepValue.clubName, prepValue.year, prepValue.city, {
    gk: prepValue.gk,
    df: prepValue.df,
    mf: prepValue.mf,
    fw: prepValue.fw,
  });

  for (let element of inputs) {
    element.value = "";
  }
  renderClub();
};

export { prepareCreate };
