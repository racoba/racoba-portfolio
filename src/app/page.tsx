import { Divider } from "@mui/material";
import englishStrings from "@/resources/strings";
import { LatestWorkMenu } from "@/components";

export default function Home() {
  const pageStrings = englishStrings.pages;
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="w-full h-[70vh] mx-auto flex group overflow-hidden">
        <div className="bg-red-500 w-1/2 h-full transition-all duration-500 ease-in-out group-hover:w-[30%] hover:w-[70%]"></div>
        <div className="bg-blue-500 w-1/2 h-full transition-all duration-500 ease-in-out group-hover:w-[30%] hover:w-[70%]"></div>
      </div>
      <div className="flex flex-row w-full md:w-[80%] xl:w-[50%] mx-auto items-center justify-center md:justify-between">
        <Divider color="white"
          orientation="horizontal"
          style={{ width: "35%", height: 0.1, minWidth: 150 }}
          className="hidden md:block"
        />
        <span className="text-lg">{pageStrings.home.myWork}</span>
        <Divider color="white"
          orientation="horizontal"
          style={{ width: "35%", height: 0.1, minWidth: 150 }}
          className="hidden md:block"
        />
      </div>
      <div className="w-full md:w-[80%] xl:w-[50%] mx-auto">
        <LatestWorkMenu works={[]}/>
      </div>
    </div>
  );
}
