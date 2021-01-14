import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from "./styles";

interface Props {
    photo : any;
    retakePicture : any;
    savePhoto : any;
}

const CameraPreview: React.FC<Props> = ({ photo, retakePicture, savePhoto }) => {
    return (
        <View style={styles.container}>
            <Text>Teste</Text>
        </View>
    );
}

export default CameraPreview;