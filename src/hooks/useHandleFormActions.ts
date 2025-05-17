import { useFormContext } from "@/hooks/useFormContext";

export const useHandleFormActions = () => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    window.location.href = "/success";
  };

  return { formData, handleChange, handleSubmit };
};
