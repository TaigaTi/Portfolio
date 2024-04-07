import { Autocomplete, TextField } from "@mui/material";

const languages = [
    { language: 'HTML' },
    { language: 'TypeScript' },
    { language: 'React' },
    { language: 'JavaScript' },
    { language: 'CSS' },
    { language: 'Angular' },
];

export default function SearchBar() {
    return (
        <>
            <Autocomplete
                disableClearable
                options={languages.map((option) => option.language)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            sx: {
                                color: 'white', 
                                '&:focus': {
                                    color: 'white',
                                },
                                height: 50,
                                borderRadius: 10,
                            },
                        }}
                    />
                )}
                sx={{
                    border: '1px solid white',
                    borderRadius: 10,
                    color: 'white', 
                    width: '95%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </>
    );
}