import { Container, Typography, Box } from "@mui/material";
import FeaturesSection from "../components/FeatureSection.jsx";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to RandoStore
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Your one-stop shop for everything random and amazing!
        </Typography>
      </Box>
      <FeaturesSection />
    </Container>
  );
};

export default Home;
