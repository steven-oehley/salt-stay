import { Input, Label } from '../ui';

interface FormInputProps {
  id: string;
  placeholder: string;
  label: string;
  type?: string;
}

const FormInput = ({
  id,
  placeholder,
  label,
  type = 'text',
}: FormInputProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        aria-required
        required
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
export default FormInput;
