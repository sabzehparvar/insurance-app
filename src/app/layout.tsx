
import "./globals.css";
import localFont from "next/font/local";
import ModalManager from "@/components/shared/Modal/ModalManager";
import { FormProvider } from "@/context/formContext";
import { AddressProvider } from "@/context/addressContext";
import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";

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
