import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const ModalViewCompo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Hello! Abdullah Al Zarif</Text>
            <Pressable style={[styles.button, styles.buttonClose]}
            onPress={()=>setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={()=>setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 29,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button:{
    borderRadius: 20,
    padding:10,
    elevation: 2
  },
  buttonOpen:{
    backgroundColor: '#f194ff'
  },
  buttonClose:{
    backgroundColor: '#2195f3'
  },
  textStyle:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText:{
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default ModalViewCompo;
