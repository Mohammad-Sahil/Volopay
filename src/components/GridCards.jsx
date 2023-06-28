import { Grid } from "@mui/material"
import CardItem from "./CardItem"

const GridCards = ({ mockData, handleClick, onClick }) => {
    // console.log('mockData: ', mockData[0])
    return (
        <>
            <Grid container spacing={2}>
                {/* {mockData.map((item: any) => { */}
                {mockData.map((item) => {
                    return <>
                        <Grid key={item.order_id} item xs={12} sm={12} md={4}>
                            <CardItem
                                mockItem={item}
                                handleClick={handleClick}
                                onClick={onClick}
                            />
                        </Grid></>
                })}
            </Grid>
            {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <CardItem
                        mockItem={mockData[0]}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CardItem
                        mockItem={mockData[0]}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CardItem
                        mockItem={mockData[0]}
                    />
                </Grid>
            </Grid> */}


        </>
    )
}

export default GridCards