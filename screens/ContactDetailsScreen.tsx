import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import MapView, { Marker } from 'react-native-maps';

type ContactDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactDetailsScreen'>;

const ContactDetailsScreen: React.FC<ContactDetailsScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const validateInputs = () => {
    if (!name) {
      Alert.alert('Error', 'Please enter your name');
      return false;
    }
    if (!phone) {
      Alert.alert('Error', 'Please enter your phone number');
      return false;
    }
    if (!/^[0-9]{10}$/.test(phone) || !phone.startsWith('0')) {
      Alert.alert('Error', 'Please enter a valid 10-digit South African phone number starting with 0');
      return false;
    }
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      Alert.alert('Success', 'Details submitted');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../_images/LOGO Empowering nations.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Contact Us</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Your Name" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Phone Number" 
        keyboardType="phone-pad" 
        value={phone} 
        onChangeText={setPhone} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email Address" 
        keyboardType="email-address" 
        value={email} 
        onChangeText={setEmail} 
      />

      <Text style={styles.sectionTitle}>Company Contact Details</Text>
      <Text>Phone: +27 (064) 380-0258</Text>
      <Text>Email: empoweringnation@gmail.com</Text>
      <Text>Address: 34 Goulins, Johannesburg, South Africa</Text>  {/* Updated single location address */}

      <Text style={styles.sectionTitle}>Our Locations</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.2041,  // Central Johannesburg coordinates
          longitude: 28.0473,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {/* Location 1 */}
        <Marker coordinate={{ latitude: -26.2041, longitude: 28.0473 }} title="Business Location 1" description="Johannesburg, Central" />
        
        {/* Location 2 */}
        <Marker coordinate={{ latitude: -26.2055, longitude: 28.0500 }} title="Business Location 2" description="Johannesburg, Newtown" />

        {/* Location 3 */}
        <Marker coordinate={{ latitude: -26.2065, longitude: 28.0540 }} title="Business Location 3" description="Johannesburg, Braamfontein" />
      </MapView>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        <View style={styles.buttonSpacing} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
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
    borderRadius: 75,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 250,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonSpacing: {
    height: 10,
  },
});

export default ContactDetailsScreen;

