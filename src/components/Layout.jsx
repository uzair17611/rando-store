import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useState } from "react";
import CartIcon from "./CartIcon";
import AddItemDialog from "./AddItemDialog";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RandoStore
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/items">
            Items
          </Button>
          <Button color="inherit" onClick={() => setIsOpen(true)}>
            Add Item
          </Button>
          <CartIcon />
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>{children}</Container>

      {isOpen ? <AddItemDialog onClose={() => setIsOpen(false)} /> : null}
    </>
  );
};

export default Layout;
