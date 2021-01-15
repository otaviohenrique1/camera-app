import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./PastaApp/Home";
import CameraPage from './CameraPage2';

const {Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#00b7ff',
                },
                headerTintColor: "#ffffff"
            }}>
                <Screen name="Home" component={Home}/>
                <Screen name="CameraPage" component={CameraPage}/>
            </Navigator>
        </NavigationContainer>
    );
}