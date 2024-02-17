import type { Metadata } from "next";
import { notoSansJP } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friday Night Plan",
  description: "Friday Night Plan",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={cn(notoSansJP.variable, "font-sans")}>{children}</body>
    </html>
  );
};

export default RootLayout;
