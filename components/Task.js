import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#262626",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 5,
    opacity: 0.5
  },
  itemText: {
    color: "#fff",
    fontSize: 18
  },
  circle: {},
})
