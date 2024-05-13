import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach: Coach = new CricketCoach();
let myGolfCoach: Coach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for(let tmp of coaches){
    console.log(tmp.getDailyWorkout());
}