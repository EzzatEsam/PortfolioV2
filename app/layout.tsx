import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background bg-gradient-to-r from-indigo-100 to-yellow-50 font-sans antialiased dark:from-slate-900 dark:to-slate-700",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", enableSystem: true }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="w-screen flex-grow bg-gradient-to-r from-indigo-100 to-yellow-50 dark:from-slate-900 dark:to-slate-700">
              <div className="container m-auto h-full w-full pt-4">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
