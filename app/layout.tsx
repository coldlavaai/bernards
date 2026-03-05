import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bernards Estate Agents | Portsmouth",
  description: "Expert estate agents serving Portsmouth, Southsea, Fareham, Gosport and surrounding areas since 1990.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
