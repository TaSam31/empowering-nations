import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the props type for this screen using NativeStackScreenProps
type SixWeekCoursesProps = NativeStackScreenProps<RootStackParamList, 'Six Week Courses'>;

const SixWeekCourses: React.FC<SixWeekCoursesProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Six-Week Courses</Text>
      <Text style={styles.description}>
        Discover our engaging six-week courses that equip you with essential skills in a short time.
      </Text>


      <View style={styles.courseContainer}>
        <Text style={styles.courseSummary}>Garden Maintenance: Learn how to maintain beautiful gardens.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('GardenMaintenanceCourse')}>
          <Text style={styles.buttonText}>Garden Maintenance</Text>
        </TouchableOpacity>

        <Text style={styles.courseSummary}>Childminding: Gain skills for taking care of children.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('ChildMindingCourse')}>
          <Text style={styles.buttonText}>Child Minding</Text>
        </TouchableOpacity>

        <Text style={styles.courseSummary}>Cooking: Master basic cooking techniques and recipes.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('CookingCourse')}>
          <Text style={styles.buttonText}>Cooking</Text>
        </TouchableOpacity>
      </View>

  
      <View style={{ alignItems: 'center' }}>
      <TouchableOpacity style={styles.NavigationButtons} onPress={() => { 
        alert('Fees Calculation Coming Soon!'); 
        navigation.navigate('TotalFeesScreen');
      }}>
        <Text style={styles.ButtonText}>Calculate Fees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NavigationButtons} onPress={() => navigation.navigate('ContactDetailsScreen')}>
        <Text style={styles.ButtonText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NavigationButtons} onPress={() => navigation.goBack()}>
        <Text style={styles.ButtonText}>Back</Text>
      </TouchableOpacity>
      </View>

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
  NavigationButtons: { 
    backgroundColor: '#007BFF', 
    padding: 10, 
    borderRadius: 15, 
    width: 200,
    marginVertical: 5, 
    alignItems: 'center' 
  },
  ButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default SixWeekCourses;
