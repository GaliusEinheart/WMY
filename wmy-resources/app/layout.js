import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WMY Resources (M) Sdn Bhd | M&E Contractor & Power Solutions",
  description:
    "Established in 1993, WMY Resources is a leading Bumiputera M&E contractor specializing in electrical, mechanical, solar, fiber optic, and UPS systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}