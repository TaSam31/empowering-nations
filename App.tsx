import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SixMonthCoursesScreen from './screens/SixMonthCourseScreen';
import SixWeekCoursesScreen from './screens/SixWeekCourseScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import TotalFeesScreen from './screens/TotalFeesScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Six Month Courses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="Six Week Courses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
        <Stack.Screen name="Total Fees" component={TotalFeesScreen} />
        <Stack.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
