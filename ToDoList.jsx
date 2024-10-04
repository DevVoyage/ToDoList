import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  return (
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#EE6F57',
  },
  completed: {
    backgroundColor: '#F6F5F5',
  },
  taskText: {
    fontSize: 16,
    color:'#00334E',
  },
});

export default ToDoList;
