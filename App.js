import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import Task from './components/Task'

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Tasks</Text>

      {/* Tasks */}
      <Task text='This is task 1' />
      <Task text='This is task 2 hasdkhlaksd kjhaslkdjhasd kjhlkajshd kjhadlkjshad' />
      <Task text='This is task 3' />
      <Task text='This is task 4' />
      <Task text='This is task 5' />

      <StatusBar style='auto' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
})
