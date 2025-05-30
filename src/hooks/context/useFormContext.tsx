import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
