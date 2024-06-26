import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { NavBar } from "./_components/navbar";
import AuthProvider from "./auth-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "E-commerce",
  description: "A E-Commerce website for screening assignment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <AuthProvider>
            <NavBar />
            {children}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
