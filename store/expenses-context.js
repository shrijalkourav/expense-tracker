import { createContext, useReducer } from 'react'

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {}
})

function expensesReducer (state, action) {
  switch (action.type) {
    case 'ADD':
      // FIX: Added () to toString()
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id: id }, ...state]

    case 'UPDATE':
      // FIX: Removed curly braces for a clean implicit return
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id
      )
      const updatableExpense = state[updatableExpenseIndex]
      const updateItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updateItem
      return updatedExpenses

    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload)
    default:
      return state
  }
}

function ExpensesContextProvider ({ children }) {
  // FIX: Passed [] as the initial state
  const [expensesState, dispatch] = useReducer(expensesReducer, [])

  function addExpense (expenseData) {
    dispatch({ type: 'ADD', payload: expenseData })
  }
  function deleteExpense (id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function updateExpense (id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
