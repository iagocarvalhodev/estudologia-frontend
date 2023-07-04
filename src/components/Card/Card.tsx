'use client'
import { styled } from 'styled-components'
import { Questions } from '@/types'
import { useRouter } from 'next/navigation'

interface CardProps {
  quest: Questions
}

export const Card = ({ quest }: CardProps) => {
  const router = useRouter()

  return (
    <CardContent>
      <h1>{quest.title}</h1>
      <span>{quest.questionAmount} questões</span>
      <span>{quest.answered ? 'Respondido' : 'Não Respondido'}</span>
      <Action>
        <button
          type="button"
          disabled={quest.answered}
          className={quest.answered ? 'disabled' : ''}
          onClick={() => router.push(`/quest/${quest.id}`)}
        >
          Responder
        </button>
      </Action>
    </CardContent>
  )
}

const { CardContent, Action } = {
  CardContent: styled.div`
    width: 100%;
    max-width: 200px;
    height: 150px;
    border: 1px solid #e1e1e1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
    }

    > span:first-of-type {
      margin-bottom: 10px;
    }
  `,
  Action: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    button {
      width: 100%;
      height: 35px;
      border: none;
      border-radius: 5px;
      padding: 10px;
      background-color: #219653;
      color: #fff;
      cursor: pointer;
      &.disabled {
        opacity: 0.5;
        cursor: no-drop;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  `,
}
