import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SixWeekCourseScreenProps = NativeStackScreenProps<RootStackParamList, 'Six Week Courses'>;
const Courses: React.FC<SixWeekCourseScreenProps> = ({ navigation }) => {
  const sixWeekCourses = [
    { name: 'Landscaping', page: 'LandscapingCourse' },
    { name: 'Garden Maintenance', page: 'GardenMaintenanceCourse' },
    { name: 'Life Skills', page: 'LifeSkillsCourse' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Six-Week Courses</Text>
      {sixWeekCourses.map((course, index) => (
        <TouchableOpacity key={index} style={styles.courseButton} onPress={() => navigation.navigate('Six Week Courses')}>
          <Text style={styles.courseText}>{course.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#f0f4f8', justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  courseButton: { backgroundColor: '#28A745', padding: 16, borderRadius: 8, marginVertical: 10, width: '100%', alignItems: 'center' },
  courseText: { color: '#fff', fontSize: 16 },
  button: { backgroundColor: '#007BFF', padding: 16, borderRadius: 8, marginTop: 20, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default Courses;
