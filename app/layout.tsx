import type { Metadata } from "next";
import { JetBrains_Mono as FontSans } from "next/font/google";
// import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: "Cooper Ellidge",
      url: siteConfig.url,
    },
  ],
  creator: "Cooper Ellidge",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              {/* <SiteHeader /> */}
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
