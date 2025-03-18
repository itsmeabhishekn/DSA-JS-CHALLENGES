/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array<{ dice1: number, dice2: number, sum: number, result: string }>} - Array of roll objects.
 */
export default function diceGameSimulation(numSimulations: number): {
  rolls: { dice1: number; dice2: number; sum: number; result: string }[];
  finalResult: string;
}[] {
  let results = [];

  for (let i = 1; i <= numSimulations; i++) {
    const rolls = [];
    let finalResult = "";

    for (let j = 0; j < 1; j++) {
      // If multiple rolls are needed per game, modify this
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const sum = dice1 + dice2;

      const result = sum === 6 ? "roll again" : sum === 11 ? "win" : "lose";

      rolls.push({ dice1, dice2, sum, result });
      finalResult = result;
    }

    results.push({ rolls, finalResult });
  }

  return results;
}
