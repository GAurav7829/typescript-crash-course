let sportsOne: string[] = ["GOlf", "Cricket", "Tennis"];

// for (let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }

// simplified for loop
for (let sport of sportsOne) {
  if (sport == "Cricket") console.log(`My Favorite Sport ${sport}`);
  else console.log(sport);
}
