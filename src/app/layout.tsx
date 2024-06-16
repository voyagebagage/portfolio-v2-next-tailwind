import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Provider from "./provider/Provider";
// import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>
        <Provider>
          <main className="relative flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
