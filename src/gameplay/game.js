class Game {
  constructor(state) {
    this.state = state
    this.startChapter()
  }

  startChapter() {
    console.log(this.state.getQuestion())
    this.state.getAnswers().map((item,i) => {
      console.log(`${i} : ${item}`)
    })
  }

  readUserInput(line) {
    const answer = Number(line)
    if (!answer) {
      console.log("Please enter a number")
    } else {

      const ans = this.state.getAnswer(answer)
      console.log( this.state.getResponse(ans) )
      console.log("----------------------------")
      console.log("----------------------------")

      this.state.incrementProgress()

      if (this.state.getProgress() >= this.state.getLength()) {
          console.log("You Win!")
          process.exit()
      }

      this.startChapter()
    }
  }
}

module.exports = Game
