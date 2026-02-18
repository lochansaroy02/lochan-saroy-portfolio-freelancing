'use client';

import { Briefcase, CircleUserRound, Home, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const data = [
        { name: "Home", icon: <Home size={"18px"} />, to: "/home" },
        { name: "Work", icon: <Briefcase size={"18px"} />, to: "/work" },
        { name: "About", icon: <CircleUserRound size={"18px"} />, to: "/about" },
        { name: "Contact", icon: <Phone size={"18px"} />, to: "/contact" },
    ];

    return (
        /* Responsive Container: 
           - Mobile: bottom-6, width 90%
           - Desktop: top-4, width auto (md:w-fit)
        */
        <div className="fixed bottom-6 md:top-4 left-1/2 transform -translate-x-1/2 z-50 
          md:h-10 w-[92%] md:w-fit flex items-center h-[60px] justify-center px-2 md:px-4 rounded-full 
         backdrop-blur-md bg-neutral-900/80 text-white border border-neutral-700 shadow-2xl transition-all">

            <div className="flex items-center justify-around w-full md:justify-center md:gap-2">
                {data.map((item, index) => {
                    const isActive = pathname === item.to;

                    return (
                        <div
                            key={index}
                            onClick={() => router.push(item.to)}
                            className="group flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 md:flex-row md:px-4 md:py-1 md:rounded-full md:hover:bg-neutral-800"
                        >
                            {/* The "Active Indicator" Pill (Material 3 Style) */}
                            <div className={`
                                relative flex items-center justify-center
                                w-16 h-8 md:w-auto md:h-auto rounded-full transition-all duration-300
                                ${isActive
                                    ? 'bg-[#4f378b] text-[#e6e1e5] md:bg-white md:text-black'
                                    : 'text-[#cac4d0] hover:bg-neutral-800/50 md:hover:bg-transparent'
                                }
                            `}>
                                {item.icon}
                            </div>

                            {/* Label */}
                            <span className={`
                                text-[12px] md:text-sm font-medium transition-colors duration-300
                                ${isActive ? 'text-[#e6e1e5] md:text-white' : 'text-[#cac4d0]'}
                            `}>
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;