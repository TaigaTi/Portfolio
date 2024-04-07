import { Box } from "@mui/material";
import Layout from "../components/Layout";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";

export default function Projects() {
    return (
        <>
            <Box>
                <Layout />

                <Box className="justify-center" sx={{ width: '75%', paddingX: 10, paddingTop: 3, }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#D1B79D",
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            paddingBottom: 2,
                        }}>
                        All Projects
                    </Typography>
                </Box>

                <Box className="flex justify-center pb-3">
                    <Box sx={{
                        backgroundColor: '#121212',
                        borderRadius: 2,
                        height: 120,
                        width: '90%'
                    }}>
                        <SearchBar/>
                    </Box>
                </Box>

                <Box className="flex justify-center">
                    <Box sx={{
                        backgroundColor: '#121212',
                        borderRadius: 2,
                        height: 350,
                        width: '90%'
                    }}>

                    </Box>
                </Box>
            </Box>
        </>
    );
}