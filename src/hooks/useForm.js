import * as React from 'react';

export function useForm(initialState, onSubmit) {
  const [inputs, setInputs] = React.useState(initialState);

  function subscribe(field) {
    return function (value) {
      setInputs({
        ...inputs,
        [field]: value,
      });
    };
  }

  function handleSubmit() {
    onSubmit(inputs);
    return resetForm();
  }

  function resetForm() {
    setInputs(initialState);
  }

  return { subscribe, inputs, handleSubmit };
}