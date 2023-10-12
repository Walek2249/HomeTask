const diceResult = Math.floor(Math.random() * 6) + 1;
const diceResult2 = Math.floor(Math.random() * 6) + 1;
const diceResult3 = Math.floor(Math.random() * 6) + 1;
const diceResult4 = Math.floor(Math.random() * 6) + 1;
const diceResult5 = Math.floor(Math.random() * 6) + 1;
const diceResult6 = Math.floor(Math.random() * 6) + 1;
function diceSpin(result){
        if (result === 1) {
            console.log(" .......")
            console.log("|       |")
            console.log("|   o   |")
            console.log("|       |")
            console.log(" ''''''' ")
        }
        else if (result === 2) {
            console.log(" .......")
            console.log("|       |")
            console.log("| o   o |")
            console.log("|       |")
            console.log(" ''''''' ")
        }
        else if (result === 3) {
            console.log(" .......")
            console.log("|       |")
            console.log("| o o o |")
            console.log("|       |")
            console.log(" ''''''' ")
        }
        else if (result === 4) {
            console.log(" .......")
            console.log("| o   o |")
            console.log("|       |")
            console.log("| o   o |")
            console.log(" ''''''' ")
        }
        else if (result === 5) {
            console.log(" .......")
            console.log("| o   o |")
            console.log("|   o   |")
            console.log("| o   o |")
            console.log(" ''''''' ")
        }
        else {
            console.log(" .......")
            console.log("| o o o |")
            console.log("| o o o |")
            console.log("| o o o |")
            console.log(" ''''''' ")
        }
}
console.log("Player 1")
diceSpin(diceResult);
console.log("Player 2")
diceSpin(diceResult2);
console.log("Player 1")
diceSpin(diceResult3);
console.log("Player 2")
diceSpin(diceResult4);
console.log("Player 1")
diceSpin(diceResult5);
console.log("Player 2")
diceSpin(diceResult6);
console.log("Player 1: "+(diceResult+diceResult3+diceResult5)+ "     Player 2: "+(diceResult2+diceResult4+diceResult6))

if (diceResult+diceResult3+diceResult5 > diceResult2+diceResult4+diceResult6){
    console.log("Player 1 wins!")
}
else if (diceResult+diceResult3+diceResult5 < diceResult2+diceResult4+diceResult6){
    console.log("Player 2 wins!")
}
else {
    console.log("Draw!")
}