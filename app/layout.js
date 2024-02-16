import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sora Tracker",
  description: "Weebs only",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/maps.png"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
