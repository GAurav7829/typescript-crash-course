var sportsOne = ["GOlf", "Cricket", "Tennis"];
// for (let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }
// simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "Cricket")
        console.log("My Favorite Sport ".concat(sport));
    else
        console.log(sport);
}
