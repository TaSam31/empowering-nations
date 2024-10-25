import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,Image } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ChildMindingCourseProps = NativeStackScreenProps<RootStackParamList, 'ChildMindingCourse'>;

const ChildMindingCourse: React.FC<ChildMindingCourseProps> = ({ navigation }) => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Child Minding Course</Text>
        <Text style={styles.description}>
          Learn the skills to provide safe and effective child care, focusing on child development and well-being.
        </Text>
        <View style={styles.imagePlaceholder}>
        <Image source={ require( '../_images/childminding.png' )} style={styles.courseImg}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => alert('Fees Calculation Coming Soon!')}>
          <Text style={styles.buttonText}>Calculate Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactDetailsScreen')}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
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
    });


  export default ChildMindingCourse;
  