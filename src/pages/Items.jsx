import { Grid, Typography } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { dummyItems } from "../utilis/constant";

const Items = () => {
  return (
    <>
      <Typography>Items Page</Typography>
      <Grid container spacing={2}>
        {dummyItems.map((item) => (
          <Grid item key={item.id}>
            <ItemCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Items;
