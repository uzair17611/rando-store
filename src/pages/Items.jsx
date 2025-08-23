import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { fetchItems } from "../api/ItemApiCalls";

const Items = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const items = useSelector((state) => state.Item.items);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Items Page
      </Typography>

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ItemCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Items;
