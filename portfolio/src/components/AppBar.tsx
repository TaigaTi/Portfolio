import Button from '@mui/material/Button';
import Box from '@mui/material';

export default function AppBar() {
    return (
        <>
            <div className="flex justify-between p-2">
                <div className="flex justify-evenly items-center w-1/5">
                    {/* <img src="/portfolio/public/logo512.png" width="50px" height="50px" alt="" /> */}
                    <h1>Tarika Birch</h1>
                </div>

                <Box className="flex justify-evenly w-1/2 nav-options text-white">
                    <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
                    <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>About Me</Button>
                    <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Portfolio</Button>
                    <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>
                    <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Menu</Button>
                </Box>
            </div>
        </>
    );
}