'use client'
import api from '@/config/api'
import { Questions } from '@/types'
import { useEffect, useState } from 'react'

export const useGetQuestions = (id?: number) => {
  const [questions, setQuestions] = useState<Questions[]>([])
  const [question, setQuestion] = useState<Questions | undefined>(undefined)

  useEffect(() => {
    api.get('estudologia').then((res) => {
      if (res.data) {
        setQuestions(res.data)
        if (id) {
          const bookQuestion = res.data.find(
            (q: Questions) => q.id === Number(id)
          )
          setQuestion(bookQuestion)
        }
      }
    })
  }, [id])

  return { questions, question }
}
