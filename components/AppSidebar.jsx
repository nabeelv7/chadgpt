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
} from "@/components/ui/sidebar"
import { AlbumIcon, Apple, Globe, Heart, PenBoxIcon, SearchIcon } from "lucide-react"

export default function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <div className="w-full flex justify-start items-center p-2">
                <SidebarTrigger />
            </div>

            <SidebarContent>
                {/* actions */}
                <SidebarGroup>
                    <SidebarGroupLabel>Actions</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {actions.map((action) => {
                                return (
                                    <SidebarMenuItem key={action.name}>
                                        <SidebarMenuButton>
                                            <action.icon /> {action.name}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                {/* GPTs */}
                <SidebarGroup>
                    <SidebarGroupLabel>GPTs</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {gpts.map((gpt) => {
                                return (
                                    <SidebarMenuItem key={gpt.name}>
                                        <SidebarMenuButton>
                                            <gpt.icon /> {gpt.name}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* chats */}
                <SidebarGroup>
                    <SidebarGroupLabel></SidebarGroupLabel>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

const actions = [
    {
        name: "New chat",
        icon: PenBoxIcon
    },
    {
        name: "Search chats",
        icon: SearchIcon
    },
    {
        name: "Library",
        icon: AlbumIcon
    }
]

const gpts = [
    {
        name: "Sigma o1 mini",
        icon: Globe,
    },
    {
        name: "ChadGPT 5",
        icon: Apple,
    },
    {
        name: "Rizzler v3",
        icon: Heart,
    }
]