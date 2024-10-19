import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Updated import

export default function TotalFeesScreen() {
    const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
    const [totalFees, setTotalFees] = useState(0);

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
        let subtotal = selectedCourses.reduce((acc, course) => acc + courses.find(c => c.id === course)!.fee, 0);
        let discount = 0;

        if (selectedCourses.length === 2) discount = 0.05;
        else if (selectedCourses.length === 3) discount = 0.10;
        else if (selectedCourses.length > 3) discount = 0.15;

        subtotal = subtotal - subtotal * discount;
        const vat = subtotal * 0.15;
        setTotalFees(subtotal + vat);
    };

    return (
        <View>
            <Text>Enter your contact details</Text>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Phone" />
            <TextInput placeholder="Email" />

            <Text>Select Courses:</Text>
            {courses.map((course) => (
                <View key={course.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                    <Text>{course.name} - {course.fee}</Text>
                </View>
            ))}

            <Button title="Calculate Fees" onPress={calculateFees} />
            <Text>Total Fees: {totalFees}</Text>
        </View>
    );
}
