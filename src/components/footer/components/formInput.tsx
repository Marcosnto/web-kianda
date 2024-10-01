import { Input } from "@/components/ui/input";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
  isRequired?: boolean;
  className?: string;
};

export function FormInput({
  label,
  type,
  id,
  isRequired,
  className,
}: FormInputProps) {
  return (
    <label className={`${className}`.trim()}>
      {label}
      {isRequired ? "*" : null}
      <Input
        className="b-1 h-9 rounded-none border-black bg-k_off_white"
        type={type}
        id={id}
      />
    </label>
  );
}
