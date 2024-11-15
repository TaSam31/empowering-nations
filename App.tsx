import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SixMonthCourseScreen from './screens/SixMonthCourseScreen';
import SixWeekCourseScreen from './screens/SixWeekCourseScreen';
import TotalFeesScreen from './screens/TotalFeesScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import FirstAidCourse from './screens/FirstAidCourse'; 
import SewingCourse from './screens/SewingCourse'; 
import LandscapingCourse from './screens/LandscapingCourse'; 
import LifeSkillsCourse from './screens/LifeSkillsCourse';
import CookingCourse from './screens/CookingCourse';
import ChildMindingCourse from './screens/ChildMindingCourse';
import GardenMaintenanceCourse from './screens/GardenMaintenenceCourse';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Six Month Courses" component={SixMonthCourseScreen} />
        <Stack.Screen name="Six Week Courses" component={SixWeekCourseScreen} />
        <Stack.Screen name="TotalFeesScreen" component={TotalFeesScreen} />
        <Stack.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} />
        <Stack.Screen name="FirstAidCourse" component={FirstAidCourse} />
        <Stack.Screen name="SewingCourse" component={SewingCourse} />
        <Stack.Screen name="LandscapingCourse" component={LandscapingCourse} />
        <Stack.Screen name="LifeSkillsCourse" component={LifeSkillsCourse} />
        <Stack.Screen name="ChildMindingCourse" component={ChildMindingCourse} />
        <Stack.Screen name="CookingCourse" component={CookingCourse} />
        <Stack.Screen name="GardenMaintenanceCourse" component={GardenMaintenanceCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
