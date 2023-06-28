import { Grid } from "@mui/material"

const GridCards = ({ mockData }) => {
    return (
        <>
            <Grid container spacing={2}>
                {mockData.map((item: any) => {
                    return <>
                        <Grid key={item.order_id} item xs={12} sm={12} md={4}>
                            {/* Content for the first division */}
                            sail
                        </Grid></>
                })}
            </Grid>
        </>
    )
}

export default GridCards