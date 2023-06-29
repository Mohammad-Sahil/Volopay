import { Grid } from "@mui/material";
import CardItem from "./CardItem";

interface GridCardsProps {
    mockData: {
        name: string;
        budget_name: string;
        owner_id: number;
        spent: { value: number, currency: string };
        available_to_spend: { value: number, currency: string };
        card_type: string;
        expiry: string;
        limit: number;
        status: string;
    }[];
    handleClick: (owner_id: number) => void;
    onClick: () => void;
}

const GridCards: React.FC<GridCardsProps> = ({ mockData, handleClick, onClick }) => {
    return (
        <>
            <Grid container spacing={2}>
                {mockData.map((item) => (
                    <Grid key={item.owner_id} item xs={12} sm={12} md={4}>
                        <CardItem
                            mockItem={item}
                            handleClick={() => handleClick(item.owner_id)}
                            onClick={onClick}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default GridCards;