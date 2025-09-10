import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function FormScreen({ navigation }) {
  const [studentData, setStudentData] = useState({
    student_id: '',
    full_name: '',
    course: '',
    year_level: '',
    date_registered: '',
  });

  const handleInputChange = (field, value) => {
    setStudentData({ ...studentData, [field]: value });
  };

  const handleSubmit = () => {
    navigation.navigate("Confirmation", { studentData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student ID:</Text>
      <TextInput 
        style={styles.input} 
        value={studentData.student_id} 
        onChangeText={(text) => handleInputChange('student_id', text)} 
      />

      <Text style={styles.label}>Full Name:</Text>
      <TextInput 
        style={styles.input} 
        value={studentData.full_name} 
        onChangeText={(text) => handleInputChange('full_name', text)} 
      />

      <Text style={styles.label}>Course:</Text>
      <TextInput 
        style={styles.input} 
        value={studentData.course} 
        onChangeText={(text) => handleInputChange('course', text)} 
      />

      <Text style={styles.label}>Year Level:</Text>
      <TextInput 
        style={styles.input} 
        value={studentData.year_level} 
        onChangeText={(text) => handleInputChange('year_level', text)} 
      />

      <Text style={styles.label}>Date Registered:</Text>
      <TextInput 
        style={styles.input} 
        value={studentData.date_registered} 
        onChangeText={(text) => handleInputChange('date_registered', text)} 
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, padding: 8, marginTop: 5 }
});