import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Home() {
    const navigation = useNavigation();

    // function handleNavigateToCameraPage() {
    //     navigation.navigate('CameraPage');
    // }

    // function handleNavigateToAppTeste() {
    //     navigation.navigate('AppTeste');
    // }

    // function handleNavigateToAppCamera() {
    //     navigation.navigate('AppCamera');
    // }

    function handleNavigateToCameraPage2() {
        navigation.navigate('CameraPage');
    }

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.botao}
                onPress={handleNavigateToCameraPage}
            >
                <Text style={styles.botaoTexto}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={handleNavigateToAppTeste}
            >
                <Text style={styles.botaoTexto}>CameraTeste</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={handleNavigateToAppCamera}
            >
                <Text style={styles.botaoTexto}>AppCamera</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={styles.botao}
                onPress={handleNavigateToCameraPage2}
            >
                <Text style={styles.botaoTexto}>Camera 2</Text>
            </TouchableOpacity>
        </View>
    );
}