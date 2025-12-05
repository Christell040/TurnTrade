import Logo from "../assets/Logo.tsx";
import {BarChart2, Briefcase, LayoutGrid, TrendingUp, User, Wallet, X} from "lucide-react";
import {Link} from "react-router-dom";
import {useState} from "react";

interface sidebarProps {
    sidebarOpen:boolean;
    setSidebarOpen: (data:boolean) => void;
}

export default function SideBar({sidebarOpen,setSidebarOpen}:sidebarProps) {
    const [activeTab, setActiveTab] = useState("/home");


    const navItems = [
        {path:"/dashboard",icon:<LayoutGrid size={15} />,label: "Dashboard" },
        {path:"/portfolio",icon:<Briefcase size={15} />,label: "Briefcase" },
        {path:"/trade",icon:<TrendingUp size={15} />,label: "Trade" },
        {path:"/market",icon:<BarChart2 size={15} />,label: "Market" },
        {path:"/wallet",icon:<Wallet size={15} />,label: "Wallet" },
        {path:"/account",icon:<User size={15} />,label: "Account" },
    ]

    return (
        <>
            {/* Overlay (mobile only) */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black z-40 md:hidden transition-opacity"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`flex flex-col h-screen justify-between fixed md:static z-40 px-2 border-r border-white/10 w-64 min-h-screen transform transition-transform duration-100 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0`} >
                <nav>

                    {/*For the logo and conditional close button*/}
                    <div className="flex justify-between ">
                        <div className=" text-white mb-4 ml-3">
                            <Logo width={70} height={70}/>
                        </div>

                        <div className="flex justify-end p-3 md:hidden"> {/* Close icon mobile only */}
                            <button className="text-white"
                                    onClick={() => setSidebarOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>
                    </div>
                    {/*NavItems*/}
                    <div className="flex flex-col gap-2">
                        {navItems.map((nav, i) => (
                            <Link
                                key={i}
                                to={nav.path}
                                onClick={() => setActiveTab(nav.path)}
                                className={
                                    activeTab === nav.path
                                        ? "flex items-center gap-2 w-full border border-lime-500/30 bg-lime-600/10 text-white px-3 py-2 rounded-lg"
                                        : "flex items-center gap-2 w-full text-zinc-400 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors duration-500"
                                }
                            >
                                {nav.icon} {nav.label}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="p-4 border-t border-zinc-500/50 bg-zinc-950/50">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/30 cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-green-700 flex items-center justify-center text-white text-xs font-bold  transition-all">
                            CTK
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate ">Christell Tawiah</p>
                            <p className="text-sm text-zinc-500 truncate">Pro Account</p>
                        </div>
                    </div>
                </div>

            </aside>

        </>
    );
}