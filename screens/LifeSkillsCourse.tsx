import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the props type for this screen using NativeStackScreenProps
type LifeSkillsProps = NativeStackScreenProps<RootStackParamList, 'LifeSkillsCourse'>;

const LifeSkillsCourse: React.FC<LifeSkillsProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Life Skills Course</Text>
      <Text style={styles.description}>
        Build essential life skills including financial literacy, communication, and problem-solving techniques.
      </Text>
      <View style={styles.imagePlaceholder}>
      <Image source={ require( '../_images/life skills2.jpg' )} style={styles.courseImg}/>
      </View>

      <Text style={styles.content}>
        {"\n"}• Opening a bank account
        {"\n"}• Basic labour law (know your rights)
        {"\n"}• Basic reading and writing literacy
        {"\n"}• Basic numeric literacy
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => { 
        alert('Fees Calculation Coming Soon!'); 
        navigation.navigate('TotalFeesScreen'); // Navigate to TotalFeesScreen
      }}>
        <Text style={styles.buttonText}>Calculate Fees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactDetailsScreen')}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
      {/* Enroll Now Button */}
      <View style={styles.buttonSpacer}>
            <Button title="Enroll Now" onPress={() => navigation.navigate('EnrollScreen')} color="#4CAF50" />
            </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, 
    padding: 16, 
    backgroundColor: '#f0f4f8' },
    header: { fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#333' },
    description: { fontSize: 16, 
    marginBottom: 20, 
    color: '#666' },
    imagePlaceholder: { backgroundColor: '#ddd',
    height: 200, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20 },
    placeholderText: { color: '#aaa' },
    button: { backgroundColor: '#007BFF',
    padding: 16, 
    borderRadius: 8, 
    marginVertical: 10, 
    alignItems: 'center' },
    buttonText: { color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' },
    courseImg: {
      height: 200,
      width: 300,
    justifyContent: 'center',
    },
    buttonSpacer: {
      marginVertical: 20,
  },
    content: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
  });

export default LifeSkillsCourse;
