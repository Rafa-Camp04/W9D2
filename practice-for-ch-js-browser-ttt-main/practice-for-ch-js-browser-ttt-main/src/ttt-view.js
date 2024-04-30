import Board from "../ttt_node/board";

class View {
  constructor(game, containerEle) {
    this.game = game;
    this.containerEle = containerEle;
    this.setupBoard();
  }
  
  setupBoard() {
    const grid = document.createElement('ul');
    this.containerEle.appendChild(grid);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gridCell = document.createElement('li');
        gridCell.dataset.row = i;
        gridCell.dataset.col = j;
        grid.appendChild(gridCell);
        gridCell.addEventListener("click", this.handleClick.bind(this));
      }
    }
  }
  
  handleClick(e) {
    this.makeMove(e.target);
  }

  makeMove(square) {
    const row = square.dataset.row;
    const col = square.dataset.col;

    this.game.playMove([row, col]);

    const currentPlayer = this.game.currentPlayer;
    this.containerEle.querySelector();
  }
  
  handleGameOver() {
  }
}

export default View;