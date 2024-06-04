/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extentions = [".com", ".net", ".us"];

  const domains = [];

  for (const p of pronouns) {
    for (const a of adjectives) {
      for (const n of nouns) {
        for (const e of extentions) {
          const d = p + a + n + e;
          domains.push(d);
        }
      }
    }
  }

  console.log(domains);

  document.querySelector("h6").innerText = domains;
};
