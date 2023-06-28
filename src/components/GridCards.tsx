import { Grid } from "@mui/material"
import CardItem from "./CardItem"

const GridCards = ({ mockData }) => {
    console.log('mockData: ', mockData[0])
    return (
        <>
            {/* <Grid container spacing={2}>
                {mockData.map((item: any) => {
                    return <>
                        <Grid key={item.order_id} item xs={12} sm={12} md={4}>
                            <CardItem />
                        </Grid></>
                })}
            </Grid> */}
            <CardItem
                mockItem={mockData[0]}
            />
        </>
    )
}

export default GridCards