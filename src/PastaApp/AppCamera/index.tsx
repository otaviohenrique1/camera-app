import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, View, Modal, Image } from 'react-native';
import { Camera } from "expo-camera";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default function AppCamera() {
  const camRef = useRef<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<any>(null);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View/>
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>
  }

  const flipCamera = () => {
    setType(
      (type === Camera.Constants.Type.back)
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    );
  };

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  };
  
  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
    .then(() => {
      alert('Salvo com sucesso')
    })
    .catch((error) => {
      console.log('err', error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={camRef}
        style={styles.camera}
        type={type}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={flipCamera}
          >
            <MaterialIcons name="flip-camera-android" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity
        onPress={takePicture}
        style={styles.button}
      >
          <AntDesign name="camera" size={24} color="black" />
      </TouchableOpacity>
      { capturedPhoto && 
      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={ () => setOpen(false) }
            >
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={ savePicture }
            >
              <FontAwesome name="upload" size={50} color="#121212" />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.modalImage}
            source={{ uri: capturedPhoto }}
          />
        </View>
      </Modal> }
    </SafeAreaView>
  );
}