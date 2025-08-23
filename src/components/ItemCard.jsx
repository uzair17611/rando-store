import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ItemCard = ({ name, price, img }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="140" image={img} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">${price}</Typography>
        <Button variant="contained" sx={{ mt: 1 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
