import { School, Engineering } from '@mui/icons-material';

export const getIconFromString = (iconString: string) => {
    switch (iconString) {
        case 'SchoolIcon':
            return <School style={{ width: 60, height: 60 }} className="text-gray-800" />
        case 'WorkIcon':
            return <Engineering style={{ width: 60, height: 60 }} className="text-gray-800" />
        default:
            return null;
    }
}