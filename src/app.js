const readline = require("readline")
const state = require("./state/state")
const game = new (require("./gameplay/game"))(state)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on("line", (line) => {
  game.readUserInput(line)
})
