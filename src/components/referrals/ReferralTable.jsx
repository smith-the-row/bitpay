import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ReferralTable = () => {
  return (
    <Box sx={{ mt: 8, display: { xs: "none", md: "block" } }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="div" gutterBottom>
            You Refered
          </Typography>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Ref.Level</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Date Registered</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ReferralTable;
