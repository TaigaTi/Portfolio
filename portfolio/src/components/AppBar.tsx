import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <>
            <div className="flex justify-between p-2 py-3">
                <div className="flex justify-evenly items-center w-1/5">
                    <img src={logo} width={40} height={40} alt="" />
                    <h1>Tarika Birch</h1>
                </div>

                <Box className="flex justify-evenly w-1/2 nav-options text-white">
                    <Link to="/">
                        <Button variant="text" sx={{ color: 'white', textTransform: 'none', borderRadius: 10, paddingX: 3 }}>Home</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="text" sx={{ color: 'white', textTransform: 'none', borderRadius: 10, paddingX: 3 }}>About Me</Button>
                    </Link>
                    <Link to="/projects">
                        <Button variant="text" sx={{ color: 'white', textTransform: 'none', borderRadius: 10, paddingX: 3 }}>Projects</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="text" sx={{ color: 'white', textTransform: 'none', borderRadius: 10, paddingX: 3 }}>Contact</Button>
                    </Link>
                </Box>
            </div>
        </>
    );
}