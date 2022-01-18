import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import ReferralTable from "./ReferralTable";

const Referral = () => {
  toast.configure();

  const handleClick = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Link Has been Copied", {
      theme: "colored",
      position: "top-center",
    });
  };

  const link = `https://www.coinSignalPro/ref/huiojiniojiojij`;

  return (
    <Box>
      <Typography variant="h5" component="div" gutterBottom>
        Refer Users
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            textAlign="center"
          >
            You can refer users by sharing your referral link:
          </Typography>
          <Link type="button" onClick={() => handleClick(link)}>
            {link}
          </Link>
        </Box>
      </Paper>
      <ReferralTable />
    </Box>
  );
};

export default Referral;
