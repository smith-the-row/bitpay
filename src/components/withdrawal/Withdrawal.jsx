import React, { useState, useContext, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop,
  Divider,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { options } from "./options";
import { UserContext } from "../../context/UserContext";

const Withdrawal = () => {
  toast.configure();
  // form state
  const addressRef = useRef();
  const [value, setValue] = useState("");
  const [amt, setAmt] = useState("");
  // function to set modal open and close
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // use the react router Hook
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  // function to get value
  const getValue = (id) => {
    const method = options.filter((option) => id === option.name);
    setValue(method[0].name);
    setAmt(method[0].amount);
    setOpen(true);
  };

  // function to get the method of withdraw and address
  const withdrawMethod = async () => {
    try {
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "withdraws"
      );

      if (!addressRef.current.value) {
        toast.error("Please Fill out the correct form", {
          theme: "colored",
          position: "bottom-center",
        });
      }

      await addDoc(collectionRef, {
        method: value,
        address: addressRef.current.value,
        amount: amt,
        approved: false,
        date: serverTimestamp(),
      });

      toast.success("Request Submitted", {
        theme: "colored",
        position: "top-center",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // the style component
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    width: { xs: "90%", md: 600 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 2, md: 3 },
  };

  return (
    <div>
      <Typography variant="h5" component="div" gutterBottom>
        Request Withdrawal
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {options.map((option) => (
            <Grid item xs={12} md={3} key={option.name}>
              <Card>
                <CardContent>
                  <Box>
                    <Typography variant="h6" component="div">
                      {option.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography variant="body1">Amount</Typography>
                    <Typography variant="subtitle1">{option.amount}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography variant="body1">Charge</Typography>
                    <Typography variant="subtitle1">{option.charge}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography variant="body1">Duration</Typography>
                    <Typography variant="subtitle1">
                      {option.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => getValue(option.name)}
                    >
                      Request Withdrawal
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

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
            <Typography
              id="transition-modal-title"
              variant="subtitle"
              component="h2"
            >
              Payment will be sent through your selected method.
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Enter Address"
                sx={{ mt: 5, mb: 3 }}
                inputRef={addressRef}
              />
              <TextField disabled sx={{ mb: 3 }} placeholder={value} />
              <Button
                variant="contained"
                color="primary"
                onClick={withdrawMethod}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Withdrawal;
