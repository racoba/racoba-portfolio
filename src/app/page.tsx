import { Divider } from "@mui/material";
import englishStrings from "@/resources/strings";
import { BannerSection, LatestWorkMenu } from "@/components";

export default function Home() {
  const pageStrings = englishStrings.pages;
  return (
    <div className="flex flex-col gap-10 w-full pb-6">
      <BannerSection />

      <div className="flex flex-row w-full md:w-[80%] xl:w-[50%] mx-auto items-center justify-center md:justify-between">
        <Divider color="white"
          orientation="horizontal"
          style={{ width: "35%", height: 0.1, minWidth: 150 }}
          className="hidden md:block"
        />
        <span className="text-2xl">{pageStrings.home.myWorks}</span>
        <Divider color="white"
          orientation="horizontal"
          style={{ width: "35%", height: 0.1, minWidth: 150 }}
          className="hidden md:block"
        />
      </div>
      <div className="w-full md:w-[80%] xl:w-[50%] mx-auto">
        <LatestWorkMenu />
      </div>
    </div>
  );
}
