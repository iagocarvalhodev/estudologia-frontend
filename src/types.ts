interface Answers {
  title: string
  body: string
}

export interface Questions {
  id: number
  title: string
  questionAmount: number
  answered: boolean
  answers: Answers[]
}
