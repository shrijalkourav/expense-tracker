import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ManageExpenses from './screens/ManageExpenses'
import RecentExpenses from './screens/RecentExpenses'
import AllExpenses from './screens/AllExpenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GlobalStyles } from './constants/styles'
import { Ionicons } from '@react-native-vector-icons/ionicons'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpenseOverview () {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='hourglass' size={size} color={color} />
          }
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
