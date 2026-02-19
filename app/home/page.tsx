"use client";
import Docker from "@/assets/icons/Docker";
import Express from "@/assets/icons/Express";
import Java from "@/assets/icons/Java";
import Mongo from "@/assets/icons/Mongo";
import Next from "@/assets/icons/Next";
import Node from "@/assets/icons/Node";
import Postgres from "@/assets/icons/Postgres";
import ReactIcon from "@/assets/icons/React";
import Tailwind from "@/assets/icons/Tailwind";
import SplitText from "@/components/animata/text/text-split";
import Leetcode from "@/components/Leetcode";
import Button from "@/components/ui/Button";
import { MontserratFont } from "@/utils/fonts";

import profile from "@/public/images/profile2.jpg";


import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Code, Code2, Github, Lightbulb, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, Variants } from "motion/react"; // Note: ensure this matches your framer-motion version
import Image from "next/image";
import { useRef } from 'react';

const Page = () => {
    const paraRef = useRef(null);
    const data = [
        { name: "Leetcode", Icon: Code },
        { name: "Github", Icon: Github },
        { name: "Linkedin", Icon: Linkedin },
        { name: "Twitter", Icon: Twitter },
        { name: "Email", Icon: Mail },
    ];

    const skills = [
        { name: "NextJS", icon: <Next /> },
        { name: "MongoDB", icon: <Mongo /> },
        { name: "NodeJS", icon: <Node /> },
        { name: "Express", icon: <Express /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Postgres", icon: <Postgres /> },
        { name: "Tailwind", icon: <Tailwind /> },
        { name: "Docker", icon: <Docker /> },
        { name: "Java", icon: <Java /> },
    ];

    // Duplicating skills array for seamless infinite scroll
    const marqueeSkills = [...skills, ...skills];

    useGSAP(() => {
        const elements = gsap.utils.toArray('.arr');
        if (elements.length > 0) {
            gsap.from(elements, {
                y: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2 // Reduced stagger time slightly for better UX
            });
        }
    }, []);

    const marqueeVariants: Variants = {
        animate: {
            x: ["0%", "-50%"],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            }
        }
    };

    return (
        /* 1. Changed to min-h-screen so content can scroll if it exceeds screen height
           2. Changed w-fit to w-full max-w-5xl 
           3. Added mobile padding (px-4 py-8)
        */
        <div className="md:ml-56 lg:ml-64 flex w-full max-w-6xl min-h-screen flex-col items-center overflow-x-hidden px-4 py-8 md:px-8 lg:py-12">

            <div className="my-4 flex flex-col px-4 lg:hidden">

                {/* Avatar */}
                <div
                    className=""
                >


                    <Image
                        alt="no image"
                        src={profile.src}
                        width="150"
                        height="150"
                    />
                </div>
                {/* Availability */}
                <div className="mt-2 flex gap-2 items-center rounded-2xl border border-green-600 lg:px-3 px-1.5 py-0.5 lg:py-1">
                    <div className="relative w-2 h-2 rounded-full bg-green-500">
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <span className="text-sm lg:text-lg">Available for work</span>
                </div>
            </div>
            <div className="arr flex  items-center flex-col">
                <SplitText text="lochan" className="uppercase" />
                <h2 ref={paraRef} className={`text-2xl md:text-3xl lg:text-4xl opacity-75 mt-2 ${MontserratFont.className}`}>
                    Full Stack Developer
                </h2>
            </div>

            {/* Added 'arr' class */}
            <p className="arr mt-4 text-xs md:text-base lg:text-lg text-balance font-light max-w-3xl text-neutral-300">
                I’m a Full Stack Developer crafting lightning-fast websites using MERN & Next.js. From frontend finesse to backend muscle — I bring your vision to life with pixel-perfect precision and performance-driven code.
            </p>

            {/* Social Links - Responsive Flex Wrap */}
            <div className="arr w-full mt-8">
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {data.map((item, index) => (
                        <Button
                            key={index}
                            text={item.name}
                            icon={<item.Icon className="w-4 h-4 md:w-5 md:h-5" />}
                            className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2"
                        />
                    ))}
                </div>
            </div>

            {/* Top Skills Marquee */}
            <div className="arr mt-12 w-full lg:max-w-[800px]">
                <div className="flex gap-3 md:gap-4 items-center mb-6">
                    <span className="p-1.5 md:p-2 rounded-lg bg-[#442310]">
                        <Lightbulb className="text-base md:text-lg text-[#fcd34d]" />
                    </span>
                    <h1 className="text-xl md:text-2xl font-semibold">Top Skills</h1>
                </div>

                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex gap-6 md:gap-10 w-max"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {marqueeSkills.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 items-center justify-center shrink-0"
                            >
                                {/* Removed hardcoded inline styles. Used responsive tailwind sizing */}
                                {(index % skills.length === 0) ? (
                                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-neutral-100 rounded-full p-2 flex items-center justify-center shadow-sm">
                                        {item.icon}
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Code Stats Section */}
            <div className="arr mt-12 mb-8">
                <div className="flex gap-3 md:gap-4 items-center mb-6">
                    <span className="p-1.5 md:p-2 rounded-lg bg-[#321212]">
                        <Code2 className="text-base md:text-lg text-[#bd4949]" />
                    </span>
                    <h1 className="text-xl md:text-2xl font-semibold">Code Stats</h1>
                </div>

                {/* Made the Leetcode container responsive instead of a fixed 64 width */}
                <div className="flex flex-col lg:flex-row gap-6 mt-4 w-full">
                    <div className="flex w-full md:w-auto min-w-[280px] max-w-sm items-center">
                        <Leetcode />
                    </div>
                    {/* Uncomment and adjust GithubMap wrappers similarly when ready */}
                    {/* <div className="flex flex-col gap-4 w-full">
                        ...
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Page;
