import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MeetTheTeamProps = NativeStackScreenProps<RootStackParamList, 'MeetTheTeam'>;

const MeetTheTeamScreen: React.FC<MeetTheTeamProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Meet the Team</Text>
      <Text style={styles.description}>Our team is passionate about empowering individuals and creating opportunities for growth. Get to know our leaders.</Text>
    
      {/* Team Member 1 */}
      <View style={styles.imagePlaceholder}>
        <Image source={require('../_images/First-Aid-kit.jpg')} style={styles.teamImg} />
        
      </View>
      <Text style={styles.content}>John Doe - CEO</Text>
      <Text style={styles.content}>John has over 10 years of experience in leadership and strategy development, steering the company towards its mission of empowerment.</Text>

      {/* Team Member 2 */}
      <View style={styles.imagePlaceholder}>
        <Image source={require('../_images/First-Aid-kit.jpg')} style={styles.teamImg} />
      </View>
      <Text style={styles.content}>Jane Smith - CTO</Text>
      <Text style={styles.content}>With a background in technology and innovation, Jane leads the technical development of our platform, ensuring it meets the needs of our community.</Text>

      {/* Add more team members as necessary */}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  imagePlaceholder: {
    backgroundColor: '#ddd',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MeetTheTeamScreen;
