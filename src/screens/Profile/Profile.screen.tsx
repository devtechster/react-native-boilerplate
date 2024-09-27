import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  // State to hold form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);

  // Function to add task
  const addTask = () => {
    if (name && email && task) {
      const newTask = { id: tasks.length + 1, name, email, task };
      setTasks([...tasks, newTask]);
      setName(''); // Reset name input
      setEmail(''); // Reset email input
      setTask(''); // Reset task input
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* Form Section */}
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.form}>
            <Text style={styles.header}>Enter Details</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Task:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your task"
              value={task}
              onChangeText={setTask}
            />

            <Button title="Add Task" onPress={addTask} />
          </View>

          {/* Display the Tasks */}
          <View style={styles.listContainer}>
            <Text style={styles.header}>Tasks List</Text>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskText}>
                    Name: {item.name} | Email: {item.email} | Task: {item.task}
                  </Text>
                </View>
              )}
              ListEmptyComponent={<Text style={styles.emptyMessage}>No tasks added yet</Text>}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  form: {
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    marginTop: 30,
  },
  taskItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});

export default Profile;
