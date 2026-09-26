import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azlonai.com"),
  title: {
    default: "Azlon AI | Custom AI Agents & Automation Agency",
    template: "%s | Azlon AI",
  },
  description:
    "Azlon AI designs custom AI agents and automations that save your team hours every week, capture more leads, and scale your operations without hiring more people.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Azlon AI | Custom AI Agents & Automation Agency",
    description:
      "Custom AI agents and business automations that save your team hours every week.",
    url: "https://azlonai.com",
    siteName: "Azlon AI",
    images: ["/images/sanjay.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azlon AI | Custom AI Agents & Automation Agency",
    description:
      "Custom AI agents and business automations that save your team hours every week.",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('azlon-theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
