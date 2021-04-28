import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from 'react-native';

const Button = ({ handlePress, text, style, disabled }) => {
  return (
    <TouchableOpacity style={[styles.button, style, disabled && styles.disabledButton]} onPress={handlePress} disabled={disabled}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C16B9',
    width: 200,
    height: 50,
    justifyContent: 'center',
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999,
    borderBottomEndRadius: 9999,
    borderTopEndRadius: 9999,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: 'lightgray',
  },
});

Button.defaultProps = {
  onHandleAddButtonPress: () => {},
  disabled: false,
};

Button.propTypes = {
  handlePress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.ViewPropTypes,
  disabled: PropTypes.bool,
};

export default Button;
