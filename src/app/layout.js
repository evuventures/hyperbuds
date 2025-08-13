import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Hyperbuds – Collaborative AI Platform for Seamless Teamwork",
  description: "Hyperbuds brings collaborators together with AI, providing the tools and connections needed to enhance productivity and foster creativity in every project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}