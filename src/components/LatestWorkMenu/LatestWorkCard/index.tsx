interface IProps {
    name: string;
    link: string;
    image: string;
}

export const LatestWorkCard = ({ name, link, image }: IProps) => {
    return (
        <div className="bg-white w-80 h-56 rounded p-3">
            <div className="bg-[#F5F6FA] h-40 rounded cursor-pointer">

            </div>
            <div className="mt-2">
                <span className="text-gray-700 font-medium ">Name</span>
            </div>
        </div>
    )
}