/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generatexcuse();
  });
};
let generatexcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoi = 0;
  let actioni = 0;
  let whati = 0;
  let wheni = 0;

  whoi = Math.floor(Math.random() * who.length);
  actioni = Math.floor(Math.random() * action.length);
  whati = Math.floor(Math.random() * who.length);
  wheni = Math.floor(Math.random() * who.length);

  return (
    who[whoi] + " " + action[actioni] + " " + what[whati] + " " + when[wheni]
  );
};
