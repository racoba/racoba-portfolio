import { Divider } from "@mui/material";
import englishStrings from "@/resources/strings";

export default function Home() {
  const pageStrings = englishStrings.pages;
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="w-full bg-red-500 h-[70vh] mx-auto">
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
    </div>
  );
}
