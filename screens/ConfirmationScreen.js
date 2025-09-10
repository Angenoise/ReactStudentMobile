import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ConfirmationScreen({ route, navigation }) {
  const { studentData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
      <Text>Student ID: {studentData.student_id}</Text>
      <Text>Full Name: {studentData.full_name}</Text>
      <Text>Course: {studentData.course}</Text>
      <Text>Year Level: {studentData.year_level}</Text>
      <Text>Date Registered: {studentData.date_registered}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 }
});