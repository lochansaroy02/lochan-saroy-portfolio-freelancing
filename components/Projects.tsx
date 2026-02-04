
"use client";
import { itemVariants } from "@/utils/animations";
import { motion } from "motion/react";
import Button from "./ui/Button";


const Projects = ({ project }: any) => {
    return (
        //@ts-ignore
        <motion.div variants={itemVariants}>
            <div className="rounded-2xl">
                <img className="rounded-2xl" src={
                    typeof project.image == "string" ?
                        project.image : project.image.src
                } alt="no image" />
            </div>
            <div className="px-2">
                <h1 className="text-xl py-2 ">{project.name}</h1>
                <div className="flex gap-2 ">
                    {
                        project.techStack.map((item: any, index: number) => (
                            <Button key={index} text={item} />
                        ))
                    }
                </div>
            </div>

            <div className="px-2 mt-2 ">
                <Button text="Live" onclick={() => {

                }} />
            </div>
        </motion.div>
    )
}

export default Projects