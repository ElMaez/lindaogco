import Footer from "./(pages)/(global)/components/Footer";

import "./globals.css";
import Header from "./(pages)/(global)/components/Header";

export const metadata = {
  title: "Linda & Co",
  description: "Hjemmeside til Lindvig & Co",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className=" grid grid-cols-1">
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
