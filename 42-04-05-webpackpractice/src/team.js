import { createPlayer } from "./player";
export function createTeam(ns) {
  const team = {};
  for (let key in ns) {
    team[key] = [];
    for (let i = 0; i < ns[key]; i++) {
      team[key].push(createPlayer(key, i));
    }
  }
  return team;
}
