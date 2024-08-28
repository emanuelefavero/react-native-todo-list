// * IMPORTS
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native'

// * TYPES
interface Props {
  text: string
  id: string
  deleteTask: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

// -< COMPONENT >-------------------------------------------------
export default function Task({ text, id, deleteTask, onEdit }: Props) {
  const [isDeleteButtonPressed, setIsDeleteButtonPressed] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedText, setEditedText] = useState(text)

  // * HANDLERS
  const handleDeleteButtonPress = () => {
    deleteTask(id)
    setIsDeleteButtonPressed(true)
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)

    if (isEditMode) {
      // If exiting edit mode, update the task text
      onEdit(id, editedText)
    }
  }

  // styles.deleteButtonContainer

  // * RENDER
  return (
    <View style={styles.container}>
      {/* DELETE BUTTON */}
      <Pressable
        style={({ pressed }) => [
          styles.deleteButtonContainer,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={handleDeleteButtonPress}
      >
        <View
          style={[
            styles.deleteButton,
            isDeleteButtonPressed && styles.deleteButtonPressed,
          ]}
        >
          {/* Delete Button Shadow */}
          {isDeleteButtonPressed && <View style={styles.insetShadow} />}
        </View>
      </Pressable>

      {/* EDIT FIELD OR TASK TEXT */}
      {isEditMode ? (
        // Edit mode
        <TextInput
          style={styles.editTextInput}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus={true}
          onBlur={toggleEditMode} // Exit edit mode when the input loses focus
        />
      ) : (
        // Task text
        <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
          <Text
            style={[
              styles.text,
              isDeleteButtonPressed && {
                textDecorationLine: 'line-through',
                color: '#94a3b8',
              },
            ]}
          >
            {text}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

// -< STYLES >---------------------------------------------------
const styles = StyleSheet.create({
  // * CONTAINER
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingRight: 10,
    flexWrap: 'wrap',
  },

  // * DELETE BUTTON
  deleteButtonContainer: {
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    justifyContent: 'center', // Center the inner view for the shadow effect
    alignItems: 'center', // Center the inner view for the shadow effect
  },

  deleteButtonPressed: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },

  // TIP: This is a common trick to create a shadow effect with a border in React Native
  insetShadow: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
  },

  // * EDIT BUTTON
  editButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E1',
    paddingVertical: 10,
    flex: 1,
  },

  editTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E1',
    paddingVertical: 10,
    flex: 1,
    fontSize: 16,
    color: '#475569',
  },

  text: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '600',
  },
})
