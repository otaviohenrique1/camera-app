import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: '#14274e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    camera: {
        flex: 1,
        width:"100%"
    },
    containerCamera1: {
        flex: 1,
    },
    containerCamera2: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonContainerCamera: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-around'
    },
    buttonCamera: {
        // width: 70,
        // height: 70,
        // bottom: 0,
        borderRadius: 50,
        padding: 20,
        backgroundColor: '#d4d4d4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFlash: {
        // position: 'absolute',
        // left: '5%',
        // top: '10%',
        borderRadius: 50,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // height: 25,
        // width: 25,
    },
    buttonCameraFlip: {
        // marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 20,
        backgroundColor: '#fff',
        // height: 25,
        // width: 25,
    },
});