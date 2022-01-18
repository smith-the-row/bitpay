import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import { MdContentCopy } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { wallets } from "./wallets";
import WalletForm from "./WalletForm";

const WalletAddress = () => {
  toast.configure();

  const location = useLocation();

  const cliptoBoard = (value, name) => {
    navigator.clipboard.writeText(value);
    toast.success(`${name} address has been copied !!`, {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <Box sx={{ width: { xs: "80%", md: "100%" }, overflow: "hidden" }}>
      <Box>
        <Typography variant="h5" component="div" gutterBottom>
          Make Payment
        </Typography>
        <Typography variant="subtitle1">
          {`Please make your payment of $${location.state} to any of the crypto wallet addresses below. Always verify and confirm you copied the wallet address correctly`}
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {wallets.map((wallet) => (
            <Grid item xs={12} sm={6} md={4} key={wallet.coin}>
              <Box>
                <Card sx={{ width: { xs: "300", md: "360" } }}>
                  <CardHeader
                    title={wallet.coin}
                    subheader={wallet.addressName}
                    avatar={<Avatar src={wallet.icon} />}
                    action={
                      <IconButton
                        onClick={() => cliptoBoard(wallet.address, wallet.coin)}
                      >
                        <MdContentCopy />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Box>
                      <Typography paragraph noWrap={true} variant="subtitle1">
                        {wallet.address}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <WalletForm />
    </Box>
  );
};

export default WalletAddress;
