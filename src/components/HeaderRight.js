import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { Button } from '.';
import { removeFromStorage } from '../helpers';
import { useNavigation } from '@react-navigation/native';
import closeSessionIcon from '../assets/closession.png';

// Test
import { CustomModal as Modal } from '.';

const HeaderRight = () => {
  const navigation = useNavigation();
  const [modalVisibility, setModalVisibility] = React.useState(false);

  function onToggleModalVisbility() {
    setModalVisibility(!modalVisibility);
  }

  function onConfirmPress() {
    removeFromStorage('session').then(() => {
      onToggleModalVisbility();
      return navigation.navigate('AuthNavigator');
    });
  }

  function onCancelPress() {
    return onToggleModalVisbility();
  }

  return (
    <>
      <Modal visible={modalVisibility} transparent animationType="fade">
        <Text style={styles.title}>¿Desea finalizar la sesión?</Text>

        <View style={styles.buttonsContainer}>
          <Button text="Finalizar" style={styles.closeAppButton} handlePress={onConfirmPress} />
          <Button text="Cancelar" style={{ width: 100 }} handlePress={onCancelPress} />
        </View>
      </Modal>

      <TouchableOpacity style={{ padding: 10 }} onPress={onToggleModalVisbility}>
        <Image source={closeSessionIcon} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  closeAppButton: {
    backgroundColor: 'red',
    width: 100,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HeaderRight;
