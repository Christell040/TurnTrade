export function Login(){
    return(
        <>
            <div className="bg-zinc-950 w-full min-h-screen flex flex-col md:flex-row  justify-center">
            {/* Left image hidden on mobile*/}
                <div className="hidden md:block relative overflow-hidden w-1/2">
                    <img
                        className="h-full w-full object-cover opacity-20 grayscale-50"
                        src="https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt = "Trading floor"
                    />
                    <div className="absolute bottom-10 left-0 p-12 z-20 text-white min-w-[500px]">
                        <p className="text-xl mb-4">TurnTrade</p>
                        <p className="text-4xl font-bold mb-4">Trade With Confidence</p>
                        <p className={"text-lg text-zinc-300"}>Join thousands of traders executing their strategies on our professional platform</p>

                    </div>

                </div>
            {/* Right side for the form   */}
                <div
                    className=" w-full md:w-1/2 flex justify-center items-center text-white">

                    <form className="bg-zinc-900/40 backdrop-blur-2xl min-w-4/7 border border-white/5 p-10 rounded-2xl space-y-5 shadow-2xl">
                        <div className="text-white text-center md:text-left">
                            <p className="text-3xl font-bold">Welcome Back</p>
                            <p className="text-zinc-500">Sign in to your TurnTrade account</p>
                        </div>
                        <div>
                            <label> Email Address</label>
                            <input
                            type="email"
                            name="email"
                            placeholder="Enter your email Address"
                            className="w-full border-1 p-2 rounded"
                            />
                        </div>

                        <div>
                            <label> Password</label>
                            <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full border-1 p-2 rounded"
                            />
                        </div>

                        <button
                            className="w-full border p-2 rounded"
                        >Sign In</button>

                    </form>

                </div>


            </div>
        </>
    );
}