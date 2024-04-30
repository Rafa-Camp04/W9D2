import Board from "../ttt_node/board";

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
  }
  
  setupBoard() {
    const x = document.createElement('ul');
    this.el.appendChild(x)

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gridCell = document.createElement('li');
        x.appendChild(gridCell)
      }
    }
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;