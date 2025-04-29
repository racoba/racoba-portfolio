"use client"
import Image from "next/image";

interface IProps {
    name: string;
    link: string;
    image: string;
    description: string;
}

export const LatestWorkCard = ({ name, link, image, description }: IProps) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };
    return (
        <div
            onClick={handleClick}
            className="bg-white w-80 h-auto rounded-lg p-3 cursor-pointer">
            <div className="relative w-full h-40 rounded ">
                <Image
                    fill
                    src={image}
                    alt={name} />
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
                <span className="text-gray-700 font-medium ">{name}</span>
                <span className="text-gray-500 font-medium text-xs">{description}</span>
            </div>
        </div>
    )
}