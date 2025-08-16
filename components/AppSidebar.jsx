"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"
import { AlbumIcon, Apple, Globe, Heart, PenBoxIcon, SearchIcon } from "lucide-react"

export default function AppSidebar() {
    const { state } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <div className={`w-full flex justify-center items-center p-2 ${state == "expanded" ? "justify-start" : ""}`}>
                <SidebarTrigger />
            </div>

            <SidebarContent>
                <SidebarContentInner state={state} />
            </SidebarContent>
        </Sidebar>
    )
}

function SidebarContentInner({ state }) {

    return (
        <>
            {/* Actions */}
            <SidebarGroup>
                <SidebarGroupLabel>Actions</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {actions.map((action) => (
                            <SidebarMenuItem key={action.name}>
                                <SidebarMenuButton>
                                    <action.icon />
                                    {action.name}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* GPTs */}
            <SidebarGroup>
                <SidebarGroupLabel>GPTs</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {gpts.map((gpt) =>
                            state === "expanded" ? (
                                <SidebarMenuItem key={gpt.name}>
                                    <SidebarMenuButton>
                                        <gpt.icon />
                                        {gpt.name}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ) : null
                        )}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Chats */}
            <SidebarGroup>
                <SidebarGroupLabel>Chats</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {chats.map((chat) => (
                            <SidebarMenuItem key={chat.name}>
                                <SidebarMenuButton>
                                    {state == "expanded" && <span>{chat.name}</span>}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    )
}

const actions = [
    { name: "New chat", icon: PenBoxIcon },
    { name: "Search chats", icon: SearchIcon },
    { name: "Library", icon: AlbumIcon },
]

const gpts = [
    { name: "Sigma o1 mini", icon: Globe },
    { name: "ChadGPT 5", icon: Apple },
    { name: "Rizzler v3", icon: Heart },
]

const chats = [
    { name: "Increase sidebar size" },
    { name: "Usability design decisions" },
    { name: "Execute SQL with pq" },
    { name: "Create postgres database" },
    { name: "ShadcnUI Button fix" },
    { name: "Binary search in python" },
    { name: "Add nprogress in Next.js" },
    { name: "What is DuckDB" },
    { name: "How to build a JS Compiler" },
    { name: "Typescript implicit any fix" },
    { name: "Rendering templates in Go" },
    { name: "How to use lucide-react" },
    { name: "Next.js 16 new features" }
]
