import "./globals.css";
import Link from "next/link";
import Nav from "@/components/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav href={[
          {label: "Home", path: "/"},
          {label: "About", path: "/about"},
          {label: "Contact", path: "/contact"},
          {label: "Food Listing", path: "/foodListing"}
        ]}/>
        <div className="content-wrap">

          {children}
        </div>
      </body>
    </html>
  );
}
