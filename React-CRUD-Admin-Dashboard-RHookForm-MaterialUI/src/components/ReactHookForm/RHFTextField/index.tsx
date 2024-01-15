import { useTheme } from "@mui/material";
import { tokens } from "../../../context/ThemeContext";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

// Define the prop types for the Grid component
interface RHFTextFieldProps {
  name: string,
  control: any,
  label: string,
  variant: any,
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({ name, control, label, variant }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant={variant}
          sx={{ gridColumn: "span 2" }}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};

export default RHFTextField;
