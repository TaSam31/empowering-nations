import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

type CourseDetailsRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

type Props = {
    route: CourseDetailsRouteProp;
};

// Define the structure for the course details
type CourseDetail = {
    name: string;
    fee: string;
    description: string;
    content: string[];
};

type CourseDetails = {
    [key: number]: CourseDetail; // Allow numeric keys
};

const courseDetails: CourseDetails = {
    1: { name: 'First Aid', fee: 'R1500', description: 'Provide first aid awareness and basic life support.', content: ['Wounds and bleeding', 'Burns and fractures', 'Emergency scene management', 'CPR', 'Respiratory distress'] },
    2: { name: 'Sewing', fee: 'R1500', description: 'Provide alterations and new garment tailoring services.', content: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems', 'Alterations', 'Designing garments'] },
    3: { name: 'Landscaping', fee: 'R1500', description: 'Provide landscaping services for gardens.', content: ['Indigenous and exotic plants', 'Fixed structures', 'Balancing plants in a garden', 'Garden layout'] },
    4: { name: 'Life Skills', fee: 'R1500', description: 'Provide skills to navigate basic life necessities.', content: ['Opening a bank account', 'Basic labour law', 'Basic literacy', 'Basic numeric literacy'] },
    5: { name: 'Child Minding', fee: 'R750', description: 'Provide basic child and baby care.', content: ['Newborn to toddler care', 'Educational toys'] },
    6: { name: 'Cooking', fee: 'R750', description: 'Prepare nutritious family meals.', content: ['Nutritional requirements', 'Meal planning', 'Cooking techniques'] },
    7: { name: 'Garden Maintenance', fee: 'R750', description: 'Provide basic gardening maintenance knowledge.', content: ['Watering requirements', 'Pruning and propagation', 'Planting techniques'] },
};

export default function CourseDetailsScreen({ route }: Props) {
    // Ensure courseId is handled as string or number
    const courseId = Number(route.params.courseId);

    // Access course details using the numeric courseId
    const course = courseDetails[courseId];

    if (!course) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Course not found!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseFee}>Fees: {course.fee}</Text>
            <Text style={styles.courseDescription}>{course.description}</Text>
            <Text style={styles.courseContentHeader}>Course Content:</Text>
            {course.content.map((item, index) => (
                <Text key={index} style={styles.courseContentItem}>- {item}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
    courseName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    courseFee: {
        fontSize: 18,
        marginBottom: 10,
    },
    courseDescription: {
        fontSize: 16,
        marginBottom: 15,
    },
    courseContentHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    courseContentItem: {
        fontSize: 16,
        marginBottom: 2,
    },
});
