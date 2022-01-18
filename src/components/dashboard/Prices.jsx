import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Skeleton } from "@mui/material";
import {
  FaDownload,
  FaDatabase,
  FaGift,
  FaCreditCard,
  FaEnvelope,
  FaEnvelopeOpen,
} from "react-icons/fa";
// import Firebase functions
import { getDoc, doc } from "firebase/firestore";
// import setter functions
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";

const Prices = () => {
  const { user } = useContext(UserContext);

  // set State for Name
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetails();
  }, [user.email]);

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaDownload size="31px" color="#ffad46" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Deposited</Typography>
                  <Typography variant="subtitle1">{`$${details.deposited.toFixed(
                    2
                  )}`}</Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaDatabase size="31px" color="#31ce36" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Profit</Typography>
                  <Typography variant="subtitle1">{`$${details.profit.toFixed(
                    2
                  )}`}</Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaGift size="31px" color="#f25961" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Bonus</Typography>
                  <Typography variant="subtitle1">{`$${details.bonus.toFixed(
                    2
                  )}`}</Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
        {/* <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaUsers size="31px" color="#1572e8" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Ref. Bonus</Typography>
                  <Typography variant="subtitle1">{`$${details.refBonus.toFixed(
                    2
                  )}`}</Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid> */}
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaCreditCard size="31px" color="#6861ce" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Balance</Typography>
                  <Typography variant="subtitle1">{`$${details.balance.toFixed(
                    2
                  )}`}</Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaEnvelope size="31px" color="#f25961" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Total Package</Typography>
                  <Typography variant="subtitle1">
                    {details.totalPackages}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          {details ? (
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <FaEnvelopeOpen size="31px" color="#1572e8" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Active Packages</Typography>
                  <Typography variant="subtitle1">
                    {details.activePages}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={90} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Prices;
