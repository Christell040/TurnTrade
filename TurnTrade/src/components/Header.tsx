import {Bell, Circle, Menu, User} from "lucide-react";

interface headerProps{
    setSidebarOpen:(data:boolean) => void;
}

export default function Header({setSidebarOpen}:headerProps) {
    return (
        <>
            <header className=" border-b border-white/10 h-16 w-full flex items-center px-4 gap-4  backdrop-blur-xl
                                     justify-between sticky top-0 z-30 bg-zinc-950
                ">

                {/* Hamburger mobile only */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={28} />
                </button>

                <div className="flex items-center gap-4">
                    {/* Left side content if needed, e.g. Breadcrumbs or Page Title */}
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400">Market Open</span>
                        </div>
                        <span className="text-zinc-600">|</span>
                        <span className="text-xs font-mono">Last update: 10:42:15 AM</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-900/50">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
                    </button>

                    <div className="h-6 w-px bg-zinc-800/60"></div>

                    <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                            <User className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </header>

        </>
    );
}