import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ModalManager from "@/component/Modal/ModalManager";
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
        {children}
        <ModalManager />
      </body>
    </html>
  );
}
