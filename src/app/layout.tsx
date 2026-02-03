import "./globals.css";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sai Charan | AI Engineer",
  description: "Dark futuristic AI portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="pt-28 px-6">
          <PageTransition>{children}</PageTransition>
          <Footer />
        </main>
      </body>
    </html>
  );
}
