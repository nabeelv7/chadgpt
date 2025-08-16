import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Navbar() {
    return (
        <header>
            <nav className="flex w-full justify-between p-5 border">
                <h1 className="text-2xl font-medium">ChadGPT</h1>
                <UserDropdown />
            </nav>
        </header>
    )
}

export function UserDropdown() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}