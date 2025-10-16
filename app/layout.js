import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carolyn's Portfolio",
  description: "Web Designer with 4 years of experience, specializing in UI/UX and front-end development, creating user-focused, intuitive digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
