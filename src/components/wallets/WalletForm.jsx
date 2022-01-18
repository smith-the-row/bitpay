import React, { useRef, useContext } from "react";
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

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { store, bucket } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

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

  // use location Hook
  const location = useLocation();
  const navigate = useNavigate();

  // user context
  const { user } = useContext(UserContext);

  // submit function
  const handleSubmit = async () => {
    try {
      if (!fileRef.current.files[0] | !methodRef.current.value) {
        toast("Please fill the form correctly", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      // upload Image
      const imgRef = ref(bucket, `proofImg/${fileRef.current.files[0].name}`);
      await uploadBytes(imgRef, fileRef.current.files[0]);
      const imgSrc = await getDownloadURL(imgRef);

      // update document
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "Deposits"
      );
      await addDoc(collectionRef, {
        amount: location.state,
        img: imgSrc,
        date: serverTimestamp(),
        approved: false,
        method: methodRef.current.value,
      });

      toast.info("Payment Sent", { theme: "colored", position: "top-center" });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Payment Not Sent", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  // component to be Returned
  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        width: { xs: "80%", md: "50%" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
        <FormLabel sx={{ mb: 2 }}>Payment Proof</FormLabel>
        <TextField type="file" inputRef={fileRef} />
      </Box>
      <FormControl>
        <InputLabel sx={{ mb: 2 }}>Payment Method</InputLabel>
        <Select label="Payment Method" inputRef={methodRef}>
          {methods.map((method, index) => (
            <MenuItem value={method} key={index}>
              {method}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit Payment
      </Button>
    </Box>
  );
};

export default WalletForm;
