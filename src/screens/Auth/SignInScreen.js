import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { FormWrapper, Button } from '../../components';
import { validateFields } from '../../helpers';
import { useForm } from '../../hooks/useForm';
import { useLoggedIn } from '../../hooks/useLogged';
import companyLogo from '../../assets/companyLogo.png';
import shortid from 'shortid';

const SignInScreen = ({ navigation }) => {
  const [disabled, setDisabled] = React.useState(true);
  const initialState = {
    username: '',
    password: '',
  };

  const { setLoggedIn } = useLoggedIn();

  function onSubmit(values) {
    let token = shortid.generate();
    let data = { token, ...values };

    setLoggedIn(data)
      .then(() => navigation.navigate('RootStackNavigator'))
      .catch((error) => alert(error));
  }

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  React.useEffect(
    function triggleValidation() {
      if (!validateFields(inputs.username, 4) && !validateFields(inputs.password, 4)) {
        return setDisabled(false);
      }
      return setDisabled(true);
    },
    [inputs],
  );

  return (
    <FormWrapper style={styles.centeredView}>
      <View style={styles.form}>
        <View>
          <Text style={styles.title}>Meet App!</Text>
          <Image source={companyLogo} style={{ alignSelf: 'center' }} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputs.username}
            onChangeText={subscribe('username')}
            textAlign="left"
            placeholder="Tu usuario"
            style={styles.input}
            placeholderTextColor="#ccc"
          />

          <TextInput
            value={inputs.password}
            onChangeText={subscribe('password')}
            textAlign="left"
            placeholder="Tu contraseña"
            style={styles.input}
            placeholderTextColor="#ccc"
            secureTextEntry
          />
        </View>

        <Button handlePress={handleSubmit} disabled={disabled} style={styles.signInButton} text="Ingresar" />
      </View>
    </FormWrapper>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 350,
    height: 300,
    borderRadius: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    alignSelf: 'center',
  },
  input: {
    fontSize: 15,
    color: '#000000',
    borderBottomColor: '#6C16B9',
    borderBottomWidth: 1,
    width: 300,
    marginVertical: 5,
    borderRadius: 5,
  },
  signInButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 50,
    color: '#6C16B9',
    textAlign: 'center',
  },
});

export default SignInScreen;
