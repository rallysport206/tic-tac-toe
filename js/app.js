var box = document.getElementsByClassName('tile');
var turn = 0;
var playerX = "X";
var playerO = "O";
var restart = document.getElementById('reset');
var winOutput = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

// var tileSelect = function(){
//   turn ++;
//   if(count % 2 === 1){
//     this.id = 'tileX';
//     document.getElementById('playerChange').textContent = "Player O is Up";
//     this.removeEventListener('click', tileSelect);
//   }else{
//     this.id = 'tileO';
//     document.getElementById('playerChange').textContent= "Player X is Up";
//   }
// }


// box clicked
var board = function () {
    for (var i=0; i<box.length; i++){
    box[i].addEventListener('click', function(){
      turn ++;
      if(turn % 2 === 1){
        this.className = 'tileX';
        document.getElementById('playerChange').textContent = "Player O is Up";
        this.removeEventListener('click', tileSelect);
      }else{
        this.className = 'tileO';
        document.getElementById('playerChange').textContent= "Player X is Up";
  }});
}
}
board();

// function player() {
//   document.getElementsByClassName(this.id);
//   if (turn % 2 ===0 ){
//     document.textContent('X');
//     turn = 2;
//     document.textContent('O');
//     turn = 2;
//   }
// };

restart.addEventListener('click', function(){
  console.log('restart click')
});

// document.addEventListener('DOMContentLoaded', function () {
//   addBoxEventListener();
// });
