import React from 'react';
import TextField from '@material-ui/core/TextField';

const handleChange = (event: any, formik: any) => {
  // get name and value from event.target
  // is the same as const name = event.target.name
  const { name, value } = event.target;
  // make sure you have name prop in
  // your textfield and it is same name as your initial state
  formik.setFieldValue(name, value); // this call formik to set your value
};

const FormikInput = ({ formik, name, label }: { formik: any; name: string; label: string }) => {
  const error = formik.touched[name] && formik.errors[name];
  const value = formik.values[name];
  return (
    <TextField
      required
      error={error}
      helperText={error}
      id={name}
      name={name}
      label={label}
      fullWidth
      onChange={(event) => handleChange(event, formik)}
      value={value}
      onBlur={formik.handleBlur}
      InputLabelProps={{ shrink: !!value || formik.touched[name] }}
    />
  );
};

export default FormikInput;
