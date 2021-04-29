import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { Button, CustomModal as Modal } from '.';
import { removeFromStorage } from '../helpers';
import { useNavigation } from '@react-navigation/native';
import closeSessionIcon from '../assets/closession.png';

const HeaderRight = () => {
  const navigation = useNavigation();
  const [modalVisibility, setModalVisibility] = React.useState(false);

  function toggleModalVisibility() {
    setModalVisibility(!modalVisibility);
  }

  function onConfirmPress() {
    removeFromStorage('session')
    .then(() => {
      toggleModalVisibility();
      return navigation.navigate('AuthNavigator');
    });
  }

  function onCancelPress() {
    return toggleModalVisibility();
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

      <TouchableOpacity style={{ padding: 10 }} onPress={toggleModalVisibility}>
        <Image source={closeSessionIcon} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});

export default HeaderRight;
