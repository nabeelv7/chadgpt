import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import ToggleTheme from "@/components/ToggleTheme";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh">
      <div className="hidden">
        <ToggleTheme />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex text-xl font-bold items-center gap-2">
            ChadGPT
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

    </div>
  );
}
