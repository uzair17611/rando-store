import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppDialog = ({ onClose, maxWidth = "xs", children }) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      PaperProps={{ sx: { padding: 2 } }}
    >
      <IconButton
        size="small"
        onClick={onClose}
        sx={{ position: "absolute", right: 4, top: 2 }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
};

export default AppDialog;
