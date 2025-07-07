import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material';

type TextFieldProps = {
  readonly variant?: 'filled' | 'outlined' | 'standard';
  readonly placeholder?: string;
  readonly className?: string;
} & MUITextFieldProps;

export default function TextField({ variant, placeholder, className, ...rest }: Readonly<TextFieldProps>) {
  return (
    <MUITextField
      variant={variant}
      placeholder={placeholder}
      className={`w-full max-w-md ${className}`}
      sx={{
        height: '48px',
        backgroundColor: '#f0f4ff',
        borderRadius: '8px',
        '& .MuiInputBase-root': {
          borderRadius: '8px',
          transition: 'background 0.2s',
          height: '48px',
        },
        '& .MuiInputBase-root:hover': {
          backgroundColor: '#f0f4ff',
          height: '48px',
        },
      }}
      {...rest}
    />
  );
}
