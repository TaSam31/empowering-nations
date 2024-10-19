import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SixMonthCourseScreen from './screens/SixMonthCourseScreen';
import SixWeekCourseScreen from './screens/SixWeekCourseScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import TotalFeesScreen from './screens/TotalFeesScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import FirstAidCourse from './screens/FirstAidCourse'; // Add your import path
import SewingCourse from './screens/SewingCourse'; // Add your import path
import LandscapingCourse from './screens/LandscapingCourse'; // Add your import path

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Six Month Courses" component={SixMonthCourseScreen} />
        <Stack.Screen name="Six Week Courses" component={SixWeekCourseScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="Total Fees" component={TotalFeesScreen} />
        <Stack.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} />
        <Stack.Screen name="FirstAidCourse" component={FirstAidCourse} />
        <Stack.Screen name="SewingCourse" component={SewingCourse} />
        <Stack.Screen name="LandscapingCourse" component={LandscapingCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
