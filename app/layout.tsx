import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import './globals.scss'
import Logo from "./components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <Wrapper>
              <Navbar>
                  <Logo href="/" withCaption />
              </Navbar>
              {children}
           </Wrapper>
      </body>
    </html>
  );
}
