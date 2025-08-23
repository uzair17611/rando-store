import { Box, Button, Typography, Grid } from "@mui/material";
import { useFormik } from "formik";
import AppDialog from "./AppDialog";
import * as Yup from "yup";
import InputField from "../shared/InputFiled";
import Send from "@mui/icons-material/Send";

const validationSchema = Yup.object({
  name: Yup.string().required("Item name is required"),
  price: Yup.number()
    .positive("Price must be positive")
    .required("Price is required"),
  img: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

const AddItemDialog = ({ open, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: { name: "", price: "", img: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
      onClose();
    },
  });

  return (
    <AppDialog open={open} onClose={onClose} maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="600"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Add New Item
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputField formik={formik} name="name" label="Item Name" />
          </Grid>

          <Grid item xs={12} md={6}>
            <InputField formik={formik} name="price" label="Price" />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField formik={formik} name="img" label="Image URL" />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              endIcon={<Send />}
              loading={formik.isSubmitting}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AppDialog>
  );
};

export default AddItemDialog;
