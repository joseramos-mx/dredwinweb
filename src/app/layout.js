import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Dr. Edwin Maldonado | Alergología y Dermatología en Durango",
  description: "Dermatólogo y alergólogo certificado en Durango. Dr. Edwin Maldonado: tratamientos de acné, manchas, dermatitis, aplicación de botox, alergias y rejuvenecimiento facial. Atención profesional, humana y personalizada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
