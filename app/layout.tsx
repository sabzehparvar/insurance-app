import "./globals.css";
import localFont from "next/font/local";

const vazirFont = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
}
