import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface TextFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

// TextField Component
export function TextField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  description,
}: TextFieldProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <Field>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <Input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}
