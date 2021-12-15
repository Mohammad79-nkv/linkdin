import { TextField } from "@material-ui/core";
import { Field } from "formik";
import styled from "styled-components";

const Input = (props) => {
  const { name, label, value, onChange, error, helperText, type, className } = props;
  return (
    <FormControl>
      <TextField
        fullWidth
        className={className}
        type={type}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </FormControl>
  );
};

const FormControl = styled.div``;

export default Input;
