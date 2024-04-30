import View from "./ttt-view";
import Game from "../ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {

  const game = new Game();
  const gridEle = document.getElementById("grid");
  const view = new View(game, gridEle);


});