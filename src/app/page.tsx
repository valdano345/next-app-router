import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Valdano Esnaidar",
  description: "Aplikasi untuk belajar NextJS",
  authors: [{ name: "Valdano Esnaidar", url: "http:://localhost:3000" }],
  icons: {
    icon: "/icon/icon.png",
  },
  openGraph: {
    title: "Home - Valdano Esnaidar",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
