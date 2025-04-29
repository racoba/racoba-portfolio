import englishStrings from "@/resources/strings";
import { LatestWorkCard } from "./LatestWorkCard";

export const LatestWorkMenu = () => {
    const componentsStrings = englishStrings.components.latestWorkMenu;
    return (
        <div className="w-full flex flex-row flex-wrap max-w-full justify-evenly gap-y-2 p-1">
            {componentsStrings.map((item, index) => (
                <LatestWorkCard
                    key={index}
                    name={item.name}
                    link={item.link}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </div>
    )
}