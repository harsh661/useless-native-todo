import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Task from "./components/Task"
import { useState } from "react"

export default function App() {
  const [task, setTask] = useState()
  const [taskList, setTaskList] = useState([])

  const handleTask = () => {
    setTaskList([...taskList, task])
    setTask("")
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList]
    itemsCopy.splice(index, 1)

    setTaskList(itemsCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.items}>
          {taskList.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          placeholderTextColor="#94969e"
          onChangeText={(task) => setTask(task)}
          value={task}
        />

        <TouchableOpacity
          onPress={() => handleTask()}
          style={styles.addWrapper}
        >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  items: {
    paddingTop: 50,
    gap: 20,
  },
  writeTaskWrapper: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  input: {
    backgroundColor: "#262626",
    width: 250,
    borderRadius: 50,
    paddingHorizontal: 20,
    color: "#fff",
  },
  addWrapper: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#339df0",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    fontSize: 32,
    color: "#fff",
  },
})
