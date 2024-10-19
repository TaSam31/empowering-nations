import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust the import path to match your setup

// Define the props type for this screen
type ContactDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactDetailsScreen'>;

const ContactDetailsScreen: React.FC<ContactDetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.info}>For more information, please contact us at:</Text>
      <Text>Email: info@yourcompany.com</Text>
      <Text>Phone: +123 456 7890</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ContactDetailsScreen;
