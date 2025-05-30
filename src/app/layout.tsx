import "./globals.css";
import localFont from "next/font/local";
import ModalManager from "@/component/Modal/ModalManager";
import { FormProvider } from "@/context/FormContext";
import { AddressProvider } from "@/context/addressContext";
import { Suspense } from "react";
import Spinner from "@/component/ui/Spinner";

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
            <Suspense fallback={<Spinner />}>
              <ModalManager />
            </Suspense>
          </AddressProvider>
        </FormProvider>
      </body>
    </html>
  );
}
