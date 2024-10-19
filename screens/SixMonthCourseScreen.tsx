import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the props type for this screen using NativeStackScreenProps
type SixMonthCoursesProps = NativeStackScreenProps<RootStackParamList, 'Six Month Courses'>;

const SixMonthCourses: React.FC<SixMonthCoursesProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Six-Month Courses</Text>
      <Text style={styles.description}>
        Explore our comprehensive six-month courses designed to provide in-depth knowledge and skills.
      </Text>

      {/* Course Buttons with Summaries */}
      <View style={styles.courseContainer}>
        <Text style={styles.courseSummary}>First Aid Course: Learn essential first aid techniques.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('FirstAidCourse')}>
          <Text style={styles.buttonText}>First Aid</Text>
        </TouchableOpacity>

        <Text style={styles.courseSummary}>Sewing Course: Master the art of sewing and design.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('SewingCourse')}>
          <Text style={styles.buttonText}>Sewing</Text>
        </TouchableOpacity>

        <Text style={styles.courseSummary}>Landscaping Course: Create beautiful outdoor spaces.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('LandscapingCourse')}>
          <Text style={styles.buttonText}>Landscaping</Text>
        </TouchableOpacity>

        {/* New Life Skills Course */}
        <Text style={styles.courseSummary}>Life Skills Course: Develop essential life skills for success.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('LifeSkillsCourse')}>
          <Text style={styles.buttonText}>Life Skills</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Buttons */}
      <TouchableOpacity style={styles.calculateButton} onPress={() => { 
        alert('Fees Calculation Coming Soon!'); 
        navigation.navigate('TotalFeesScreen');
      }}>
        <Text style={styles.calculateButtonText}>Calculate Fees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calculateButton} onPress={() => navigation.navigate('ContactDetailsScreen')}>
        <Text style={styles.calculateButtonText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calculateButton} onPress={() => navigation.goBack()}>
        <Text style={styles.calculateButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#f0f4f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  description: { fontSize: 16, marginBottom: 20, color: '#666' },
  courseContainer: { marginBottom: 20 },
  courseSummary: { fontSize: 14, marginBottom: 5, color: '#555' },
  courseButton: { 
    backgroundColor: '#28A745', 
    padding: 12, 
    borderRadius: 5, 
    marginVertical: 10, 
    alignItems: 'center' 
  },
  buttonText: { color: '#fff', fontSize: 16 },
  calculateButton: { 
    backgroundColor: '#007BFF', 
    padding: 10, 
    borderRadius: 5, 
    marginVertical: 5, 
    alignItems: 'center' 
  },
  calculateButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default SixMonthCourses;
