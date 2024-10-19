import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Import your types

type ErrorHandlingScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'ErrorHandlingScreen'
>;

type Props = {
  navigation: ErrorHandlingScreenNavigationProp;
};

const ErrorHandlingScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Error occurred. Please try again.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ErrorHandlingScreen;
