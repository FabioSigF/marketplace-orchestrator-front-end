import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

export function TextField({
  label,
  description,
  error,
  errorMessage,
  ...props
}: TextFieldProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <Field>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      {description && <FieldDescription>{description}</FieldDescription>}
      <Input
        id={inputId}
        {...props}
        placeholder={props.placeholder}
        className="border-gray-200"
      />
      {error && errorMessage && <FieldError className="text-xs text-red-400">{errorMessage}</FieldError>}
    </Field>
  );
}
