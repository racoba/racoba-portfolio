import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import englishStrings from "@/resources/strings";

const Portfolio = () => {
    const pageStrings = englishStrings.pages.contact;
    return (
        <div className="p-10 flex flex-col gap-4 px-40">
            <div className="flex flex-row gap-2 items-center">
                <EmailIcon style={{ width: 24, height: 24 }} />
                {pageStrings.email}
            </div>
            <div className="flex flex-row gap-2 items-center">
                <LocalPhoneIcon style={{ width: 24, height: 24 }} />
                {pageStrings.phone}
            </div>
        </div>
    )
}

export default Portfolio;