import {Activity, ArrowRight, ArrowUpRight, Bell, DollarSign, Plus, TrendingUp, Wallet} from "lucide-react";
import Sym from "../components/Sym.tsx";

export default function Dashboard(){
    const holdings = [
        { symbol: 'AAPL', qty: 15, cur: 182.63, pnl: 561.45, portfolio: 'Main' },
        { symbol: 'MSFT', qty: 24, cur: 312.40, pnl: 537.60, portfolio: 'Tech' },
        { symbol: 'TSLA', qty: 10, cur: 234.25, pnl: -157.50, portfolio: 'Growth' },
        { symbol: 'NVDA', qty: 15, cur: 485.10, pnl: 976.50, portfolio: 'Tech' }
    ];
    return (
        <>
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
                    <div className="glass-card  p-6 rounded-xl flex-1">
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

                    <div className="glass-card  p-6 rounded-xl flex-1">
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

                    <div className="glass-card  p-6 rounded-xl flex-1">
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
                <div className="flex flex-col md:flex-row gap-3 mb-8">

                    {/* Left: 2x width on desktop */}
                    <div className="basis-full md:basis-2/3">


                        <div className="flex justify-between mb-4">
                            <p className="font-semibold">Market Overview</p>
                            <p className="flex items-center text-sm text-lime-600  hover:text-lime-500 cursor-pointer">
                                View All <ArrowRight size={16}/>
                            </p>
                        </div>


                        <div className="flex flex-col md:flex-row gap-3 mb-3">
                            <div className=" flex justify-between glass-card  p-6 rounded-xl flex-1">
                                <div >
                                    <Sym ticker={"amzn"}/>
                                    <p className={"font-semibold text-sm text-zinc-300 mt-2"}>Amazon</p>
                                </div>
                                <p className={"text-xl"}>4,783.45</p>
                            </div>
                            <div className=" flex justify-between glass-card  p-6 rounded-xl flex-1">
                                <div >
                                    <Sym ticker={"aapl"}/>
                                    <p className={"font-semibold text-sm text-zinc-300 mt-2"}>Apple</p>
                                </div>
                                <p className={"text-xl"}>8797</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3" >
                            <div className=" flex justify-between glass-card  p-6 rounded-xl flex-1">
                                <div >
                                    <Sym ticker={"orcl"}/>
                                    <p className={"font-semibold text-sm text-zinc-300 mt-2"}>Oracle</p>
                                </div>
                                <p className={"text-xl"}>4122</p>
                            </div>
                            <div className=" flex justify-between glass-card  p-6 rounded-xl flex-1">
                                <div >
                                    <Sym ticker={"msft"}/>
                                    <p className={"font-semibold text-sm text-zinc-300 mt-2"}>Microsoft</p>
                                </div>
                                <p className={"text-xl"}>5657</p>
                            </div>

                        </div>

                    </div>

                    {/* Right: 1x width on desktop */}
                    <div className="basis-full md:basis-1/3  pt-10">

                        <div className="glass-card h-full rounded-xl p-5" >
                            <div className="flex justify-between mb-4">
                                <p>Market Alerts</p>
                                <Bell size={17}/>
                            </div>
                            <div className="w-full p-4 bg-zinc-700/30  border border-zinc-100/10 rounded-xl p-5 mb-3">
                                <p className={"text-blue-300 text-sm"}>Price Alert</p>
                                <p className={"font-light"}>AAPL crossed above $185.4</p>
                            </div>
                            <div className="w-full p-4 bg-zinc-700/30  border border-zinc-100/10 rounded-xl p-5">
                                <p className={"text-blue-300 text-sm"}>Price Alert</p>
                                <p className={"font-light"}>AMZN crossed above $185.4</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between mb-4">
                    <p className="font-semibold">All Holdings</p>
                    <p className="flex items-center text-sm text-lime-600  hover:text-lime-500 cursor-pointer">
                        View All <ArrowRight size={16}/>
                    </p>
                </div>
                {/*4th row holdings table*/}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-900/50 text-xs uppercase font-medium text-zinc-500 border-b border-zinc-800/60">
                            <tr>
                                <th className="px-6 py-3 font-medium">Symbol</th>
                                <th className="px-6 py-3 font-medium text-right">Qty</th>
                                <th className="px-6 py-3 font-medium text-right">Current Price</th>
                                <th className="px-6 py-3 font-medium text-right">Unrealized P/L</th>
                                <th className="px-6 py-3 font-medium text-right">Portfolio</th>
                                <th className="px-6 py-3 font-medium text-right">Action</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/40">
                            {holdings.map((item, i) => (
                                <tr key={i} className="hover:bg-zinc-800/20 transition-colors">
                                    <td className="px-6 py-4 font-medium text-zinc-200">{item.symbol}</td>

                                    <td className="px-6 py-4 text-right text-zinc-400">{item.qty}</td>

                                    <td className="px-6 py-4 text-right text-zinc-200">
                                        ${item.cur.toFixed(2)}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <div className={`font-medium ${item.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {item.pnl >= 0 ? '+' : ''}${Math.abs(item.pnl).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right text-zinc-200">
                                        {item.portfolio}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button className="px-3 py-1 text-xs font-medium bg-lime-500/10 text-lime-400 border border-lime-500/20 rounded hover:bg-lime-500/20 transition-colors">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        </>
    );
}