import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/system';
import GridCards from "./GridCards";
import mockkData from './mockData';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Card, CardContent } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

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
    const [mockData, setMockData] = useState(mockkData);
    const [navResults, setNavResults] = useState(mockData);

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [cardData, setCardData] = useState({});

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        console.log('searchTerm', searchTerm);
        const results = navResults.filter(obj =>
            obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    const getCardData = (data) => {
        // Handle the data here
        console.log('item', data);
        setCardData(data);
    };

    const handleNavValue = (value) => {
        console.log('value', value);
        if (value === 'your') {
            const results = mockData.filter(obj =>
                obj.status === 'your'
            );
            setNavResults(results);
        } else if (value === 'all') {
            setNavResults(mockData);
        } else if (value === 'block') {
            const results = mockData.filter(obj =>
                obj.status === 'block'
            );
            setNavResults(results);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    useEffect(() => {
        console.log('cardData', cardData);
        console.log('mockData', mockData)
    }, [mockData]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleButtonClick = (value) => {
        setSelectedValue(value);
        handleCloseDialog();
        if (value) {
            const objectIndex = mockData.findIndex((obj) => obj.owner_id === cardData?.owner_id);
            console.log('objectIndex', objectIndex);
            // If the object is found, update the status value
            if (objectIndex !== -1) {
                const updatedObject = { ...mockData[objectIndex] };
                console.log('updatedObject', updatedObject);

                if (value === 'block') {
                    updatedObject.status = 'block';
                } else {
                    updatedObject.status = 'your';
                }

                const updatedData = [...mockData];
                console.log('updatedData2', updatedData);

                updatedData[objectIndex] = updatedObject;
                console.log('updatedData3', updatedData);
                setMockData(updatedData);
                setCardData(updatedObject);
                // Use the updatedData array in your component or perform any necessary actions
                // For example, you can setState with the updatedData array if you're using React state
            }
        }

    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <>


            <div>

                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle style={{ textAlign: 'center' }}>Choose the Card</DialogTitle>
                    <hr style={{
                        color: 'red',
                        background: 'blue',
                        height: '2px',
                        width: '60%',
                        margin: '0 auto'
                    }} />
                    <DialogContent>
                        {/* Dialog content goes here */}
                        <div className="card_item" style={{ boxShadow: 'none', padding: '10px 0 20px 0' }}>
                            <h3>{cardData?.name}
                                {cardData?.card_type === 'subscription' ? <CachedIcon style={{ color: '#E71A67', background: '#FAEEF2', borderRadius: '50%', padding: '5px' }} /> : <LocalFireDepartmentOutlinedIcon style={{ color: '#E19436', background: '#FEF4EB', borderRadius: '50%', padding: '5px' }} />}
                            </h3>
                            <p>{cardData?.budget_name}・Budget</p>
                            <p>Owner ID: {cardData?.owner_id}</p>
                        </div>


                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button style={{ background: "#E71A67", borderRadius: '4px', margin: '0 5px' }} onClick={() => handleButtonClick('block')}>Block Card</Button><br />
                            <Button style={{ background: "#E71A67", borderRadius: '4px', margin: '0 5px' }} onClick={() => handleButtonClick('select')}>Select Card</Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ background: "#F8F8F8", color: '#737373' }} onClick={handleCloseDialog} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            {/* <Grid container spacing={2}> */}
            <Grid container style={{ margin: '0 auto' }}>
                <Grid item xs={12} sm={11} md={10} style={{ margin: '0 auto' }}
                // style={{ display: 'grid', placeItems: 'center' }}
                >
                    {/* Content for the first division */}
                    <div className="Navbar">
                        <ul>
                            <li onClick={() => handleNavValue('your')}>Your</li>
                            <li onClick={() => handleNavValue('all')}>All</li>
                            <li onClick={() => handleNavValue('block')}>Blocked</li>
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
                                        value={searchTerm}
                                        onChange={event => setSearchTerm(event.target.value)}
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
                        <GridCards handleClick={handleOpenDialog} onClick={getCardData} mockData={searchTerm === '' ? navResults : searchResults} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage