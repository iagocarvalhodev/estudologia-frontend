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

export interface QuestProps {
  id: number
  title: string
  body: string
  response: string
}

export interface ResponseProps {
  quests: QuestProps[]
}
