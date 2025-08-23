import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  Chip,
} from "@mui/material";
import {
  ShoppingCart,
  LocalOffer,
  Security,
  LocalShipping,
  Support,
  Star,
  TrendingUp,
  FlashOn,
} from "@mui/icons-material";

const Home = () => {
  // Categories for navigation
  const categories = [
    { name: "Electronics", icon: "📱", color: "#3f51b5" },
    { name: "Clothing", icon: "👕", color: "#f50057" },
    { name: "Home & Garden", icon: "🏠", color: "#4caf50" },
    { name: "Sports", icon: "⚽", color: "#ff9800" },
    { name: "Books", icon: "📚", color: "#9c27b0" },
    { name: "Beauty", icon: "💄", color: "#e91e63" },
    { name: "Toys", icon: "🧸", color: "#00bcd4" },
    { name: "Food", icon: "🍕", color: "#795548" },
  ];

  // Features/Benefits
  const features = [
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: "#4caf50" }} />,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: <Security sx={{ fontSize: 40, color: "#2196f3" }} />,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      icon: <Support sx={{ fontSize: 40, color: "#ff9800" }} />,
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: <LocalOffer sx={{ fontSize: 40, color: "#e91e63" }} />,
      title: "Best Deals",
      description: "Unbeatable prices daily",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          p: 6,
          mb: 6,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Welcome to RandomStore
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Your one-stop shop for everything random and amazing!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
          Discover unique products, great deals, and exceptional quality. From
          everyday essentials to extraordinary finds - we've got it all.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderColor: "white",
            color: "white",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            px: 4,
            py: 1.5,
          }}
        >
          Learn More
        </Button>
      </Paper>

      {/* Flash Sale Banner */}
      <Paper
        elevation={3}
        sx={{
          background: "linear-gradient(45deg, #ff6b6b, #feca57)",
          color: "white",
          p: 3,
          mb: 6,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <FlashOn sx={{ mr: 1, fontSize: 30 }} />
          <Typography variant="h4" fontWeight="bold">
            FLASH SALE
          </Typography>
          <FlashOn sx={{ ml: 1, fontSize: 30 }} />
        </Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Up to 70% OFF on selected items!
        </Typography>
        <Chip
          label="Limited Time Only"
          sx={{
            backgroundColor: "white",
            color: "#ff6b6b",
            fontWeight: "bold",
          }}
        />
      </Paper>

      {/* Categories Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          Shop by Category
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Explore our wide range of categories to find exactly what you're
          looking for
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                  },
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    {category.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="medium"
                    color={category.color}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
        >
          Why Choose RandomStore?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Paper
        elevation={2}
        sx={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white",
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          mt: 6,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Stay Updated!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, mx: "auto" }}>
          Subscribe to our newsletter and be the first to know about new
          products, exclusive deals, and special offers.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "white",
            color: "#f5576c",
            "&:hover": { backgroundColor: "#f5f5f5" },
            px: 4,
            py: 1.5,
          }}
        >
          Subscribe Now
        </Button>
      </Paper>

      <Grid container spacing={4} sx={{ mt: 4, textAlign: "center" }}>
        <Grid item xs={6} md={3}>
          <Typography variant="h3" fontWeight="bold" color="primary">
            10K+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Happy Customers
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h3" fontWeight="bold" color="primary">
            5K+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Products Available
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h3" fontWeight="bold" color="primary">
            50+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categories
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h3" fontWeight="bold" color="primary">
            4.8★
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Average Rating
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
