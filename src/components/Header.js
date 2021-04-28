import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import menuIcon from '../assets/menu.png';
import plusIcon from '../assets/plus.png';

const Header = ({ onHandlePress, onHandleAddButtonPress }) => {
  function onBurgerPress() {
    onHandlePress();
  }

  function onAddButtonPress() {
    onHandleAddButtonPress();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBurgerPress}>
        <Image source={menuIcon} style={styles.menu} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onAddButtonPress}>
        <Image source={plusIcon} style={styles.plus} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menu: {
    tintColor: 'black',
    width: 30,
    height: 20,
  },
  plus: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
});

Header.defaultProps = {
  onHandleAddButtonPress: () => {},
};

Header.propTypes = {
  onHandlePress: PropTypes.func.isRequired,
  onHandleAddButtonPress: PropTypes.func,
};

export default Header;
