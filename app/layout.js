import "./globals.css";
export const metadata = {
  title: "Dominican Villas",
  description: "Vacation Homes",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
