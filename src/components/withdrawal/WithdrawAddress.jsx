import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { MdAdd } from "react-icons/md";
import { wallets } from "./walletAddresses";

const WithdrawAddress = () => {
  return (
    <div>
      <Typography variant="h5" component="div">
        Add Your Wallet Address
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {wallets.map((wallet) => (
            <Grid item xs={12} md={4} key={wallet}>
              <Card>
                <CardHeader
                  avatar={<Avatar src={wallet.icon} />}
                  title={wallet.coin}
                  subheader={wallet.addressName}
                />
                <CardContent>
                  <TextField label={`Enter ${wallet.coin} Address`} fullWidth />
                  <Box sx={{ mt: 3 }}>
                    <IconButton variant="contained" color="primary">
                      <MdAdd />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default WithdrawAddress;
