import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignalLayout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }} component="h1">
          Signals
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }} component="p">
          Make payments today in other to secure signals for long term
          investments
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ mt: 2 }}
          component="p"
          gutterBottom
        >
          Click on the button to make payment
        </Typography>
        <Box>
          <Button
            variant="outlined"
            color="warning"
            fullWidth
            onClick={() => navigate("/deposit")}
          >
            Click Here to go to payment page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignalLayout;
