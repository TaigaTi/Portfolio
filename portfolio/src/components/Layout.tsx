import '../styles/Layout.css';
import AppBar from './AppBar';
import { Box } from '@mui/material';

export default function Layout() {
    return (
        <>
            <Box className="text-white">
                <AppBar />
            </Box>
        </>
    );
}