import {useState} from "react";

import {Outlet} from "react-router-dom";

import SideBar from "../components/Sidebar.tsx";
import Header from "../components/Header.tsx";




export default function PrimaryLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex w-full md:flex-row  bg-zinc-950 min-h-screen relative">


            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main section */}
            <main className="flex flex-1 flex-col relative overflow-y-auto h-screen">

                {/* Header */}
                <Header setSidebarOpen={setSidebarOpen} />

                {/* Main content */}
                <Outlet/>

            </main>
        </div>
    );
}

