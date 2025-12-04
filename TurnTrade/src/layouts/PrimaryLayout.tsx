import {useState} from "react";
import {
    Menu,
    X,
    Bell,
    Circle,
    User,
    LayoutGrid,
    Briefcase,
    TrendingUp,
    BarChart2,
    Wallet,
    Plus,
    DollarSign, ArrowUpRight, Activity, ArrowRight
} from "lucide-react";
import {Link} from "react-router-dom";
import Logo from "../assets/Logo.tsx";



export default function PrimaryLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("/home");

    const navItems = [
    {path:"/home",icon:<LayoutGrid size={15} />,label: "Dashboard" },
    {path:"/portfolio",icon:<Briefcase size={15} />,label: "Briefcase" },
    {path:"/trade",icon:<TrendingUp size={15} />,label: "Trade" },
    {path:"/market",icon:<BarChart2 size={15} />,label: "Market" },
    {path:"/wallet",icon:<Wallet size={15} />,label: "Wallet" },
    {path:"/account",icon:<User size={15} />,label: "Account" },
    ]
    return (
        <div className="flex flex-col w-full md:flex-row overflow-hidden bg-zinc-950 min-h-screen relative">

            {/* Overlay (mobile only) */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black z-40 md:hidden transition-opacity"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`flex flex-col justify-between fixed md:static z-40 px-2 border-r border-white/10 w-64 min-h-screen transform transition-transform duration-100 
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

            {/* Main section */}
            <main className="flex flex-1 flex-col relative">

                {/* Header */}
                <header className="border-b border-white/10 h-16 w-full flex items-center px-4 gap-4  backdrop-blur-xl
                                     justify-between sticky top-0 z-30
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
                                <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
                                <span className="text-xs font-medium text-emerald-400">Market Open</span>
                            </div>
                            <span className="text-zinc-600">|</span>
                            <span className="text-xs font-mono">Last update: 10:42:15 AM</span>
                        </div>
                    </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-900/50">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
                    </button>

                    <div className="h-6 w-px bg-zinc-800/60"></div>

                    <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                            <User className="w-4 h-4" />
                        </div>
                    </button>
                </div>
                </header>

                {/* Main content */}
                <div className="flex-1 overflow-y-auto  p-4 text-white">
                    {/*1st row - Greetings and stuff*/}
                    <div className="flex flex-col gap-5 md:flex-row justify-between mb-8">
                        <div>
                            <p className="text-3xl font-medium mb-1">Good Afternoon,Trader</p>
                            <p className={"text-zinc-400"}>Here's whats happening with your portfolio today</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className={"flex items-center gap-2 px-4 py-3 font-semibold rounded-lg text-sm bg-zinc-500/30 border border-white/10 hover:bg-zinc-400/50"}

                            >
                                <Wallet size={16}/>
                                Deposit
                            </button>
                            <button
                                className={"flex items-center gap-2 px-4 py-3 font-semibold rounded-lg text-sm bg-lime-600 hover:bg-lime-500"}
                            >
                                <Plus size={16}/> New Order
                            </button>
                        </div>
                    </div>

                    {/*2nd row - quick summmary*/}
                    <div className="flex flex-col md:flex-row gap-3 mb-8 ">
                        <div className="bg-zinc-500/20 border border-white/5  p-6 rounded-xl flex-1">
                            <div className="flex justify-between mb-4 ">
                                <div className="p-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-300">
                                    <DollarSign size={16}/>
                                </div>
                                <div className="flex gap-1 px-4 py-1 rounded-4xl items-center text-emerald-400 bg-emerald-900/20 border border-emerald-300/20">
                                    <ArrowUpRight size={16}/> +2.4%
                                </div>
                            </div>
                            <div>
                                <p className={"font-semibold text-3xl mb-1"}>$124,592.00</p>
                                <p className="text-sm text-zinc-400" >Total Net Worth</p>
                            </div>
                        </div>

                        <div className="bg-zinc-500/20 border border-white/5  p-6 rounded-xl flex-1">
                            <div className="flex justify-between mb-4 ">
                                <div className="p-2 rounded-lg text-emerald-400 bg-emerald-900/20 border border-emerald-300/20">
                                    <Activity size={16}/>
                                </div>
                                <div className="flex gap-1 px-4 py-1 rounded-4xl items-center text-emerald-400 bg-emerald-900/20 border border-emerald-300/20">
                                    <ArrowUpRight size={16}/> +$2000
                                </div>
                            </div>
                            <div>
                                <p className={"font-semibold text-3xl mb-1"}>$4328.00</p>
                                <p className="text-sm text-zinc-400" >Days P/L</p>
                            </div>
                        </div>

                        <div className="bg-zinc-500/20 border border-white/5  p-6 rounded-xl flex-1">
                            <div className="flex justify-between mb-4 ">
                                <div className="p-2 bg-indigo-500/20 border border-indigo-600/30 rounded-lg text-indigo-300">
                                    <TrendingUp size={16}/>
                                </div>
                                <div className="flex gap-1 px-4 py-1 text-zinc-300 rounded-4xl items-center bg-zinc-600/40 border border-zinc-300/20">
                                    5 active
                                </div>
                            </div>
                            <div>
                                <p className={"font-semibold text-3xl mb-1"}>12</p>
                                <p className="text-sm text-zinc-400" >Open Positions</p>
                            </div>
                        </div>


                    </div>

                    {/*3rd Market - Overview and alerts*/}
                    <div className="flex flex-col md:flex-row gap-3 ">

                    {/* Left: 2x width on desktop */}
                    <div className="basis-full md:basis-2/3">

                        {/* Header stays full width, never part of the flex swap */}
                        <div className="flex justify-between mb-4">
                            <p className="font-semibold">Market Overview</p>
                            <p className="flex items-center text-sm text-lime-600  hover:text-lime-500 cursor-pointer">
                                View All <ArrowRight size={16}/>
                            </p>
                        </div>

                        {/* Only THIS part changes layout on screen size */}
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="bg-zinc-500/20 border border-white/5  p-6 rounded-xl flex-1">
                            <p className={"font-semibold text-sm text-zinc-300 mb-2"}>S&P 500</p>
                                <p className={"text-xl"}>4,783.45</p>
                            </div>
                            <div className="bg-zinc-500/20 border border-white/5  p-6 rounded-xl flex-1">
                            <p className={"font-semibold text-sm text-zinc-300 mb-2"}>NASDAQ</p>
                                <p className={"text-xl"}>15002</p>
                            </div>
                        </div>

                    </div>

                    {/* Right: 1x width on desktop */}
                    <div className="basis-full md:basis-1/3 border border-blue-500"></div>



                    </div>





                </div>

            </main>
        </div>
    );
}


