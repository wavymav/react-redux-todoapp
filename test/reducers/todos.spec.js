import expect from 'expect'
import * as reducers from '../../src/app/reducers'
import * as actions from '../../src/app/actions'
import * as types from '../../src/app/constants'

describe('reducers', () => {
  describe('todos', () => {
    it('should return the initial state of an empty []', () => {
      const initialState = undefined
      const action = {}
      const nextState = []

      expect(reducers.todos(initialState, action)).toEqual(nextState)
    })

    it('should handle initial ADD_TODO action', () => {
      const initialState = undefined
      const text = 'Run the tests'
      let nextTodoId = 0
      const action  = {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
      }
      const nextState = [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]

      expect(reducers.todos(initialState, action)).toEqual(nextState)
    })

    it('should handle following ADD_TODO actions', () => {
      const initialState = [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]
      const text = 'Run the tests'
      let nextTodoId = 1
      const action  = {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
      }
      const nextState = [
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        },
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]

      expect(reducers.todos(initialState, action)).toEqual(nextState)
    })

    it('should handle TOGGLE_TODO action', () => {
      const initialState = [
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        },
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]
      const text = 'Run the tests'
      let nextTodoId = 1
      const action  = {
        type: types.TOGGLE_TODO,
        id: nextTodoId
      }
      const nextState = [
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        },
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ]

      expect(reducers.todos(initialState, action)).toEqual(nextState)
    })
  })

  describe('visibilityFilter', () => {
    it('should return the initial state of "SHOW_ALL"', () => {
      const initialState = undefined
      const action = {}
      const nextState = 'SHOW_ALL'

      expect(reducers.visibilityFilter(initialState, action)).toEqual(nextState)
    })

    it('should handle initial SET_VISIBILITY_FILTER action to "SHOW_ACTIVE"', () => {
      const initialState = undefined
      const filter = 'SHOW_ACTIVE'
      const action  = {
        type: types.SET_VISIBILITY_FILTER,
        filter
      }
      const nextState = 'SHOW_ACTIVE'

      expect(reducers.visibilityFilter(initialState, action)).toEqual(nextState)
    })

    it('should handle SET_VISIBILITY_FILTER action from "SHOW_ACTIVE" to "SHOW_COMPLETED"', () => {
      const initialState = 'SHOW_ACTIVE'
      const filter = 'SHOW_COMPLETED'
      const action  = {
        type: types.SET_VISIBILITY_FILTER,
        filter
      }
      const nextState = 'SHOW_COMPLETED'

      expect(reducers.visibilityFilter(initialState, action)).toEqual(nextState)
    })
  })
})
