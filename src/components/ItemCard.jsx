import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";

const ItemCard = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 250, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="160" image={img} alt={name} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          ${price}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={() => dispatch(addToCart({ id, name, price, img }))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
