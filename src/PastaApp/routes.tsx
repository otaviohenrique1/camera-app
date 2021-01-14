import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import CameraPage from './CameraPage';
import Home from "./Home";
import AppTeste from './AppTeste';
import CameraPreview from './CameraPreview';

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
                <Screen name="AppTeste" component={AppTeste}/>
                <Screen name="CameraPreview" component={CameraPreview}/>
            </Navigator>
        </NavigationContainer>
    );
}