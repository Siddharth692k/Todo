import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  function changeHandler(val) {
    setText(val);
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    // borderRadius: 10,
  },
});
