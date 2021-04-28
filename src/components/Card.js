import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

const Card = ({ children, expanded }) => {
  return <View style={[styles.card, expanded && { height: 200 }]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 60,
    height: 100,
    alignSelf: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    flexGrow: 1,
  },
});

Card.defaultProps = {
  expanded: false,
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  expanded: PropTypes.bool,
};

export default Card;
