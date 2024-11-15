import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type EnrollScreenProps = NativeStackScreenProps<RootStackParamList, 'EnrollScreen'>;

const EnrollScreen: React.FC<EnrollScreenProps> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

    const courses = [
        { id: 1, name: 'First Aid' },
        { id: 2, name: 'Sewing' },
        { id: 3, name: 'Landscaping' },
        { id: 4, name: 'Life Skills' },
        { id: 5, name: 'Child Minding' },
        { id: 6, name: 'Cooking' },
        { id: 7, name: 'Garden Maintenance' },
    ];

    const handleSubmit = () => {
        if (!name) {
            Alert.alert('Error', 'Please enter your full name.');
            return;
        }
        if (!email) {
            Alert.alert('Error', 'Please enter your email address.');
            return;
        }
        // Simple email regex validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        if (!phone) {
            Alert.alert('Error', 'Please enter your phone number.');
            return;
        }
        // Simple phone number validation (adjust based on your requirements)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
            return;
        }

        if (selectedCourse === null) {
            Alert.alert('Error', 'Please select a course.');
            return;
        }

        Alert.alert(
            'Enrollment Successful',
            `Thank you, ${name}! You have successfully enrolled in ${courses.find(course => course.id === selectedCourse)?.name}.`
        );
        setName('');
        setEmail('');
        setPhone('');
        setSelectedCourse(null);
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Enroll in a Course</Text>

            <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
            />

            <Text style={styles.courseLabel}>Select Course:</Text>
            {courses.map(course => (
                <TouchableOpacity
                    key={course.id}
                    style={[
                        styles.courseButton,
                        selectedCourse === course.id && styles.selectedCourseButton,
                    ]}
                    onPress={() => setSelectedCourse(course.id)}
                >
                    <Text style={styles.courseButtonText}>{course.name}</Text>
                </TouchableOpacity>
            ))}

            <View style={styles.buttonContainer}>
                <Button title="Submit Enrollment" onPress={handleSubmit} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    courseLabel: {
        fontSize: 18,
        marginBottom: 5,
    },
    courseButton: {
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginVertical: 5,
        alignItems: 'center',
    },
    selectedCourseButton: {
        backgroundColor: '#4CAF50',
    },
    courseButtonText: {
        color: '#333',
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default EnrollScreen;
