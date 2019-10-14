import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  round: number;
  roundLimit: number;
  hide: boolean;
  xScore: number = 0;
  oScore: number = 0;

  constructor() { 
    
  }

  HiddenStyles: {};
  setHiddenStyles() {
    this.hide = true;
    // this.HiddenStyles = {
    //   'style.visibility': this.hide ? 'visible' : 'hidden'
    // };
  }

  ngOnInit() {
    this.round = 0;
    this.roundLimit = null;
    this.setHiddenStyles();
    document.getElementById('finish').style.visibility = 'hidden';
    // document.getElementById('currentPlayer').style.visibility = 'hidden';
    // document.getElementById('currentRound').style.visibility = 'hidden';
  }

  // setting up game
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true
    this.round++;
  }

  // setting the player to O or X
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // when user clicks on button to make a move
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      //check the index of the array that is clicked
      //if square already clicked do nothing 
      //if null splice index of square of current player
      this.squares.splice(idx, 1, this.player);
      //toggle xisnext to opposite value
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if (this.winner == 'X'){
      this.xScore++
    }
    else if(this.winner == 'O'){
      this.oScore++
    }
    console.log(this.xScore);
    console.log(this.oScore);
  }

  //determining if user has won the game
  calculateWinner() {
    const lines = [
      //horizontal wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //vertical wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal wins
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null
  }

  setRounds() {
    console.log(this.roundLimit)
    //this.roundLimit = parseInt((<HTMLInputElement>document.getElementById('currentPlayer')).value);
    this.newGame();
    this.hide = false;
    // document.getElementById('currentRound').style.visibility = 'visible';
    // document.getElementById('inputVal').style.visibility = 'hidden';
    // document.getElementById('btnSet').style.visibility = 'hidden';
  }

  roundCheck() {
    if (this.round > this.roundLimit) {
      document.getElementById('finish').style.visibility = 'visible';
    }
  }
}
