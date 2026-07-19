import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Solverstreet Technologies | Intelligent Digital Products",
    template: "%s | Solverstreet Technologies"
  },
  description:
    "Enterprise AI, software engineering, automation, cloud, analytics, and digital transformation solutions for global organizations.",
  keywords: [
    "AI agents",
    "digital transformation",
    "Next.js development",
    "Salesforce development",
    "enterprise applications",
    "data analytics"
  ],
  metadataBase: new URL("https://solverstreettechnologies.example"),
  openGraph: {
    title: "Solverstreet Technologies",
    description: "Building intelligent digital products with AI.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
