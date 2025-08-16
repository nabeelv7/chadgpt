import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOutIcon } from "lucide-react"

export default function Navbar() {
    return (
        <header>
            <nav className="flex w-full justify-between p-5 border">
                <Link href="/">
                    <h1 className="text-2xl font-medium">
                        ChadGPT
                    </h1>
                </Link>
                <UserDropdown />
            </nav>
        </header>
    )
}

export function UserDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10}>
                <DropdownMenuLabel>
                    <h1 className="font-medium">nabeelv7</h1>
                    <p className="opacity-80">nabeel@email.com</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}