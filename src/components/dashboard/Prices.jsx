import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  FaDownload,
  FaDatabase,
  FaGift,
  FaUsers,
  FaCreditCard,
  FaEnvelope,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Prices = () => {
  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaDownload size="31px" color="#ffad46" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2">Deposited</Typography>
                <Typography variant="subtitle1">$0.00</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaDatabase size="31px" color="#31ce36" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Profit</Typography>
                <Typography variant="body1">$0.00</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaGift size="31px" color="#f25961" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Bonus</Typography>
                <Typography variant="body1">$0.00</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaUsers size="31px" color="#1572e8" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Ref. Bonus</Typography>
                <Typography variant="body1">$0.00</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaCreditCard size="31px" color="#6861ce" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Balance</Typography>
                <Typography variant="body1">$0.00</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaEnvelope size="31px" color="#f25961" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Total Package</Typography>
                <Typography variant="body1">0</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <FaEnvelopeOpen size="31px" color="#1572e8" />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="caption">Active Packages</Typography>
                <Typography variant="body1">0</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Prices;
