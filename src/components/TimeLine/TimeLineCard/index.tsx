interface IProps {
    title: string;
    description: string;
}

export const TimeLineCard = ({ title, description }: IProps) => {
    return (
        <div className="flex flex-col bg-white rounded-lg p-4 shadow-lg min-w-[200px] z-1000">
            <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};
