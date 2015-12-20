import expect from 'expect'
import * as actions from '../../src/app/actions'
import * as types from '../../src/app/constants'

describe('actions', () => {
  describe('ADD_TODO', () => {
    it('should create an action to add a todo', () => {
      const text = 'Finish docs'
      let nextTodoId = 0
      const expectedAction = {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
      }

      expect(actions.addTodo(text)).toEqual(expectedAction)
    })
  })

  describe('SET_VISIBILITY_FILTER', () => {
    it('should create an action to set todo list filter', () => {
      const filter = 'SHOW_ALL'
      const expectedAction = {
        type: types.SET_VISIBILITY_FILTER,
        filter
      }

      expect(actions.setVisibiltyFilter(filter)).toEqual(expectedAction)
    })
  })

  describe('TOGGLE_TODO', () => {
    it('should create an action to toggle todo list item as completed', () => {
      const id = 0
      const expectedAction = {
        type: types.TOGGLE_TODO,
        id
      }

      expect(actions.toggleTodo(id)).toEqual(expectedAction)
    })
  })
})
