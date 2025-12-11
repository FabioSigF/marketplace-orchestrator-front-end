import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface PasswordFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function PasswordField({
  label,
  description,
  error,
  errorMessage,
  ...props
}: PasswordFieldProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <Field>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      {description && <FieldDescription>{description}</FieldDescription>}
      <Input id={inputId} type="password" placeholder="••••••••" {...props} className="border-gray-200"/>
      {error && errorMessage && <FieldError className="text-xs text-red-400">{errorMessage}</FieldError>}
    </Field>
  );
}
