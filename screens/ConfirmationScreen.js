import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ConfirmationScreen({ route, navigation }) {
  const { name, age, course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Course: {course}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 }
});