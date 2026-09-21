import { useLayoutEffect, useContext } from 'react'
import { View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { GlobalStyles } from '../constants/styles'
import { StyleSheet } from 'react-native'
import Button from '../components/ui/Button'
import { ExpensesContext } from '../store/expenses-context'

function ManageExpenses ({ route, navigation }) {
  const expenseContext = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler () {
    expenseContext.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function cancelHandler () {
    navigation.goBack()
  }

  function confirmHandler () {
    if (isEditing) {
      expenseContext.updateExpense(editedExpenseId, {
        description: 'Test!!!',
        amount: 29.0,
        date: new Date('2022-10-19')
      })
    } else {
      expenseContext.addExpense({
        description: 'Test',
        amount: 19.0,
        date: new Date('2022-05-19')
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}
export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})
