import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

import StoreProvider from "./StoreProvider";
import AppNav from "./components/nav/AppNav";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gueess",
  description: "Guess the hidden number",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={inter.className}>
        <StoreProvider>
          <AppNav />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
