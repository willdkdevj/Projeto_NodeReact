import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Routes(){
	return (
		<NavigationContainer>
			<Stack.Navigator>
			
			</Stack.Navigator>
		</NavigationContainer>
		);
}