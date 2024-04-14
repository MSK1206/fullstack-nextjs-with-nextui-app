import Image from "next/image";
import { ThemeSwitcher } from "./components/themes/ThemeSwicher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ThemeSwitcher />
    </main>
  );
}
