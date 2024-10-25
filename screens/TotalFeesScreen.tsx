import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import CheckBox from 'expo-checkbox'; // Updated import for expo-checkbox

export default function TotalFeesScreen() {
    const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
    const [totalFees, setTotalFees] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const courses = [
        { id: 1, name: 'First Aid', fee: 1500 },
        { id: 2, name: 'Sewing', fee: 1500 },
        { id: 3, name: 'Landscaping', fee: 1500 },
        { id: 4, name: 'Life Skills', fee: 1500 },
        { id: 5, name: 'Child Minding', fee: 750 },
        { id: 6, name: 'Cooking', fee: 750 },
        { id: 7, name: 'Garden Maintenance', fee: 750 },
    ];

    const calculateFees = () => {
        let subtotal = selectedCourses.reduce((acc, courseId) => {
            const course = courses.find(c => c.id === courseId);
            return acc + (course ? course.fee : 0);
        }, 0);

        let discount = 0;
        if (selectedCourses.length === 2) discount = 0.05;
        else if (selectedCourses.length === 3) discount = 0.10;
        else if (selectedCourses.length > 3) discount = 0.15;

        subtotal -= subtotal * discount;
        const vat = subtotal * 0.15;
        setTotalFees(subtotal + vat);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={ require( '../_images/LOGO Empowering nations.png' )} style={styles.logo} />
            <Text style={styles.header}>Enter Your Contact Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={styles.coursesHeader}>Select Courses:</Text>
            {courses.map((course) => (
                <View key={course.id} style={styles.checkboxContainer}>
                    <CheckBox
                        value={selectedCourses.includes(course.id)}
                        onValueChange={() => {
                            if (selectedCourses.includes(course.id)) {
                                setSelectedCourses(selectedCourses.filter(id => id !== course.id));
                            } else {
                                setSelectedCourses([...selectedCourses, course.id]);
                            }
                        }}
                    />
                    <Text>{course.name} - ${course.fee}</Text>
                </View>
            ))}

            <Button title="Calculate Fees" onPress={calculateFees} />
            <Text style={styles.totalFees}>Total Fees: ${totalFees.toFixed(2)}</Text>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    logo: { 
        width: 150, 
        height: 150, 
        marginBottom: 20,
        borderRadius: 75,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    coursesHeader: {
        fontSize: 18,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    totalFees: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },
});
