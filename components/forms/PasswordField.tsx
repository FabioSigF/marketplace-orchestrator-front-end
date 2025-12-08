import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function PasswordField({
  label,
  value,
  onChange,
  description,
  error,
  errorMessage,
}: PasswordFieldProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <Field>
        <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
        {description && <FieldDescription>{description}</FieldDescription>}
        <Input
          id={inputId}
          type="password"
          placeholder="••••••••"
          value={value}
          onChange={onChange}
        />
        {error && errorMessage && <FieldError>{errorMessage}</FieldError>}
      </Field>
    </div>
  );
}
