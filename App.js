import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import Task from './components/Task'
import Footer from './components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Tasks</Text>

      {/* Tasks */}
      {/* TODO [AFTER BUSINESS LOGIC IS DONE]: try the app with so many tasks so it is filled up until the bottom. Check the behavior of the footer and this tasks ScrollView container */}

      <ScrollView style={{ marginBottom: 76 }}>
        <Task text='This is task 1' />
        <Task text='This is a long long long long long long long long task' />
        <Task text='This is task 3' />
        <Task text='This is task 4' />
        <Task text='This is task 5' />
        <Task text='This is task 6' />
        <Task text='This is task 7' />
        <Task text='This is task 8' />
        <Task text='This is task 9' />
        <Task text='This is task 10' />
        <Task text='This is task 11' />
        <Task text='This is task 12' />
        <Task text='This is task 13' />
        <Task text='This is task 14' />
        <Task text='This is task 15' />
        <Task text='This is task 16' />
        <Task text='This is task 17' />
        <Task text='This is task 18' />
      </ScrollView>

      {/* Footer */}
      <Footer />

      <StatusBar style='auto' />
    </View>
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
