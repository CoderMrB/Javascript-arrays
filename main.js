const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"]

console.log(favouriteSongs)

const Profit = [1, 2, 4, 8, 16, 32, 64]
console.log(Profit)

const friends = [
    {Name: `Chris`, Skill: `Changing lives`},
    {Name: `Lizzie`, Skill: `Being friendly`},
    {Name: `Ben`, Skill: `Code rapping`},
    {Name: `Tao`, Skill: `Hand raising`},
    {Name: `Liz`, Skill: `Crochet`},
    {Name: `Patrick`, Skill: `Call of Duty`},
    {Name: `Tim`, Skill: `Analogies`},
    {Name: `James`, Skill: `Friendship`},
    {Name: `Joseph`, Skill: `Being positive`},
    {Name: `Max`, Skill: `Paper-mache`},
]
console.log(friends)

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(options[10])
  console.log(options[5])
  console.log(options[11])

  let englishNumbers = ["one", "two", "three", "four", "five"];

let i = 0
console.log(englishNumbers.length)

  while (i<englishNumbers.length){
    console.log(englishNumbers[i]);
    i++;
  }

  for (i = 0; i<englishNumbers.length; i++) {
    console.log(englishNumbers[i]);
  }

  let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

  for(let i=0; i<words.length;i++){
    console.log(words[i] += `t`);
  } 

  /*An array containing arrays.
  Then, at least one array to contain objects.
  */

let music = [
    [`Rock`, `Classical`, `Ska`],
    [{name:`Elvis`, style:`Rock n Roll`}, {name:`MJ`, style:`Pop`}, {name: `Bob Marley`, style: `Reggae`}],
]

console.log(music[0][2])
console.log(music[1][1].name)

let gamesArray = []
let usersAnswer

function top5Games(){
for (let i=0; i<5; i++){
usersAnswer = prompt(`What are your top 5 video games?`);
    //console.log(usersAnswer);
    gamesArray.push(usersAnswer);
    }
    return gamesArray;
}

console.log(top5Games)

/*function top5videogames(){
    for (let i=0; i<5; i++){
usersAnswer = prompt(`What are your top 5 video games?`);
    console.log(usersAnswer);
}
}*/

/*function favouriteVideoGames(){
    usersAnswer = prompt(`What are your favourite video games?`);
    console.log(usersAnswer);
}*/