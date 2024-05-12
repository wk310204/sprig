
/* 
@title: maze_game_starter
@author: Cheru Berhanu
@tags: []
@img: ""
@addedOn: 2023-08-08
*/


//game controls player  is w,a,s,d 
//game controls wolf is i,j,k,l
 


const chest = "c";
const rock = "r";
const player = "p";
const web = "w";
const wolf="f";

const lock="l";
const key="k";
const backDrop="d";
setLegend(
[chest, bitmap`
................
................
................
................
................
.000000000000000
.0CCCCCCCCCCCCC0
.0CCCCCCCCCCCCC0
.066666666666660
.066666666666660
.066666666666660
.000000000000000
.0CCCCC060CCCCCC
.0CCCCC000CCCCCC
.0CCCCCCCCCCCCCC
.000000000000000`],
[ wolf,bitmap`
................
................
...L......L.....
..L8L....L8L....
.L28L...L28L....
.L88LLLLL88L....
.L102111021L....
.L100111001L....
.L111200111L..LL
.L111222111L.LLL
.LLLLLLLLLLLLLL.
.L11L111L11LLL..
.L11L111L11L....
LL11L111L11LL...
L0L0L222LL0L0...
................`],
[ player, bitmap`
....4C444C......
....4C444C44....
....4CCCCC44F...
....66666666....
....66666666....
....6CCCCCC6....
....6C72C726....
....6C77C776....
....600CC006....
....6CC333C66...
...66CCCCCC66...
......440C0.....
......C44C4.....
......CCCCC.....
......44C44.....
......04CC4.....`],
   
[ rock, bitmap`
000LLLLLLLL00000
0LLLLLLLLLLLLL00
0LLLL111111LLL00
0LL11111111LLL00
0LLL11111111LLL0
0LL111111111LLL0
0LL1111111111LL0
0LL1111111111LL0
0LL1111111111LL0
0LL1111111111LL0
0LL1111111111LL0
0LL1111111111LL0
0LL1111111111LLL
LLL1111111111LLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
[ web, bitmap`
L00000000000000L
L0LLLL000000LL00
L0LL000L0LL00LL0
L0L000LL0LL000L0
00L0L0000000L0L0
0LL0LL00000LL000
0L00LL03030LLL00
0L000L00000L0000
0L0LLL00000LLL00
0L00L00L0L000L00
0LL000L000LL0000
0LL00L0LLL0LL000
000L000000000LL0
LL00LLLLLLLLLL00
LLLL00000000LL00
LLLLLLLLLLLL000L`],
 
[lock,bitmap`
0000000000000000
000000LLLLL00000
00000LL111LL0000
0000LL10011L0000
0000L10000000000
0000666666666600
00006L6666666L00
0000666611666600
0000666661666600
0000666661666600
0000666666666600
00006L666666L600
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
[key,bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111116661
1111666666666L66
1111666666666LL6
1111616111116L66
1111616111116661
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
[backDrop,bitmap`
0000000000300000
0000000000000000
0000300030000000
0000000000000000
0003000000000000
0000000030000000
0000000000000000
0000000000000300
0030000000000000
0000000000000000
0000000000000000
0300000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
 );

setBackground(backDrop);




setSolids([player,rock,web,wolf,lock]);

let level = 0
const levels = [

 map`
...................w
....................
....................
....................
....................
....................
....................
....................
........p..c........
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
f........l.........k`,
 map`
p...........r
.......r....r
.rrr...r....r
....r..r...lc
.......r....r
rrrrrrrr....r
.......rrrrrr
f....w.rr....
......krr....
.........w...`,
 map`
.......p.w.........rr
.........w.........lc
.........w.......rr.r
..........rrr....r.rr
rrr.......rkrrrr.r..r
...rrrrr..r.....rr..r
.......rrrrr.........
...........rrrrr.....
f....................`,
 map`
k.r....rrrc
.w....r..rl
r.....rw...
......r....
......r...w
......rrr..
f.......rrp`,
 map`
..r..kwwwwww.f
r.rr.w........
p.rrrrrrrrrrrr
r..rr.........
..............
.rr.r..r..r.r.
w..w.wr.wr.wrw
............r.
............lc`,
 map`
p..w.r...........lcr....rrk
.rrrr.....rrrr..rrrr....r..
.r.....rrr....w.r.....rr...
.r....rr..ww...rr...rrr..w.
.rrr..r.....rrrr..rrr......
...rrrrww..rr..rrrr...w.w..
.........rr...rr....w.....w
.rrrrrrrrr....r..f.........`,
 map`
prr......r.lcr......rrf
ww.......r..rr.....rr..
ww......rrw.r.....w....
ww..rrrrr..rrr...r.....
ww.rr.....rr..r.rr.....
ww...ww..rr..rrr...rwwr
wwww...rrr...r..rrr...r
.....rrr....rrrrr...wwr
..........rrr..ww.ww..r
........rrw....ww....rr
........rk.......rrrrr.`,
 map`
p................r...........lc
........www......r.ww.......w.r
........wwww....rr.w..w.ww..w.r
.r.......w.ww...rr.w.....ww.w..
rrr......w..ww..r..ww......www.
..r......w...w..r...wwwwwwww.w.
.r...........w...rr.....ww..ww.
.r...rrrr....ww...rr.......ww..
.r..rr...r....w......w.........
.rrrr....r..........rrrrrrr....
.r......rr.........r.r....krrr.
.......r.....rr...rrrr.......r.
.......r......rrrrr.r........r.
.www....r....rrrrrrr.........rr
.w.ww...rrrrrr................r
.w..w.........r...........r...r
.ww..w....rrrr.rrrr.......rrr.r
..ww.w..............rrrrrrrrrrr
.....w........................r
..............................f`,
 map`
f..r........r......r..lc
....r...w...r......r.rrr
rr...r....rrr......r....
.rr.w.ww.wrrrrr....r....
........w....krr...r..ww
.........rrrrrrr...r..ww
.........r..........r.ww
rrrrrr..rr............ww
.....rrrr...............
......rrrrrrrrrrrrrr....
...ww.r..............ww.
...www..............wwww
p.....rrrrrrrrrrrr......`,
 map`
f...rrrrrrrr.....r
.www.............r
.wwwwwwwwwwwwwrrrr
..................
rrrrrrrrrrrrrrrrrk
p.w...wwww.......r
..w..r....ww.rwr.r
..w..rrrrr.....r.r
..www....r.....r.r
...............rlc`,
 map`
ww..........r.c.l...wwww......
.www........rrrr..ww..w..w....
...ww.............w.wwwww.rrrr
.....www.....wwwwwwwww...rf.rr
p.......wwwww....www.ww..r....
rrr..............w....w..rwwww
..rrrrrrrrrrrrr......ww..rwwww
........w..ww..r...wwww..rwwww
...www.wwww...wrr...ww..rr....
k.ww...w.w....w.rrr....rr..ww.
..w....w.w....w...rrrrrrww...w
.w.......ww.....ww.....w.w...w
.w...w....www....www...w.w...w
w....www.....ww....wwwww.w...w
........ww..ww.........w.w..w.`,
 map`
.......rf......w...r......................r.................rk
.......r......ww...r.................rr....rrr.r.rr...........
.....w.r........w..rr............w....rr..rrr......rrr........
.......r....ww....ww.rrrr..ww...ww...w.rr...rr........rrrr....
..w....r...ww.rr....w...wrrrwrrrwrrr.w...r....rrr........rrr..
.w..wwwwr...w..r....wrw......w.www..wwrr..rr....rr.........r..
........r...w...rr..w........w.www..w.r....r.....r............
........r.ww......rrr.rrr.....ww....w.r....r.....rr.......www.
........rr...........rrrrrrrrrr.....w.r....r......r.......www.
.........rrrrr........rrrrrrr.rrrrrrw.r...........r........ww.
.............rrrrrrrrrr........rr..w.rr..........rr...........
..................................rr.rrrrrrr..................
.....rrr.....rrrrr.................r........rrrrrrrrrrrrrrrrrr
rrrrr..rrrrrrrr...rrrr...rrrrr......r.........................
.......rr.......rr....rr......rrr...r.........................
........r........rr....r........rr..r.............w...........
.........r.......rr....r.........rr..r...........ww...w.w.....
.........r.......r......r.........r..r.......w.w..ww....w.....
.........r.......r......rr........rrlr......w..ww....w..ww....
.......wrr.......r.......r.........rcr....ww...w.www...w.w....
.......wrr.......r.......r.........rrr........w....w..........
.................rr......rr.........r......w.ww.....w..w......
.......w..........r.......r..............wwwwww.w...w.........
.......w................w..w........ww.www.ww.w..w..w..w..w...
........w.......................w.ww.wwwww..w.www.w.w.........
.......ww................w......wwwwwww..w.w...w.www.w....w...
......w.w.........................wwwww..wwww.....www.........
..................................www.w.....w.w.ww........w..p`,
 map`
p.....w.............r
......w...ww........r
....rrrr..ww...www..r
rrrr...rrrwwwwww....r
r......w..rr...wwwwlc
.wwwww.ww..rrrrrr.w.r
.w..wwwww.......r.w..
.w.w.wwwww.r.rr.r.w..
.wwww.wwww....rrr.wrr
..wwwwwwwwrrrkrr..rrr
..........rrrrrrrrr..
....................f`,
 map`
f...rr......r..rk
.w...rrr..rrr.wr.
....ww.rr.rrrrw..
rr..ww.........rr
rrr......rrr...rr
p..rrrrrrrrrrrrrr
.w...w...........
.....w..r........
rrrrr.rrrr...rrrr
....r...w.rrrrw.r
...............lc`,
 map`
f........r...................
......rr.r..rr.r......rrrrr.r
rrrrrrr..rkrr..rrrrrrrr....r.
.........rrr.................
......r..rrrrr.rr.....rr.....
......r...r.rr.r.r.....rr....
.................r...........
rrrrrrrrrrrr.................
.w.w.w......rrrrrrrrrrrrrrrrr
.r..www.r....................
wr..w.w.r..rrrrrrr.rrrrrrrrr.
.r..w..wr..r.....rr...r......
.r...www.r.r.................
...rwww..r.rr....rrrrr.......
p..rrrrrrr.rcl.......rrr.....`,
 map`
f...............
.rrrrrrr........
.r....r.rr......
.r.rr....r......
.r.r.rrr.rr.....
...r...r..r.....
rrr....r..rrr...
rrrr..r..r..rrrr
...rrr.r......rr
......rr.rrrrrrr
....rrrr........
rr....kr........
cr.rrrrr.w......
lr.....r.w......
..r.............
..rrr.....rrrrrr
..r.rrrrrrr.....
..r..ww.....w...
r.r..w..www.w...
............w...
...............p`,
 map`
fdwddddddddddddrdd
ddwdwddddddddddrdd
ddwdwdddwwdddddrdd
dddwwdrrrwwwwwwrwd
ddddddddrrrddddrdd
rrrrrrrdddrrrrrrdd
ddddrcrdddkrrddddd
ddwwwlrrrrrrdddddd
ddwwwdddddddddwwdd
dddddwwwwdddddwwdd
dddddddddddddddddp`,
 map`
ddddddddddddddrlddd
dddddddwddddddrcrrd
drrrrdddrdddddrrdrd
drddrrrdrddrrrrdddd
drddddddrddrdddddrd
rrdwddddrdrdddrrrrr
dddddddrrdrddrddrrr
ddddrrrrkdrdddddddd
ddddrprrrrdwwwwwwwd
fdddrdddddddddddddd`,
 map`
dddddddddddddrddddwdwddddddddddddddddd
ddddddddrrrddrdddwddw.dddddddwwwwwddpd
ddddddrrdrdddrdddwwwwddd....w....w...d
ddddrrrdrdddrddddd.dddrrr...w....w...d
drrrdfdrddrdrddrdrrddrr.rr..ww...w...d
rdddddrddrddrrddd.rddrdd.rr..wwwww..rd
dddddrrdrddrrdddddrddrdww.r........rrd
ddddrdddrdrdrdddddrdrr.d..rrr.....rr.d
dddrdddrddrdrdwwddddrddd....rrrrrr...d
ddrrdddrddddrdwwdrdddddd..r......r...d
drddddrrddrdrdwwdrdddddrrrr......r...d
drddddrdddrdrdwwdrdwwddrr.......rr...d
drrddkrdddrdrddwdddwwwdrcl..rrrrr....d
ddrrrrdddddrrrdddddwwwdrrrrr.........d
ddrddrdddrddrrrddddwwdd.............dd
dddddrddddddrddddddddddd............dd
dddddrddddddrddddddddddd............dd
ddddddddddddrddddddddddddddddddddddddd
ddddddddddddrddddddddddddddddddddddddd`
];





setMap( levels[level]);

setPushables({
[ player ]: [web],
[web]:[web],
[wolf]: [web]
});

onInput("s", () => {
getFirst(player).y += 1
  const step = tune`
184.04907975460122,
61.34969325153374: C5~61.34969325153374,
61.34969325153374,
61.34969325153374: F5~61.34969325153374,
122.69938650306749,
61.34969325153374: F4~61.34969325153374,
61.34969325153374,
61.34969325153374: C5~61.34969325153374,
61.34969325153374: G5~61.34969325153374,
1226.993865030675`;
playTune(step);
;});

onInput("d", () => {
getFirst(player).x += 1;});

onInput("w",()=>{
getFirst(player).y-=1;
 
});

onInput("a",()=>{
getFirst(player).x-=1;});



const currentLevel=levels[level];

if(currentLevel !== undefined){
clearText("");
setMap(currentLevel)
;}

afterInput(() => {

const targetNumber = tilesWith(chest).length;
const numberCovered = tilesWith(chest, player).length;

if (numberCovered === targetNumber) {
 clearText();
level = level + 1;
const currentLevel = levels[level];
if (currentLevel !== undefined) {
setMap(currentLevel);}
else {
addText("YOU WIN!!!!!!", { y: 4, color: color`3` });

}
}
});
    
onInput("i",() => {
getFirst(wolf).y -= 1;
});


onInput("j",() => {
getFirst(wolf).x -= 1;
});
onInput("k",()=>{
getFirst(wolf).y+=1;
});

onInput("l",()=>{
getFirst(wolf).x+=1;
});

afterInput(()=>{
const goalsCovered = tilesWith(player,chest).concat(tilesWith(wolf,chest));
if(goalsCovered.length>=2);{
}
})




afterInput(()=>{
const goals=tilesWith(wolf,chest).concat(tilesWith(player,chest));
const keysTaken=tilesWith(wolf,key);
if(goals.length>=1){
level = level+1;
const currentLevel=levels[level];


if(currentLevel !== undefined){
setMap(currentLevel);}
else{
addText("YOU WIN!!!!!!", { y: 4, color: color`H` });
const winner = tune`
89.28571428571429: A5-89.28571428571429 + E5~89.28571428571429,
357.14285714285717,
89.28571428571429: G5^89.28571428571429 + D5~89.28571428571429,
178.57142857142858,
89.28571428571429: A5/89.28571428571429 + E5~89.28571428571429,
178.57142857142858,
89.28571428571429: F5^89.28571428571429,
178.57142857142858,
89.28571428571429: D5-89.28571428571429 + B4^89.28571428571429,
178.57142857142858,
89.28571428571429: A4/89.28571428571429 + B4-89.28571428571429,
1250`;
playTune(winner);
}

}
if(keysTaken.length>=1){
getFirst(lock).remove();
getFirst(key).remove();}

});
        

afterInput(()=>{
const goals=tilesWith(player,chest);
const keysTaken=tilesWith(player,key);
if(goals.length>=1){
level = level+1;
const currentLevel=levels[level];


if(currentLevel !== undefined){
setMap(currentLevel);}
else{

}

}
if(keysTaken.length>=1){
getFirst(lock).remove();
getFirst(key).remove();}
});


if(level == 0) {

addText("help your wolf ", {
  x:1,
  y:1,
  color:color`4`})
addText("get the key ",{
  x:1,
  y:3,
color:color`4`
})

  addText("push any spiderwebs",{
    x:1,
    y:4,
    color:color`4`})

addText("get the explorer",{
  x:1,
  y:7,
  color:color`4`})


  addText("to the chest",{
    x:1,
    y:8,
    color:color`4`})

addText("w=fwd s=bwd",{
  x:1,
  y:9,
  color:color`4`})

  addText("a=left d=right",{
    x:1,
    y:10,
    color:color`4`})
  
addText("playerTwo i=fwd",{
  x:1,
  y:11,
  color:color`4`})

  addText("k=bwd l=rght j=left",{
          x:1,
          y:12,
    color:color`4`})


}
