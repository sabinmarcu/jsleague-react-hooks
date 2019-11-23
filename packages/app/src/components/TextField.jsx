import React from 'react';

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

export default ({
  label,
  value,
  isDirty,
  isValid,
  handler,
  error,
  fullWidth = true,
  id,
  ...inputControls
}) => (
  <FormControl fullWidth={fullWidth} error={isDirty && !isValid}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Input id={id} value={value} onChange={handler} {...inputControls} />
    {isDirty && !isValid && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);