import { Box, TextField, Typography } from "@mui/material";

const InputField = ({
  formik,
  name,
  label,
  disabled = false,
  onChange,
  multiline = false,
  id,
  maxRows = 8,
}) => {
  return (
    <Box>
      <Typography fontSize={14} fontWeight="500">
        {label}
      </Typography>
      <TextField
        id={id}
        fullWidth
        name={name}
        placeholder={label}
        size="small"
        multiline={multiline}
        maxRows={multiline ? maxRows : undefined}
        disabled={disabled}
        value={formik.values[name] || ""}
        onChange={onChange ?? formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        spellCheck={true}
      />
    </Box>
  );
};

export default InputField;
