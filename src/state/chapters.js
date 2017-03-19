const chapters = [
  {
    question: `You are going on an adventure.\
             \nYou need a weapon.\
             \nPick from the options:`,
    answers: ["sword", "axe", "hammer"],
    response: (val) => `You picked the ${val}`
  },
  {
    question: `You were attacked by goblins`,
    answers: ["Fight them off","Run from them","Do nothing"],
    response: (val) => `You decided to ${val}`
  },
  {
    question: `You walked into a murky swamp`,
    answers: ["Leave screaming","Explore","Contemplate the meaning of life"],
    response: (val) => `You decided to ${val}`
  },
  {
    question: `You were challenged to a duel by a nobleman`,
    answers: ["Accept the duel","Decline the duel","Kick the nobleman in the shins and take his stuff"],
    response: (val) => `You decided to ${val}`
  }
]
module.exports = chapters
