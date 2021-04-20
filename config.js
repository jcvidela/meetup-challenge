import { Text, TextInput } from 'react-native';

/**
 * Disable font scalling across the app so we don't
 * let the OS change our font size and break our UI.
 */
export function disableFontScaling() 
{
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
}
