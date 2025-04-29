import { TimeLine } from "@/components";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 p-10">
            <span className="text-4xl">Roadmap</span>
            <TimeLine />
        </div>
    )
}

export default About;