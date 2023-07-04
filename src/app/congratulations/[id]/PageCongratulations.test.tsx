import { render } from '@testing-library/react'
import Congratulations from './page'
import '@testing-library/jest-dom/extend-expect'

describe('Congratulations', () => {
  let localStorageMock: Record<string, string> = {}

  beforeAll(() => {
    // Simular métodos do localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key) => localStorageMock[key] || null),
        setItem: jest.fn((key, value) => {
          localStorageMock[key] = value.toString()
        }),
        removeItem: jest.fn((key) => {
          delete localStorageMock[key]
        }),
        clear: jest.fn(() => {
          localStorageMock = {}
        }),
        length: 0,
        key: jest.fn(),
      },
      writable: true,
    })
  })

  beforeEach(() => {
    localStorageMock = {}
  })

  test('renders component with quests', () => {
    const mockParams = { id: 1 }
    const mockQuests = {
      id: 1,
      quests: [
        { id: 1, title: 'Quest 1', response: 'Response 1' },
        { id: 2, title: 'Quest 2', response: 'Response 2' },
      ],
    }

    localStorage.setItem('@Quests-1', JSON.stringify(mockQuests))

    const { getByText } = render(<Congratulations params={mockParams} />)

    expect(getByText('Obrigado por enviar !')).toBeInTheDocument()
    expect(getByText('Quest 1')).toBeInTheDocument()
    expect(getByText('Response 1')).toBeInTheDocument()
    expect(getByText('Quest 2')).toBeInTheDocument()
    expect(getByText('Response 2')).toBeInTheDocument()
  })
})
