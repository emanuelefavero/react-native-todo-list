import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title]}>Hello</Text>
      <StatusBar style='light' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
    paddingLeft: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
})
