import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust the import path to match your setup


type ContactDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactDetailsScreen'>;

const ContactDetailsScreen: React.FC<ContactDetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <View style={{ alignItems: 'center' }}>
      <Image source={ require( '../_images/LOGO Empowering nations.png' )} style={styles.logo} />
      </View>
      <Text style={styles.title}>Contact Us</Text>

      <TextInput style={styles.input} placeholder="Your Name" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
      
      <Text style={styles.sectionTitle}>Company Contact Details</Text>
      <Text>Phone: +1 (555) 123-4567</Text>
      <Text>Email: info@company.com</Text>
      <Text>Address: 1234 Street Name, City, Country</Text>

      <Button title="Submit" onPress={() => alert('Details submitted')} />
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
  logoContainer: {
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
  logo: { 
    width: 150, 
    height: 150, 
    marginBottom: 200,
    borderRadius: 75,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default ContactDetailsScreen;
