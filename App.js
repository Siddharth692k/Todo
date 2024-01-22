import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import SandBox from "./components/SandBox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "grab a sandwich", key: "1" },
    { text: "get some fresh air", key: "2" },
    { text: "read a book", key: "3" },
    { text: "take a break", key: "4" },
    { text: "try a new recipe", key: "5" },
  ]);

  function deleteHandler(key) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
    // 1). Ex. When the todo.key that is no 5 is clicked, the no 5 is compared to all the key in the array of objects
    // 2). (todo.key !== key) if this condition is true 5 is compared to 1,2,3,4 => returns true.
    // 3). when is finally comes to (5 !== 5) it returns false since (5==5). therefore 5 is removed from the array and new array is returned with [1,2,3,4]
  }

  function submitHandler(text) {
    if (text.length < 4) {
      Alert.alert("OOPS !", "Todos must be over 3 characters long", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
      return;
    }
    // alert("Todo text must be atleast more than 3 characters");
    setTodos((prevTodos) => [
      { text: text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
