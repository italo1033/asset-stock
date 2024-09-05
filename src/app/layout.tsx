import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asset Stock",
  description: "Estoque de Ativos de TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
