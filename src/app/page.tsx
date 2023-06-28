'use client'

import { Card } from '@/components/Card/Card'
import { useGetQuestions } from '@/hooks/useGetQuestions'
import { styled } from 'styled-components'

export default function Home() {
  const { questions } = useGetQuestions()
  return (
    <Wrapper>
      <CheckArea>
        <input type="checkbox" name="check" id="" />
        <span>Mostrar apenas questões não respondidas</span>
      </CheckArea>
      <Content>
        {questions.map((quest) => (
          <Card key={quest.id} quest={quest} />
        ))}
      </Content>
    </Wrapper>
  )
}

const { Content, Wrapper, CheckArea } = {
  Content: styled.div`
    width: 100%;
    padding: 40px 0px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 0px;
  `,
  CheckArea: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    span {
      padding-left: 5px;
    }
  `,
}
