import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.22,
    date: new Date('2021-1-22')
  },
  {
    id: 'e3',
    description: 'Some Bananas',
    amount: 59.99,
    date: new Date('2021-12-01')
  },
  {
    id: 'e4',
    description: 'Some Books',
    amount: 80.0,
    date: new Date('2021-12-01')
  },
  {
    id: 'e5',
    description: 'iPhone',
    amount: 1000,
    date: new Date('2021-12-31')
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 89.22,
    date: new Date('2021-1-22')
  },
  {
    id: 'e8',
    description: 'Some Bananas',
    amount: 59.99,
    date: new Date('2021-12-01')
  },
  {
    id: 'e9',
    description: 'Some Books',
    amount: 80.0,
    date: new Date('2021-12-01')
  },
  {
    id: 'e10',
    description: 'iPhone',
    amount: 1000,
    date: new Date('2021-12-31')
  }
]

function ExpensesOutput ({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}
export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  },
  summary: {}
})
