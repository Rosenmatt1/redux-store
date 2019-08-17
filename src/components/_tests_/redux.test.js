import { clearTitle } from '../actions'

it('return an empty string as payload', () => {
  const action = clearTitle()
  console.log(action)
  expect(action).toBe("")
})