const player = "p";
const goal = "g";
const wall = "w";
let pX = 0;
let pY = 0;
let bool = true;

setLegend(
  [ player, bitmap`
................
................
................
.......0........
.....00.000.....
....0.....00....
....0.0.0..0....
....0......0....
....0......0....
....00....0.....
......00000.....
......0...0.....
....000...000...
................
................
................`],
  [ goal, bitmap`
................
................
................
....444444......
...44....44.....
...4......4.....
...4.......4....
...4.......4....
...4.......4....
...44......4....
....4......4....
....44....44....
.....444444.....
................
................
................`],
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
);

let level = changeMap();
bool = false;

setMap(level);

function changeMap(){
  let playerLoc = 0;
  if(!bool){
    playerLoc = getFirst(player).x + getFirst(player).y * 10;
  }
  let width = 10;
  let height = 10;
  let final = "";
  for(let i = 0; i < width*height; i++){
    let num = Math.floor(Math.random() * 5);
    if(i === playerLoc){
      final += "p";
    }
    else if(i === 99){
      final += "g";
    }
    else{
      if(num === 0){
        final += ".";
      }
      else{
        final += "w";
      }

      if(i%10 === 9 ){
        final += "\n";
      }
    }
  }

  console.log(final)
  return map`${final}`;
}




setSolids([ player, wall ]);

onInput("w", () => {
  getFirst(player).y -= 1;
  let level = changeMap();
  setMap(level);
});

onInput("a", () => {
  getFirst(player).x -= 1;
  let level = changeMap();
  setMap(level);
});

onInput("s", () => {
  getFirst(player).y += 1;
  let level = changeMap();
  setMap(level);
});

onInput("d", () => {
  getFirst(player).x += 1;
  let level = changeMap();
  setMap(level);
});

onInput("j", () => {
  setMap(level);
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(goal).length;
  
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(goal, player).length;

  if (numberCovered === targetNumber) {
      addText("you win!", { y: 4 });
  }
});