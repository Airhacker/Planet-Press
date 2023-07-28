import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Press ",
  description: "Your daily dose of tech news",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
