import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#EE6F57"
        />
        <Button title="Add" color="#EE6F57" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EE6F57',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  placeholder:{
    color:'#EE6F57',
  }
});

export default ToDoForm;
