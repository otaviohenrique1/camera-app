import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import styles from "./styles";
import CameraPreview from './CameraPreview';
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

let camera: Camera | any;

export default function CameraPage() {
    const [flashMode, setFlashMode] = useState('off');
    const [startCamera,setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    const __startCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if(status === 'granted'){
            setStartCamera(true);
        }else{
            Alert.alert("Acesso negado");
        }
    };
    
    const __takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        // console.log(photo);
        setPreviewVisible(true);
        // setStartCamera(false);
        setCapturedImage(photo);
    };

    const __handleFlashMode = () => {
        if (flashMode === 'on') {
          setFlashMode('off')
        } else if (flashMode === 'off') {
          setFlashMode('on')
        } else {
          setFlashMode('auto')
        }
    
    }

    const __switchCamera = () => {
        if (cameraType === 'back') {
          setCameraType('front')
        } else {
          setCameraType('back')
        }
    }

    const __savePhoto = () => {};

    const __retakePicture = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
        __startCamera();
    };
    
    return (
        <View style={styles.container}>
            {(startCamera) ? (
                <View style={styles.camera}>
                    {
                        (previewVisible && capturedImage) ? (
                            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />

                        ) : (
                            <Camera
                                type={cameraType}
                                flashMode={flashMode}
                                style={styles.containerCamera1}
                                ref={(r) => {
                                    camera = r
                                }}
                            >
                                <View style={styles.containerCamera2}>
                                    <View style={styles.buttonContainerCamera}>
                                        <TouchableOpacity
                                            onPress={__switchCamera}
                                            style={styles.buttonCameraFlip}
                                        >
                                            {cameraType === 'front' ? (
                                                <MaterialIcons name="photo-camera-front" size={24} color="black" />
                                            ) : (
                                                <MaterialIcons name="photo-camera-back" size={24} color="black" />
                                            )}
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={__takePicture}
                                            style={styles.buttonCamera}
                                        >
                                            <AntDesign name="camera" size={24} color="black" />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={__handleFlashMode}
                                            style={[styles.buttonFlash, {
                                                backgroundColor: flashMode === 'off' ? '#ff0000' : '#009dff',
                                            }]}
                                        >
                                            <Ionicons name="flash" size={24} color="yellow" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Camera>
                        )
                    }
                </View>
            ) : (
                <View
                    style={styles.container}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={__startCamera}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
                </View>
            )}
        </View>
    );
}