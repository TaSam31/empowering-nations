import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Adjust the path as necessary

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            {/* Add your logo here */}
            <Image source={{ uri: 'logo-url' }} style={styles.logo} />
            <Text style={styles.title}>Empowering the Nation</Text>
            <Text>
                Empowering the Nation is an initiative started by Precious Radebe in 2018 to
                upskill domestic workers and gardeners. It provides six-month and six-week
                courses that enhance employability and entrepreneurial opportunities.
            </Text>
            <Button
            title="Go to Six Month Courses"
            onPress={() => navigation.navigate("Six Month Courses")}
        /><Button title="Six-Week Courses" onPress={() => navigation.navigate('Six Week Courses')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f0f4f8',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: { width: 100, height: 100 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
