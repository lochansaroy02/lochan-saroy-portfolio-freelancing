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
                            className={`
                    group flex flex-col items-center gap-1 cursor-pointer transition-all duration-300
                    md:flex-row md:px-5 md:py-2 md:rounded-full
                    ${isActive
                                    ? 'text-[#e6e1e5] md:bg-white md:text-black' // Unified active state for md/lg
                                    : 'text-[#cac4d0] md:hover:bg-neutral-800'
                                }
                `}
                        >
                            {/* Icon Container: Material 3 Pill on Mobile, Transparent on Desktop */}
                            <div className={`
                    relative flex items-center justify-center
                    w-16 h-8 rounded-full transition-all duration-300
                    md:w-auto md:h-auto md:bg-transparent 
                    ${isActive
                                    ? 'bg-[#4f378b] text-[#e6e1e5] md:text-inherit' // Pill color on mobile, inherit black on desktop
                                    : 'bg-transparent text-[#cac4d0] group-hover:bg-neutral-800/50 md:group-hover:bg-transparent'
                                }
                `}>
                                {/* Applying size constraints to icon if needed */}
                                <div className="md:scale-110">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Label: Aligned with the icon color on both platforms */}
                            <span className={`
                    text-[12px] md:text-sm font-medium transition-colors duration-300
                    ${isActive
                                    ? 'text-[#e6e1e5] md:text-inherit'
                                    : 'text-[#cac4d0]'
                                }
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