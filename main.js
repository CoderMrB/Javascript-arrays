// const favouriteSongs = ["Tiny Dancer", "Running up that Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"]

// const pennyDoublingScheme = [1, 2, 4, 8, 16, 32, 64]

// const friends = [
//   {Name: "Chris", SpecialSkill: "Changing Lives"},
//   {Name: "Lizzie", SpecialSkill: "Being friendly"},
//   {Name: "Ben", SpecialSkill: "Code rapping"},
//   {Name: "Tao", SpecialSkill: "Hand raising"},
//   {Name: "Liz", SpecialSkill: "Crochet"},
//   {Name: "Patrick", SpecialSkill: "Call of Duty"},
//   {Name: "Tim", SpecialSkill: "Analogies"},
//   {Name: "James", SpecialSkill: "Friendship"},
//   {Name: "Joseph", SpecialSkill: "Being positive"},
//   {Name: "Max", SpecialSkill: "Papier-mache"},
// ]

// let options = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ]

// console.log(options[10])
// console.log(options[5])

// let englishNumbers = ["one", "two", "three", "four", "five"]

// for (i = 0;i<englishNumbers.length;i++){
//   console.log(englishNumbers[i]);
// }

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

// for (i=0;i<words.length; i++){
//   words[i] = (`${words[i]}t`)
//   console.log(words[i])
// }

// function addT(name){
//   alert(`${name}t`)
//   return;
// }

// for(i=0;i<words.length; i++){
//   addT(words[i])
// }

let i = 0

function randomName(){
  i = Math.floor(Math.random()*words.length)
  alert(`Your randomly chosen name is ${words[i]}`);
}

randomName()