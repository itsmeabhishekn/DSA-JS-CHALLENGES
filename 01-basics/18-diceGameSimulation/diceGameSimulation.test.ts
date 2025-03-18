import diceGameSimulation from "./diceGameSimulation";

test("Dice Game Simulation", () => {
  const numSimulations = 5;
  const simulationResults = diceGameSimulation(numSimulations);

  simulationResults.forEach((result: any) => {
    console.log(`Simulation Result: ${result.finalResult}`);
    result.rolls.forEach((roll: any) => {
      console.log(
        `  Dice 1: ${roll.dice1}, Dice 2: ${roll.dice2}, Sum: ${roll.sum}, Result: ${roll.result}`
      );
    });
  });
});
