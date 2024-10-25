import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; 

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Image source={ require( '../_images/LOGO Empowering nations.png' )} style={styles.logo} />
            <Text style={styles.title}>Empowering the Nation</Text>
            <Text style={styles.description}>
                Empowering the Nation is an initiative started by Precious Radebe in 2018 to
                upskill domestic workers and gardeners. It provides six-month and six-week
                courses that enhance employability and entrepreneurial opportunities.
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Six Month Courses"
                    onPress={() => navigation.navigate("Six Month Courses")}
                />
                <View style={styles.buttonSpacer} />
                <Button
                    title="Six-Week Courses"
                    onPress={() => navigation.navigate('Six Week Courses')}
                />
            </View>
    
            </View> );}
            


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#89CFF0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: { 
        width: 150, 
        height: 150, 
        marginBottom: 100,
        borderRadius: 75,
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    description: { 
        marginBottom: 20, 
        textAlign: 'center', 
        color: '#555',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonSpacer: {
        height: 15, },
});
