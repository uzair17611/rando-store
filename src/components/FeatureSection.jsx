import { Storefront, AddBox, ShoppingCart } from "@mui/icons-material";
import { Grid, Card, Box, Typography } from "@mui/material";
import features from "../utilis/constant";

const iconMap = {
  Storefront,
  AddBox,
  ShoppingCart,
};

const FeaturesSection = () => {
  return (
    <Grid container spacing={3}>
      {features.map((feature, idx) => {
        const Icon = iconMap[feature.icon];
        return (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Icon sx={{ fontSize: 40, color: "primary.main" }} />
              </Box>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FeaturesSection;
