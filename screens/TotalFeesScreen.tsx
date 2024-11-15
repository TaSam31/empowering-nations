import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type TotalFeesScreenProps = NativeStackScreenProps<RootStackParamList, 'TotalFeesScreen'>;

const TotalFeesScreen: React.FC<TotalFeesScreenProps> = ({ navigation }) => {
    const [selectedCourses, setSelectedCourses] = useState<number[]>([]); 
    const [totalFees, setTotalFees] = useState(0);
    const [vat, setVat] = useState(0);
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountValue, setDiscountValue] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);

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
        if (selectedCourses.length === 0) {
            Alert.alert('Error', 'Please select one or more courses.');
            return;
        }

        let subtotal = selectedCourses.reduce((acc, courseId) => {
            const course = courses.find(c => c.id === courseId);
            return acc + (course ? course.fee : 0);
        }, 0);

        let discount = 0;
        if (selectedCourses.length === 2) discount = 0.05;
        else if (selectedCourses.length === 3) discount = 0.10;
        else if (selectedCourses.length > 3) discount = 0.15;

        const discountAmount = subtotal * discount;
        setDiscountValue(discountAmount);
        setDiscountApplied(discount > 0);
        setDiscountPercentage(discount * 100);  // Convert to percentage

        subtotal -= discountAmount;
        const vatAmount = subtotal * 0.15;
        setVat(vatAmount);
        setTotalFees(subtotal + vatAmount);

        Alert.alert('Fees Calculation Complete!');
    };

    const handleEnrollNow = () => {
        Alert.alert('Enrollment Page Coming Soon!');
        // Optionally, add logic for enrollment navigation or additional actions
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../_images/LOGO Empowering nations.png')} style={styles.logo} />
            </View>
            <Text style={styles.header}>Calculate Fees Estimation</Text>

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
                    <Text>{course.name} - R{course.fee}</Text>
                </View>
            ))}
            <View style={styles.buttonSpacer}>
                <Button title="Calculate Fees" onPress={calculateFees} />
            </View>
            <Button title="Back" onPress={() => navigation.goBack()} />

            <Text style={styles.totalFees}>Total Fees: R{totalFees.toFixed(2)}</Text>
            <Text style={styles.vat}>VAT (15%): R{vat.toFixed(2)}</Text>
            <Text style={styles.discount}>Discount Applied: {discountApplied ? 'Yes' : 'No'}</Text>
            {discountApplied && (
                <>
                    <Text style={styles.discount}>Discount Value: -R{discountValue.toFixed(2)}</Text>
                    <Text style={styles.discount}>Discount Percentage: {discountPercentage}%</Text>
                </>
            )}

            {/* Enroll Now Button with Alert */}
            <View style={styles.buttonSpacer}>
                <Button title="Enroll Now" onPress={handleEnrollNow} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    centerAlign: {
        alignItems: 'center',
    },
    logo: { 
        width: 150, 
        height: 150, 
        marginBottom: 50,
        borderRadius: 75,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
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
    vat: {
        fontSize: 16,
        marginTop: 5,
    },
    discount: {
        fontSize: 16,
        marginTop: 5,
    },
    buttonSpacer: {
        marginVertical: 20,
    },
});

export default TotalFeesScreen;
