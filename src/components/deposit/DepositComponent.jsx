import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Divider,
  TextField,
} from "@mui/material";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DepositTable from "./DepositTable";

// style for the Modals
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DepositComponent = () => {
  // configure Toast
  toast.configure();
  // control the state of the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // use the navigate component to push to a new page
  const navigate = useNavigate();

  // form Refs
  const priceRef = useRef();

  // function to push to a new page
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(priceRef.current.value);
    if (!priceRef.current.value) {
      toast.error("Enter a Price to Deposit", {
        theme: "colored",
        position: "bottom-center",
      });
    } else {
      // push the user to the new page
      return navigate("/deposit/wallet", { state: priceRef.current.value });
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Your Deposits
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdAdd />}
          onClick={handleOpen}
        >
          New Deposit
        </Button>
      </Box>

      <DepositTable />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Make A New Deposit
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Enter Amount"
                sx={{ mt: 5, mb: 2 }}
                type="number"
                inputRef={priceRef}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default DepositComponent;
