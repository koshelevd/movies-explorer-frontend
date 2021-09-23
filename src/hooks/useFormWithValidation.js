import { useState, useCallback } from 'react';
import { ACTIVE_ERROR_SELECTOR, INPUT_ERROR_SELECTOR } from '../utils/config';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [inputClasses, setInputClasses] = useState({});
  const [errorClasses, setErrorClasses] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });

    const inputIsValid = input.validity.valid;
    const validationMessage = input.validationMessage;
    const showError = !inputIsValid && validationMessage !== '';
    const inputClassName = showError && INPUT_ERROR_SELECTOR;
    const errorClassName = showError && ACTIVE_ERROR_SELECTOR;

    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(input.closest('form').checkValidity());
    setInputClasses({ ...inputClasses, [name]: inputClassName });
    setErrorClasses({ ...errorClasses, [name]: errorClassName });
  };

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors({});
      setIsValid(newIsValid);
      setInputClasses({});
      setErrorClasses({});
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    inputClasses,
    errorClasses,
    handleChange,
    resetForm,
    errors,
    isValid,
  };
}
