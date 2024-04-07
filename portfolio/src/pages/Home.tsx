import { Button } from '@mui/material';
import Layout from '../components/Layout';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import headshot from '../assets/images/headshot.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Box className="text-white">
                <Layout />

                <Box className="flex items-center" sx={{ height: 500 }}>
                    <Box className="justify-center" sx={{ width: '75%', padding: 15 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: "#D1B79D",
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                paddingBottom: 3
                            }}>
                            Design. Develop. Deliver.
                        </Typography>

                        <Typography variant="body2" sx={{ paddingBottom: 5, lineHeight: 1.5 }}>
                            Welcome to the digital playground of a versatile software developer
                            with a passion for crafting immersive experiences. From designing sleek
                            websites and intuitive UX/UI interfaces to developing engaging games with
                            captivating graphics and art – I bring creativity to the code. Explore my
                            portfolio and discover the seamless fusion of technology and design in my
                            diverse projects.
                        </Typography>

                        <Link to="/projects">
                            <Button
                                sx={{
                                    border: '2px solid #D1B79D',
                                    borderRadius: 20,
                                    textTransform: 'none',
                                    color: '#D1B79D',
                                    paddingX: 5,
                                }}>
                                Explore Projects
                            </Button>
                        </Link>
                    </Box>
                    <Box className="p-6 w-1/2 justify-center">
                        <img src={headshot} alt='' width={380} height={380}></img>
                    </Box>
                </Box>
            </Box>
        </>);
}