import AITextArea from "@/components/AITextArea";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ToggleTheme";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl font-medium">Welcome, nabeelv7</h1>
        <AITextArea />
      </section>
    </section>
  );
}
