import * as React from 'react';
import PropTypes from 'prop-types'
import { View, StyleSheet, Modal } from 'react-native';

const CustomModal = (props) => {
  return (
    <Modal {...props}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{props.children}</View>
      </View>
    </Modal>
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
});

CustomModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CustomModal;
