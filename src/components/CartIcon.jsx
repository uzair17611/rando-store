import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartCount = useSelector((state) => state.Cart.cartItems.length);

  return (
    <IconButton component={Link} to="/checkout" color="inherit">
      <Badge badgeContent={cartCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
