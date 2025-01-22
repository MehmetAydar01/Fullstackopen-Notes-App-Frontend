import { render, screen } from '@testing-library/react'
import Note from './Note'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'

test('renders content', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true,
  }

  const mockHandler = vi.fn()
  const user = userEvent.setup()

  render(<Note note={note} toggleImportance={mockHandler} />)

  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('renders content 2', async () => {
  const note = {
    content: 'Does not work anymore :(',
    important: true,
  }

  render(<Note note={note} />)

  const element = screen.getByText('Does not work anymore :(', { exact: false })

  expect(element).toBeDefined()
})

test('does not render this', () => {
  const note = {
    content: 'This is a reminder',
    important: true,
  }

  render(<Note note={note} />)

  const element = screen.queryByText('do not want this thing to be rendered')

  expect(element).toBeNull()
})
