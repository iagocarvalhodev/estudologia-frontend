'use client'
import { styled } from 'styled-components'
import Image from 'next/image'

export const Header = () => {
  return (
    <HeaderContent>
      <Image src="/logo.svg" width={107} height={20} alt="Estudologia" />
    </HeaderContent>
  )
}

const { HeaderContent } = {
  HeaderContent: styled.div`
    width: 100%;
    border-bottom: 1px solid #00000032;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
  `,
}
