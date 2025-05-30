import isNationalCodeValid from "@/functions/nationalCodeValidation";
import isPhoneNumberValid from "@/functions/phoneNumberValidation";
import { OrderInfo } from "@/context/FormContext";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  nationalId: z
    .string()
    .refine((val) => isNationalCodeValid(val), "کدملی وارد شده معتبر نیست."),
  phoneNumber: z
    .string()
    .refine((val) => isPhoneNumberValid(val), "شماره تلفن همراه معتبر نیست."),
  addressId: z.string().nonempty(),
});

export const useValidateForm = (formData: OrderInfo) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };
  return { validateForm, errors };
};
