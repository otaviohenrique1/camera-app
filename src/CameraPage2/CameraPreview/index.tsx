import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import styles from "./styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";

interface Props {
    photo : any;
    retakePicture : any;
    savePhoto : any;
}

const CameraPreview: React.FC<Props> = ({ photo, retakePicture, savePhoto }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={styles.imageContainer}
            >
                <View
                    style={styles.imageContainerButton1}
                >
                    <View
                        style={styles.imageContainerButton2}
                    >
                        <TouchableOpacity
                            onPress={retakePicture}
                            style={[styles.imageButton, styles.imageRetakeButton]}
                        >
                            {/* <Text
                                style={styles.imageButtonText}
                            >Re-take</Text> */}
                            <MaterialIcons name="cancel" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={savePhoto}
                            style={[styles.imageButton, styles.imageSaveButton]}
                        >
                            {/* <Text
                                style={styles.imageButtonText}
                            >save photo</Text> */}
                            <Feather name="save" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default CameraPreview;