import { Header } from "@/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header></Header>
      {children}
      {modal}
    </main>
  );
}
