import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task({ text, id, deleteTask }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.deleteButtonContainer}
        onPress={() => {
          deleteTask(id)
        }}
      >
        <View style={styles.deleteButton}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingRight: 10,
    flexWrap: 'wrap',
  },

  deleteButtonContainer: {
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'start',
    paddingVertical: 10,
  },

  deleteButton: {
    width: 22,
    height: 22,
    position: 'relative',
    top: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#94a3b8',
    marginRight: 10,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  editButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E1',
    paddingVertical: 10,
    flex: 1,
  },

  text: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '600',
  },
})
