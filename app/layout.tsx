import { Toaster } from "@/components/ui/sonner";
import { Roboto, Roboto_Mono, Tangerine } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Sai Singireddy - Developer,Problem Solver, Techie",
  description: "A Full-Stack Web Dev and a bit of Everything",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${tangerine.variable}`}
      >
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#1f1f1f",
              color: "#fff",
              fontWeight: 500,
              border: "1px solid #444",
              borderRadius: "10px",
            },
          }}
        />
      </body>
    </html>
  );
}
