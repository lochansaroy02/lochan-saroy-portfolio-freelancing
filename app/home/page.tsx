"use client";
import Docker from "@/assets/icons/Docker";
import Express from "@/assets/icons/Express";
import Java from "@/assets/icons/Java";
import Mongo from "@/assets/icons/Mongo";
import Next from "@/assets/icons/Next";
import Node from "@/assets/icons/Node";
import Postgres from "@/assets/icons/Postgres";

import ReactIcon from "@/assets/icons/React"; // Renamed to avoid conflict with React import
import Tailwind from "@/assets/icons/Tailwind";
import SplitText from "@/components/animata/text/text-split";
import Leetcode from "@/components/Leetcode";
import Button from "@/components/ui/Button";
import { MontserratFont } from "@/utils/fonts";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Code, Code2, Github, Lightbulb, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, useInView } from "motion/react"; // Ensure this import is correct for your version
import { useRef } from 'react';

const Page = () => {
    const paraRef = useRef(null);

    const data = [
        { name: "Leetcode", icon: <Code size={"16px"} /> },
        { name: "Github", icon: <Github size={"16px"} /> },
        { name: "Linkedin", icon: <Linkedin size={"16px"} /> },
        { name: "Twitter", icon: <Twitter size={"16px"} /> },
        { name: "Email", icon: <Mail size={"16px"} /> },
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

    const box = {
        width: 100,
        height: 100,
        backgroundColor: "",
        borderRadius: 5,
    };

    useGSAP(() => {
        // Note: Ensure elements with class 'arr' exist in your DOM for this to work
        const elements = gsap.utils.toArray('.arr');
        gsap.from(elements, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.5
        });
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const marqueeVariants = {
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
        <div className="ml-56 w-fit h-screen px-8 py-12">
            <div>
                <SplitText text="lochan" className="uppercase " />

                <h2 ref={paraRef} className={`text-4xl opacity-75 ${MontserratFont.className}`}>
                    Full Stack Developer
                </h2>
            </div>
            <div className="mt-8 flex gap-4">
                {data.map((item, index) => (
                    <Button key={index} onclick={() => { console.log("hello") }} text={item.name} icon={item.icon} />
                ))}
            </div>

            <p className="mt-4 text-[16px] text-balance font-light">
                I’m a Full Stack Developer crafting lightning-fast websites using MERN & Next.js. From frontend finesse to backend muscle — I bring your vision to life with pixel-perfect precision and performance-driven code.
            </p>
            <div className="mt-8">
                {/* <div className="flex gap-4 items-center">
                    <span className="p-2 rounded-lg bg-[#233212]">
                        <Briefcase className="text-lg text-[#65a30d]" />
                    </span>
                    <h1 className="text-2xl">Top Projects</h1>
                </div> */}

                {/* <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 gap-4 mt-4"
                >
                    {ProjectData.map((item, index) => (
                        <motion.div
                            key={index}
                            //@ts-ignore
                            variants={itemVariants}
                            className="outline outline-neutral-700 flex flex-col justify-between rounded-2xl"
                        >
                            <div>
                                <div className="rounded-t-2xl relative">
                                    <img className="rounded-t-2xl" src={item.image.src} alt="no image" />
                                </div>
                                <div className="px-2 py-1">
                                    <div className="px-2 py-1 my-2 w-fit rounded-2xl  border-gray-700">
                                        <h1 className="text-lg">{item.name}</h1>
                                    </div>
                                    <div className="px-2">
                                        <p className="text-[14px] text-justify">{item.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 flex gap-2 text-sm">
                                <Button text="Code" icon={<Github size={12} />}
                                    onclick={() => { window.open(item.repo, "_blank", "noopener,noreferrer") }} />
                                <Button text="Live" icon={<Globe size={12} />}
                                    onclick={() => { window.open(item.live, "_blank", "noopener,noreferrer") }} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div> */}

                <div className="mt-8 w-full max-w-[800px]">
                    <div className="flex gap-4 items-center">
                        <span className="p-2 rounded-lg bg-[#442310]">
                            <Lightbulb className="text-lg text-[#fcd34d]" />
                        </span>
                        <h1 className="text-2xl">Top Skills</h1>
                    </div>

                    {/* FIXED SECTION STARTS HERE */}
                    <div className="mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50%,black_90%,transparent)]">
                        <motion.div
                            className="flex gap-4 w-max"
                            //@ts-ignore
                            variants={marqueeVariants}
                            animate="animate"
                        >
                            {marqueeSkills.map((item, index) => (
                                <motion.div
                                    style={box}
                                    key={index}
                                    className="flex flex-col gap-1 items-center"
                                >
                                    {/* Logic to show circle background only for the first item of the ORIGINAL list.
                                        Since we duplicated the list, we check index % skills.length */}
                                    {(index % skills.length === 0) ?
                                        <div className="size-24 bg-neutral-100 rounded-full p-1">
                                            {item.icon}
                                        </div> :
                                        <div className="w-24 h-24">
                                            {item.icon}
                                        </div>
                                    }
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    {/* FIXED SECTION ENDS HERE */}
                </div>

                <div className="my-8">
                    <div className="flex gap-4 items-center">
                        <span className="p-2 rounded-lg bg-[#321212]">
                            <Code2 className="text-lg text-[#bd4949]" />
                        </span>
                        <h1 className="text-2xl">Code Stats</h1>
                    </div>
                    <div className="flex gap-4  mt-4">
                        <div className=" flex  items-center ">
                            <Leetcode />
                        </div>
                        {/* <div className="  flex  flex-col gap-4 ">
                            <div className="flex  gap-4   ">
                                <GithubMap src="lang" />
                                <GithubMap src="stats" />
                            </div>
                            <GithubMap />
                        </div> */}
                    </div>

                </div>
                {/* <div className="my-8">
                    <div className="flex gap-4 items-center">
                        <span className="p-2 rounded-lg bg-[#321212]">
                            <Code2 className="text-lg text-[#bd4949]" />
                        </span>
                        <h1 className="text-2xl">Code Stats</h1>
                    </div>


                </div> */}
                <div className="my-4">

                </div>

            </div>
        </div>
    );
}

export default Page;