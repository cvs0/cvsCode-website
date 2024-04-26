import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import dynamic from "next/dynamic";

const DynamicMainNav = dynamic(() => import('@/components/main-nav'), { ssr: false });

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CVSCode",
  description: "A fast and simple typescript-based scripting language.",
  icons: [
    "/images/0.png"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
          variables: {
              colorPrimary: 'hsl(263.4, 70%, 50.4%)',
                  },
              }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          "min-h-screen bg-background antialiased",
          montserrat.className
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DynamicMainNav />
            {children}
            <ScrollToTopButton />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
