import View from "./ttt-view";
import Game from "../ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {

  const game = new Game();
  const containerEle = document.getElementById("container");
  const view = new View(game, containerEle);


});