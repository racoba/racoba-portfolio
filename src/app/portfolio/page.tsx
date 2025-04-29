import { LatestWorkCard } from "@/components/";
import englishStrings from "@/resources/strings";

const Portfolio = () => {
    const pageStrings = englishStrings.pages.portfolio;
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-y-6 p-10 px-40">
                <span className="text-4xl mx-auto">{pageStrings.myWorks}</span>
                <div className="flex flex-col gap-10 lg:px-8">
                    <div className="flex flex-row gap-10 flex-wrap justify-center">
                        {pageStrings.works.map((work, index) => (
                            <LatestWorkCard
                                description={work.description}
                                image={work.image}
                                link={work.link}
                                name={work.name}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;