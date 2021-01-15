import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        flex: 1,
    },
    imageContainerButton1: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'flex-end',
    },
    imageContainerButton2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageButton: {
        // width: 130,
        // height: 40,
        padding: 20,
        alignItems: 'center',
        borderRadius: 50,
    },
    imageButtonText: {
        color: '#fff',
        fontSize: 20
    },
    imageRetakeButton: {
        backgroundColor: '#ff3c3c',
    },
    imageSaveButton: {
        backgroundColor: '#3cffbb',
    },
});