import React, { useContext } from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";

const Investment = () => {
  toast.configure();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (amount, plan) => {
    try {
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const balanceAmount = userDetails.data().balance;
      const depositedAmount = userDetails.data().deposited;
      const totalPackages = userDetails.data().totalPackages;
      console.log({ balanceAmount, depositedAmount, totalPackages });
      if ((amount > balanceAmount) | (amount > depositedAmount)) {
        toast.error("insufficent Fund", {
          theme: "colored",
          position: "bottom-center",
        });
        navigate("/deposit");
      } else {
        await updateDoc(docRef, {
          balance: depositedAmount - amount,
          totalPackages: totalPackages + 1,
          activePages: plan,
        });

        toast.info("Request Submitted", {
          theme: "colored",
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Typography variant="body1" component="div">
          Choose a plan to Invest In...
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 2 }}>
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    textAlign="center"
                    gutterBottom
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    textAlign="center"
                  >
                    Duration : {plan.Duration}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Button
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={() => addInvestment(plan.min, plan.title)}
                  >
                    Invest Now !!
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Investment;
