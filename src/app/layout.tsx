import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sai Charan | AI Engineer",
  description: "Dark futuristic portfolio with 3D robot background",
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
        <main style={{ paddingTop: "90px" }}>{children}</main>
      </body>
    </html>
  );
}
