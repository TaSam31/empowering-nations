import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import this
import { RootStackParamList } from '../types'; // Adjust the import to match your file path

// Define the props type for this screen using NativeStackScreenProps
type AboutUsScreenProps = NativeStackScreenProps<RootStackParamList, 'AboutUsScreen'>;

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoPlaceholder}>[Logo Placeholder]</Text>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        We are a company dedicated to providing high-quality courses. 
        Our mission is to educate and empower individuals to achieve their personal and professional goals.
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  logoPlaceholder: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutUsScreen;
