import "./globals.css";
import Header from "./_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
