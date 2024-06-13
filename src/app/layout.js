import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default : "meal hero",
    template : "%s | meal hero"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavBar />
          <div className="w-11/12 mx-auto">{children}</div>
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
