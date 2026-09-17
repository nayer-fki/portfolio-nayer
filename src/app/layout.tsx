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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var l=t?t==='light':window.matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.classList.toggle('light',l)}catch(e){}})()` }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
