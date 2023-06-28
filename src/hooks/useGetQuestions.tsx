'use client'
import api from '@/config/api'
import { Questions } from '@/types'
import { useEffect, useState } from 'react'

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Questions[]>([])

  useEffect(() => {
    api.get('estudologia').then((res) => {
      if (res.data) {
        setQuestions(res.data)
      }
    })
  }, [])

  return { questions }
}
