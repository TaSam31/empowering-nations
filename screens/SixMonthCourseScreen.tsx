import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SixMonthCoursesProps = NativeStackScreenProps<RootStackParamList, 'Six Month Courses'>;

const SixMonthCourses: React.FC<SixMonthCoursesProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Six-Month Courses</Text>
      <Text style={styles.description}>
        Explore our comprehensive six-month courses designed to provide in-depth knowledge and skills.
      </Text>

      <View style={styles.courseContainer}>
      <View style={{ alignItems: 'center' }}>
      <Image source={ require( '../_images/first-aid.jpg.jpg' )} style={styles.courseImg} />
        <Text style={styles.courseSummary}>First Aid Course: Learn essential first aid techniques.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('FirstAidCourse')}>
          <Text style={styles.ButtonText}>First Aid</Text>
        </TouchableOpacity>
        <Image source={ require( '../_images/sewing pic.jpg' )} style={styles.courseImg}/>
        <Text style={styles.courseSummary}>Sewing Course: Master the art of sewing and design.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('SewingCourse')}>
          <Text style={styles.ButtonText}>Sewing</Text>
        </TouchableOpacity>
        <Image source={ require( '../_images/Landcaping image.jpg' )} style={styles.courseImg}/>
        <Text style={styles.courseSummary}>Landscaping Course: Create beautiful outdoor spaces.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('LandscapingCourse')}>
          <Text style={styles.ButtonText}>Landscaping</Text>
        </TouchableOpacity>
        <Image source={ require( '../_images/life skills2.jpg' )} style={styles.courseImg}/>
        <Text style={styles.courseSummary}>Life Skills Course: Develop essential life skills for success.</Text>
        <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('LifeSkillsCourse')}>
          <Text style={styles.ButtonText}>Life Skills</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 10, 
    marginVertical: 10, 
    alignItems: 'center',
    width: 300,
  },
  courseImg: {
height: 50,
width: 50,
borderRadius: 10,
  },
 NavigationButtons: { 
    backgroundColor: '#007BFF', 
    padding: 10, 
    width: 200,
    borderRadius: 15, 
    marginVertical: 5, 
    alignItems: 'center', 
    
  },
  ButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default SixMonthCourses;
