import { LatestWorkCard } from "./LatestWorkCard";

interface IWorkProps {
    name: string;
    link: string;
    image: string;
}

interface IProps {
    works: IWorkProps[];
}

export const LatestWorkMenu = ({ works }: IProps) => {
    return (
        <div className="w-full flex flex-row flex-wrap max-w-full justify-evenly gap-y-2 p-1">
            <LatestWorkCard
                name=""
                link=""
                image=""
            />
            <LatestWorkCard
                name=""
                link=""
                image=""
            />

        </div>
    )
}