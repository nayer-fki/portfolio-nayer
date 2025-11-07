// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayer Fki — Network & Cybersecurity Engineer",
  description:
    "Secure networks (VLAN/DMZ/ASA, SIEM) & modern web apps (MERN/Next.js). Open for PFE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
