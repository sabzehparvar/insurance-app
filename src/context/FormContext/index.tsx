"use client";

import React, { createContext, ReactNode, useState } from "react";
export interface OrderInfo {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export interface OrderAddress {
  id: string;
  name: string;
  details: string;
}
interface FormContextType {
  formData: OrderInfo;
  setFormData: React.Dispatch<React.SetStateAction<OrderInfo>>;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<OrderInfo>({
    nationalId: "",
    phoneNumber: "",
    addressId: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
