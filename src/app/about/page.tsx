
import { TimeLine } from "@/components";
import englishStrings from "@/resources/strings";

const About = () => {
    const pageStrings = englishStrings.pages.about;
    return (
        <div className="flex flex-col items-center justify-center gap-1 p-10 px-40">
            <div className="flex flex-col gap-10">
                <span className="text-4xl mx-auto">About Me</span>
                {pageStrings.aboutMe.map((text, index) => (
                    <p key={index} className="text-lg text-justify">{text}</p>
                ))}
            </div>
            <span className="text-4xl mt-10">Roadmap</span>
            <div className="flex flex-col relative group">
                <TimeLine />
            </div>
        </div>
    )
}

export default About;