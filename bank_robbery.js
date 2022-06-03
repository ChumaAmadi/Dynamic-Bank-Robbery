const demand = "Wheres the safe at!?"; 
const jerry = "Okay!, it's";

// Robber demands the location of the safe
function toTeller() {
    alert(demand);
}

toTeller();

 // An array of responses to the demand
var arr = [1, 2 , 3];
arr[0] = "in the basement!";
arr[1] = "...um, I don't know where it's at!"; 
arr[2] = "Don't shoot! I'll take you to it";

// A random response from the array is generated into a function
function tellerResponse1() {
    if (i >= 3) return;
    var response = arr[Math.floor(Math.random() * arr.length)];
    alert(`$[jerry]+ response`);
}

const truth2 = ("Okay let's go!");
const lie2 = ("Stop playing games! Show me the safe right now!");

// Coin flip to determine a response from the thief
function robberResponse1() {
    let flip = Math.random();
    if (flip < 0.5) {
        alert(truth2);
    } else {
        alert(lie2);
    }
}

robberResponse1();

if (flip < 0.5) {
    alert("Be fast! Let's make this quick and peaceful for everyone...");
}
