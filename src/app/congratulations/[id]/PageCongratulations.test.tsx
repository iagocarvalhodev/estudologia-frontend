import { render } from '@testing-library/react'
import Congratulations from './page'
import '@testing-library/jest-dom/extend-expect'

describe('Congratulations', () => {
  test('renders component with quests', () => {
    const mockParams = { id: 1 }
    const mockQuests = {
      id: 1,
      quests: [
        { id: 1, title: 'Quest 1', response: 'Response 1' },
        { id: 2, title: 'Quest 2', response: 'Response 2' },
      ],
    }

    const localStorageMock = (() => {
      let store: Record<string, string> = {}

      return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value.toString()
        }),
        removeItem: jest.fn((key: string) => {
          delete store[key]
        }),
        clear: jest.fn(() => {
          store = {}
        }),
        key: jest.fn((index: number) => {
          const keys = Object.keys(store)
          return keys[index] || null
        }),
        length: Object.keys(store).length,
      }
    })()

    global.localStorage = localStorageMock

    localStorage.setItem('@Quests-1', JSON.stringify(mockQuests))

    const { getByText } = render(<Congratulations params={mockParams} />)

    expect(getByText('Obrigado por enviar !')).toBeInTheDocument()
    expect(getByText('Quest 1')).toBeInTheDocument()
    expect(getByText('Response 1')).toBeInTheDocument()
    expect(getByText('Quest 2')).toBeInTheDocument()
    expect(getByText('Response 2')).toBeInTheDocument()
  })
})
