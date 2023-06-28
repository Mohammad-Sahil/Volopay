// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Grid } from "@mui/material"

const CardItem = ({ mockItem }) => {

    const spent = 400; // Example value representing spent money
    const balance = 600; // Example value representing balance money

    const progressBarStyle = {
        spentWidth: `${(spent / (spent + balance)) * 100}%`,
        balanceWidth: `${(balance / (spent + balance)) * 100}%`,
    };

    return (
        <div className="card_item">
            <h3>{mockItem.name}</h3>
            <p>{mockItem.budget_name}・Budget</p>
            <div className="midle_card">
                <Grid spacing={1}>
                    <Grid item m={4} md={4}>
                        AMOUNT
                        <p>{mockItem?.spent?.value + mockItem?.available_to_spend?.value} SGD</p>
                    </Grid>
                    <Grid item m={4} md={4}>
                        FREQUENCY
                        <p>Monthly</p>
                    </Grid>
                    <Grid item m={4} md={4}>
                        EXPIRY
                        <p>{mockItem.expiry}</p>
                    </Grid>
                </Grid>
            </div>
            <div className="progress-bar">
                <div className="filled spent" style={{ width: progressBarStyle.spentWidth }}></div>
                <div className="filled balance" style={{ width: progressBarStyle.balanceWidth }}></div>
            </div>
            <div className="bottom_card">
                <div><p><span>・</span>spent</p><p>{mockItem?.spent?.value} SGD</p></div>
                <div><p><span>・</span>Balance</p><p>{mockItem?.available_to_spend?.value} SGD</p></div>
            </div>
        </div>
    )
}

export default CardItem