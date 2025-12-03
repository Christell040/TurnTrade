import {Mail, Lock, User} from "lucide-react";
import {useState} from "react";
import Logo from "../assets/Logo.tsx"




export default  function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = ()=>{
        setIsLoading(true);
    }

    return (
        <>
            <div className="bg-zinc-950 w-full min-h-screen flex flex-col md:flex-row justify-center">

                {/* LEFT IMAGE — hidden on mobile */}
                <div className="hidden md:block relative w-1/2 overflow-hidden">
                    <img
                        className="h-full w-full object-cover opacity-20"
                        src="https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?q=80&w=872&auto=format&fit=crop"
                        alt="Trading floor"
                    />

                    {/* Lime overlay */}
                    <div className="absolute inset-0 bg-lime-200 mix-blend-multiply"></div>

                    <div className="absolute bottom-20 left-10 text-white max-w-md z-10">
                        <p className="text-xl "> <Logo width={200} height={200} /> </p>
                        <p className="text-4xl font-bold leading-tight mb-3">
                            <span className="text-lime-500">Trade</span> With Confidence
                        </p>
                        <p className="text-lg text-zinc-300">
                            Join thousands of traders executing their strategies on our professional platform.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE — form centered on all screens */}
                <div className="w-full md:w-1/2 flex justify-center items-center px-4 py-10">

                    <form
                        onSubmit={handleSubmit}
                        className="bg-zinc-900/40 hover:bg-zinc-900/60 backdrop-blur-2xl w-full max-w-md border border-white/5 p-8 md:p-10 space-y-7 rounded-2xl  shadow-xl">

                        {/* Header */}
                        <div className="text-white text-center md:text-left">
                            <p className="text-3xl font-bold">Create Account</p>
                            <p className="text-zinc-500">Join TurnTrade and start trading</p>
                        </div>

                        {/*For First name and last name*/}
                        <div className="flex gap-4">
                            <div >
                                <label className="text-sm text-zinc-300  ">First Name</label>
                                <div className="relative">
                                    <User  className="absolute left-3 top-4.5 h-4 w-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full pl-10 border  border-white/10 p-3 rounded bg-black/20 text-white focus:outline-none
                                                focus:ring-1 focus:ring-lime-500 "
                                    />
                                </div>
                            </div>
                            <div >
                                <label className="text-sm text-zinc-300  ">Last Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-4.5 h-4 w-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full pl-10 border  border-white/10 p-3 rounded bg-black/20 text-white focus:outline-none
                                                focus:ring-1 focus:ring-lime-500 "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div >
                            <label className="text-sm text-zinc-300  ">Email Address</label>
                            <div className="relative">
                                <Mail  className="absolute left-3 top-4.5 h-4 w-4 text-zinc-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 border  border-white/10 p-3 rounded bg-black/20 text-white focus:outline-none
                                                focus:ring-1 focus:ring-lime-500 "
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-zinc-300">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-4 h-4 w-4 text-zinc-500" />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 border  border-white/10 p-3 rounded bg-black/20 text-white focus:outline-none
                                                focus:ring-1 focus:ring-lime-500 "                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type={"submit"}
                            className="w-full p-3 rounded-lg bg-lime-600 hover:bg-lime-500 transition font-medium text-white">
                            {isLoading?"Signing Up":"Sign Up"}
                        </button>

                        {/* Footer text */}
                        <div className="text-center text-sm text-zinc-500 p-5 border-0  border-t-1 border-t-zinc-800">
                            Already have an account?{" "}
                            <span className="text-lime-600 hover:underline cursor-pointer">Sign in</span> {/*will adjust later to a link*/}
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
