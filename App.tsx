// * IMPORTS
import { StatusBar } from 'expo-status-bar'
import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import uuid from 'react-native-uuid'
import Task from './components/Task'
import Footer from './components/Footer'

// -< COMPONENT >-------------------------------------------------
export default function App() {
  // * STATE
  const [tasks, setTasks] = useState([
    { id: uuid.v4(), text: 'This is task 1' },
    { id: uuid.v4(), text: 'This is task 2' },
    { id: uuid.v4(), text: 'This is task 3' },
  ])

  // * REFS
  const scrollViewRef = useRef<ScrollView>()

  // * HANDLERS
  // Delete task after 500ms
  const deleteTask = (id: string) => {
    setTimeout(() => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id)
      })
    }, 500)
  }

  // Edit task
  const editTask = (id: string, newText: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText }
        }

        return task
      })
    })
  }

  // Add new task
  const addNewTask = () => {
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuid.v4(), text: '' }]
    })

    // Scroll to the bottom
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    }, 100)
  }

  // * RENDER
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Tasks</Text>

        {/* Tasks */}
        <ScrollView ref={scrollViewRef} style={{ marginBottom: 76 }}>
          {tasks.map((task) => (
            <Task
              key={task.id as string}
              text={task.text}
              id={task.id as string}
              deleteTask={deleteTask}
              onEdit={editTask}
            />
          ))}
        </ScrollView>

        {/* Footer */}
        <Footer onAddNewTask={addNewTask} />

        <StatusBar style='auto' />
      </View>
    </KeyboardAvoidingView>
  )
}

// -< STYLES >----------------------------------------------------
const styles = StyleSheet.create({
  // * CONTAINER
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },

  // * TITLE
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
})
