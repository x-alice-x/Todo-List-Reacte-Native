import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
  const [isSwitch, setIsSwitch] = useState(false)
  const [list, setList] = useState([
    {
      name: 'Показать Кириллу, что начала делать тестовое приложение',
      color: '#5855FA'
    },
    {
      name: 'Показать Кириллу, что оно запущено на моем телефоне',
      color: '#FFA982'
    },
    {
      name: 'Do the homework',
      color: '#66CB9F'
    }
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.listContainer}>
        {
          list.map((item, index) => {
            return <Task task={item} key={index} />
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 80
  },
  listContainer: {
    paddingHorizontal: 12,
    width: '100%'
  }
});
