class State {
  constructor() {
    this.progress = 0
    this.chapters = require("./chapters")
  }

  getQuestion() {
    return this.chapters[this.progress].question
  }

  getAnswers() {
    return this.chapters[this.progress].answers
  }

  getAnswer(i) {
    return this.getAnswers()[i]
  }

  getResponse(val) {
    return this.chapters[this.progress].response(val)
  }

  incrementProgress() {
    ++this.progress
  }

  getProgress() {
    return this.progress
  }

  getLength() {
    return this.chapters.length
  }
}
module.exports = new State()
