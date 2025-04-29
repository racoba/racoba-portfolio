'use client';

import Image from "next/image";
import { useState } from "react";

export const BannerSection = () => {
    const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    const getCenterImage = () => {
        if (hovered === "left") return "/images/homem-esquerda.png";
        if (hovered === "right") return "/images/homem-direita.png";
        return "/images/homem-cruzados.png";
    };

    return (
        <div className="w-full bg-[#F3F3F3] h-[70vh] mx-auto flex relative overflow-hidden group">
            <div
                className={`relative h-full transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
                    hovered === "left" ? "w-[70%]" : hovered === "right" ? "w-[30%]" : "w-1/2"
                }`}
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
            >
                <h2 className="text-black text-3xl font-bold mb-4">Front-End</h2>
                {hovered === "left" && (
                    <div className="flex flex-col items-center gap-2 text-black text-xl">
                        <span>React.js</span>
                        <span>Angular</span>
                        <span>Vue.js</span>
                    </div>
                )}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 z-1000">
                <Image
                    src={getCenterImage()}
                    alt="Man"
                    fill
                    className="object-contain transition-all duration-500"
                />
            </div>

            <div
                className={`relative h-full transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
                    hovered === "right" ? "w-[70%]" : hovered === "left" ? "w-[30%]" : "w-1/2"
                }`}
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
            >
                <h2 className="text-black text-3xl font-bold mb-4">Back-End</h2>
                {hovered === "right" && (
                    <div className="flex flex-col items-center gap-2 text-black text-xl">
                        <span>Node.js</span>
                        <span>Python</span>
                        <span>Java</span>
                    </div>
                )}
            </div>
        </div>
    );
};
