/* eslint-disable prefer-const */
'use client'

import { useGetQuestions } from '@/hooks/useGetQuestions'
import { SetStateAction, useState } from 'react'
import { styled } from 'styled-components'

interface QuestProps {
  id: number
  title: string
  body: string
  response: string
}

export default function Quest({ params }: { params: { id: number } }) {
  const { question } = useGetQuestions(params.id)
  const [numberQuests, setNumberQuests] = useState<number>(0)
  const [responseQuest, setResponseQuest] = useState<string>('')
  const [responseQuests, setResponseQuests] = useState<QuestProps[]>([])

  const handleResponseQuest = async () => {
    if (question) {
      const item: QuestProps = {
        id: numberQuests + 1,
        title: question.answers[numberQuests].title,
        body: question.answers[numberQuests].body,
        response: responseQuest,
      }

      await setResponseQuests([...responseQuests, item])
      setNumberQuests(numberQuests + 1)
      console.log('res', responseQuests, numberQuests)
    }
  }

  const handleSendResponse = async () => {
    if (responseQuest && question) {
      let arrayQuests = responseQuests
      await arrayQuests.push({
        id: numberQuests + 1,
        title: question.answers[numberQuests].title,
        body: question.answers[numberQuests].body,
        response: responseQuest,
      })
      await localStorage.setItem(
        `@Quests-${question.id}`,
        JSON.stringify({
          id: question?.id,
          quests: arrayQuests,
        })
      )
    }
  }

  return (
    <Content>
      <h1>{question?.answers[numberQuests].title}</h1>
      <span>{question?.answers[numberQuests].body}</span>
      <TextArea
        placeholder="Responda aqui"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setResponseQuest(e.target.value)
        }
      />
      <Button
        onClick={handleSendResponse}
        className={
          ((question?.questionAmount && question?.questionAmount - 1) || 0) <
          numberQuests
            ? 'disabled'
            : ''
        }
      >
        Enviar Respostas
      </Button>
      <ActionsContent>
        <Button>Pergunta Anterior</Button>
        <Button
          onClick={handleResponseQuest}
          className={
            ((question?.questionAmount && question?.questionAmount - 1) ||
              0) === numberQuests
              ? 'disabled'
              : ''
          }
        >
          Próxima pergunta
        </Button>
      </ActionsContent>
    </Content>
  )
}

const { Content, TextArea, ActionsContent, Button } = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 0px;

    h1 {
      font-size: 12px;
      font-weight: 400;
      text-align: justify;
    }

    span {
      font-size: 12px;
      font-weight: 700;
      text-align: justify;
    }
  `,
  TextArea: styled.textarea`
    width: 100%;
    max-width: 680px;
    height: 123px;
    border-radius: 5px;
    background-color: #d9d9d9;
    color: #000;
    font-weight: 400;
    font-size: 14px;
    padding: 10px;
    border: none;
  `,
  ActionsContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #000;
    padding-top: 20px;
  `,
  Button: styled.button`
    width: 178px;
    height: 35px;
    border: none;
    background-color: #219653;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    &.disabled {
      opacity: 0.5;
      cursor: no-drop;
    }
    &:hover {
      opacity: 0.9;
    }
  `,
}
