import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nayer Fki | DevOps & Software Engineer",
    template: "%s | Nayer Fki",
  },
  description:
    "DevOps and Software Engineer focused on cloud infrastructure, automation, secure systems, and reliable web applications.",
  keywords: ["DevOps Engineer", "Software Engineer", "Cloud Engineer", "Docker", "Kubernetes", "Next.js", "Tunisia"],
  openGraph: {
    title: "Nayer Fki | DevOps & Software Engineer",
    description: "Cloud infrastructure, delivery automation, secure systems, and dependable software.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#070b14] text-slate-50 antialiased">{children}</body>
    </html>
  );
}
