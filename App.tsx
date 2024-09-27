import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Home.screen'; // Adjust this path as needed
import ProfileScreen from './src/screens/Profile/Profile.screen'; // Adjust this path as needed

export type StackParamList = {
  Home: undefined;
  Profile: undefined; // Define the route names here, along with their parameters (if any)
};

const Stack = createNativeStackNavigator<StackParamList>(); // Pass the type to Stack Navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
