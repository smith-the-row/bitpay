import React, { useRef } from "react";
import {
  Box,
  Button,
  TextField,
  FormLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { toast } from "react-toastify";

const WalletForm = () => {
  // configure toast component
  toast.configure();
  // methods for the select
  const methods = [
    "bitcoin",
    "Ethereum",
    "Litecoin",
    "USDT",
    "BNB",
    "DOGE",
    "TRON",
    "SHIBA",
    "BITCOIN CASH",
  ];

  // ref to control the form
  const fileRef = useRef();
  const methodRef = useRef();

  // component to be Returned
  return (
    <Box sx={{ mt: 6, display: "flex", flexDirection: "column", width: "50%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
        <FormLabel sx={{ mb: 2 }}>Payment Proof</FormLabel>
        <TextField type="file" ref={fileRef} />
      </Box>
      <FormControl>
        <InputLabel sx={{ mb: 2 }}>Payment Method</InputLabel>
        <Select label="Payment Method" ref={methodRef}>
          {methods.map((method, index) => (
            <MenuItem value={method} key={index}>
              {method}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button sx={{ mt: 3 }} variant="contained" color="primary">
        Submit Payment
      </Button>
    </Box>
  );
};

export default WalletForm;
