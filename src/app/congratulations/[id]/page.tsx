'use client'

import { ResponseProps } from '@/types'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

export default function Congratulations({
  params,
}: {
  params: { id: number }
}) {
  const [quests, setQuests] = useState<ResponseProps>({} as ResponseProps)

  useEffect(() => {
    if (params.id) {
      const quests = JSON.parse(
        localStorage.getItem(`@Quests-${params.id}`) || ''
      )
      setQuests(quests)
    }
  }, [params.id])
  return (
    <Content>
      <h1>Obrigado por enviar !</h1>
      {quests.quests &&
        quests.quests.map((q) => (
          <ContentQuest key={q.id}>
            <h3>{q.title}</h3>
            <span>Resposta:</span>
            <span>{q.response}</span>
          </ContentQuest>
        ))}
    </Content>
  )
}

const { Content, ContentQuest } = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 0px;
  `,
  ContentQuest: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 1px solid #000;
    h3 {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 40px;
    }
    span {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 30px;
    }
  `,
}
