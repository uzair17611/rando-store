import { Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { dummyItems } from "../utilis/constant";

const Items = () => {
  return (
    <>
      <h2>Items Page</h2>
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
