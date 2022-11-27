export default function roll(sides, dice, rolls) {
    const results = [];
    for (let i = 0; i < rolls; i++) {
        var diceNum = 0;
        for (let j = 0; j < dice; j++) {
            diceNum = diceNum + Math.floor(Math.random() * sides) + 1;
        }
        results.push(diceNum);
    } 
    return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": results});
}