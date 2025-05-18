import "./globals.css";
import localFont from "next/font/local";
import ModalManager from "@/component/Modal/ModalManager";
import { FormProvider } from "@/context/formContext";
import { AddressProvider } from "@/context/adressContext";

const vazirFont = localFont({
  src: "../../public/fonts/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirFont.className}>
        <FormProvider>
          <AddressProvider>
            {children}
            <ModalManager />
          </AddressProvider>
        </FormProvider>
      </body>
    </html>
  );
}
