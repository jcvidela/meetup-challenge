import * as React from 'react';
import PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FormWrapper = ({ children, style }) => {
  return (
    <KeyboardAwareScrollView 
      contentContainerStyle={style}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FormWrapper;
