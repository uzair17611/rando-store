import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/reducers/cartSlice";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Divider,
} from "@mui/material";

const Checkout = () => {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <Typography variant="h5" sx={{ mt: 3, textAlign: "center" }}>
        🛒 Your cart is empty.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card sx={{ display: "flex", alignItems: "center", p: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 1,
                }}
                image={item.img}
                alt={item.name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography color="text.secondary">${item.price}</Typography>
              </CardContent>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Total: ${total}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
