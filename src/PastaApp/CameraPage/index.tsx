import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Camera } from "expo-camera";
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

let camera: Camera | any;

export default function CameraPage() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = React.useState(false);
    const [capturedImage, setCapturedImage] = React.useState<any>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        (async () => {
            // const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHasPermission(status === 'granted');
          })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const flipCamera = () => setType(
        type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );

    const __savePhoto = () => {};

    const __retakePicture = () => {};

    const __takePicture = async () => {
        const photo: any = await camera.takePictureAsync()
            console.log(photo)
            setPreviewVisible(true)
            //setStartCamera(false)
            setCapturedImage(photo)
    };
    
    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={flipCamera}
                        style={styles.botao}
                    >
                        <MaterialIcons name="flip-camera-android" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={__takePicture}
                        style={styles.botao}
                    >
                        <AntDesign name="camera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                    >
                        <Ionicons name="flash" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}