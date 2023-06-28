import { Grid } from "@mui/material";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/system';
import GridCards from "./GridCards";
import mockData from './mockData';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
    padding: '10px 20px',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));



const HomePage = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <>
            {/* <Grid container spacing={2}> */}
            <Grid container style={{ margin: '0 auto' }}>
                <Grid item xs={12} sm={11} md={10} style={{ margin: '0 auto' }}
                // style={{ display: 'grid', placeItems: 'center' }}
                >
                    {/* Content for the first division */}
                    <div className="Navbar">
                        <ul>
                            <li>Your</li>
                            <li>All</li>
                            <li>Blocked</li>
                        </ul>
                    </div>
                    <div className="filter_search">
                        <div className="search_box">
                            <div
                                style={{ position: 'relative', display: 'flex', width: '250px', justifyContent: 'end' }}
                            >
                                {isSearchOpen && (
                                    <TextField
                                        id="search"
                                        label="Search"
                                        variant="standard"
                                        style={{
                                            position: 'absolute',
                                            right: '5px',
                                            top: '-6px',
                                            // left: '50%',
                                            // transform: 'translateX(-50%)',
                                            // Additional styling can be applied here
                                        }}
                                    />
                                )}
                                <IconButton style={{ padding: '10px' }} onClick={handleSearchClick}>
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="filter">
                            <StyledIconButton>
                                <FilterListIcon /><p style={{ margin: '0', fontSize: '20px', fontWeight: 600, padding: '0 5px', color: '#787878' }}>Filter</p>
                            </StyledIconButton>
                        </div>
                    </div>
                    <div className="content">
                        <GridCards mockData={mockData} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage