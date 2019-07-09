const brain = require("brain.js");

const network = new brain.NeuralNetwork();

/*network.train([
  { input: [0, 0, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 1, 1], output: [0] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 1], output: [1] }
]); */

//If output is 0 player 1 won if output is 1 player 2 won
//We have 4 players

network.train([
  { input: [1, 2], output: [1] }, //Player 2 wins
  { input: [3, 4], output: [0] }, //Player 3 wins
  { input: [2, 3], output: [1] }, //Player 3 wins
  { input: [4, 1], output: [0] }, //Player 4 wins
  { input: [3, 1], output: [1] }, //Player 1 wins
  { input: [4, 1], output: [0] }, //Player 1 wins
  { input: [2, 1], output: [0] } //Player 2 wins
]);
//We want to know probaility
const output = network.run([4, 2]);

console.log(`Prob: ${output}`);
