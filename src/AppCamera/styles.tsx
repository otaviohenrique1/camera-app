import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 13,
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalButton: {
    margin: 10,
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  modalButtonContainer: {
    margin: 10,
    flexDirection: 'row',
  },
});