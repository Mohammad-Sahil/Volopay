import CachedIcon from '@mui/icons-material/Cached';
import { Grid } from "@mui/material"
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

const CardItem = ({ mockItem, handleClick, onClick }) => {

    const progressBarStyle = {
        spentWidth: `${(mockItem?.spent?.value / (mockItem?.spent?.value + mockItem?.available_to_spend?.value)) * 100}%`,
        balanceWidth: `${(mockItem?.available_to_spend?.value / (mockItem?.spent?.value + mockItem?.available_to_spend?.value)) * 100}%`,
    };

    const handleClicks = () => {
        handleClick();
        onClick(mockItem);
    }

    return (
        <div className="card_item" onClick={handleClicks}>
            <h3>{mockItem.name}
                {mockItem.card_type === 'subscription' ? <CachedIcon style={{ color: '#E71A67', background: '#FAEEF2', borderRadius: '50%', padding: '5px' }} /> : <LocalFireDepartmentOutlinedIcon style={{ color: '#E19436', background: '#FEF4EB', borderRadius: '50%', padding: '5px' }} />}
            </h3>
            <p>{mockItem.budget_name}・Budget</p>
            <div className="midle_card">
                <Grid container spacing={1}>
                    <Grid item sm={4} md={4}>
                        AMOUNT
                        <p>{mockItem?.spent?.value + mockItem?.available_to_spend?.value} SGD</p>
                    </Grid>
                    <Grid item sm={4} md={4}>
                        FREQUENCY
                        <p>Monthly</p>
                    </Grid>
                    <Grid item sm={4} md={4}>
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