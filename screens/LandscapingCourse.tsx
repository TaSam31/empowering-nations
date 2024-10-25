import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


// Define the props type for this screen using NativeStackScreenProps
type LandscapingCourseProps = NativeStackScreenProps<RootStackParamList, 'LandscapingCourse'>;

const LandscapingCourse: React.FC<LandscapingCourseProps> = ({ navigation }) => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Landscaping Course</Text>
        <Text style={styles.description}>
          A comprehensive course on landscape design, planning, and management techniques.
        </Text>
        <View style={styles.imagePlaceholder}>
        <Image source={ require( '../_images/Landcaping image.jpg' )} style={styles.courseImg}/>
        </View>

        <Text style={styles.content}>
  Content:
  {"\n"}• Indigenous and exotic plants and trees
  {"\n"}• Fixed structures (fountains, statues, benches, tables, built-in braai)
  {"\n"}• Balancing of plants and trees in a garden
  {"\n"}• Aesthetics of plant shapes and colors
  {"\n"}• Garden layout
</Text>


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
      content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
      },
    });
  
  export default LandscapingCourse;
  