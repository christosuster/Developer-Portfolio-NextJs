import "./globals.css";

export const metadata = {
  title: "Developer Portfolio",
  description: "Portfolio of Alex Johnson.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111111]">{children}</body>
    </html>
  );
}
