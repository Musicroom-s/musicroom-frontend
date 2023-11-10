import ToasterContext from "@/Context/ToasterContext";
import "./globals.css";
import type { Metadata } from "next";
import toast, { Toaster } from "react-hot-toast";
import TanstackProvider from "@/Context/TanstackProvider";
import { SocketProvider } from "@/Context/SocketProvider";

export const metadata: Metadata = {
  title: "Music Room",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SocketProvider>
          <TanstackProvider>
            <ToasterContext />
            {children}
          </TanstackProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
