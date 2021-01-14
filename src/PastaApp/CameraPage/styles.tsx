import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    botao: {
        flex: 0.05,
        padding: 20,
        marginHorizontal: 10,
        backgroundColor: '#00b7ff',
        borderRadius: 100,
    },
    botaoTexto: {
        color: '#ffffff',
        fontSize: 18,
    },
});