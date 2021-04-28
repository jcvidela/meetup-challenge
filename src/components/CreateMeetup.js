import * as React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Button } from '../components';
import { FormWrapper } from '.';
import { validateFields } from '../helpers';
import { useForm } from '../hooks/useForm';
import shortid from 'shortid';

const CreateMeetup = ({ onCreateNewMeetup }) => {
  const [disabled, setDisabled] = React.useState(false);
  const initialState = {
    id: shortid.generate(),
    name: '',
    guestsQuantity: '',
  };

  function onSubmit(formValues) {
    return onCreateNewMeetup({
      ...formValues,
      guestsQuantity: Number(formValues.guestsQuantity),
    });
  }

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  React.useEffect(
    function triggleValidation() {
      if (!validateFields(inputs.name, 4) && !validateFields(inputs.guestsQuantity, 1)) {
        return setDisabled(false);
      }
      return setDisabled(true);
    },
    [inputs],
  );

  return (
    <FormWrapper>
      <View style={styles.field}>
        <TextInput 
          placeholder="Nombre de la meetup" 
          style={styles.input} 
          value={inputs.name} 
          onChangeText={subscribe('name')} 
        />
      </View>

      <View style={styles.field}>
        <TextInput
          placeholder="Cantidad de invitados"
          style={styles.input}
          value={inputs.guestsQuantity}
          onChangeText={subscribe('guestsQuantity')}
          keyboardType="numeric"
        />
      </View>

      <Button handlePress={handleSubmit} disabled={disabled} style={styles.saveButton} text="Guardar" />
    </FormWrapper>
  );
};

const styles = StyleSheet.create({
  field: {
    width: Dimensions.get('window').width - 150,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  saveButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

CreateMeetup.propTypes = {
  onCreateNewMeetup: PropTypes.func.isRequired,
};

export default CreateMeetup;
