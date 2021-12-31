import React, { useContext } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
} from "@mui/material";
import { plans } from "./invest";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const Investment = () => {
  toast.configure();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (id) => {
    try {
      // filter and get the amount to invest
      const amount = plans.filter((plan) => id === plan.amount);
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const depositedAmount = userDetails.data().deposited;
      if (amount[0].amount > depositedAmount) {
        toast.error("insufficent Fund", {
          theme: "colored",
          position: "bottom-center",
        });
        navigate("/deposit");
      } else {
        await updateDoc(docRef, {
          balance: depositedAmount - amount[0].amount,
          totalPackages: 1,
          activePages: amount[0].plan,
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
    <Box>
      <Box>
        <Typography variant="h5" component="div">
          Choose a plan to Invest In...
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.plan}>
              <Card>
                <CardContent>
                  <Box>
                    <Typography variant="h5" textAlign="center">
                      {plan.plan}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3, mb: 2 }}>
                    <Typography variant="h3" textAlign="center">
                      {`$${plan.amount}`}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 4, mb: 3 }}>
                    <Typography
                      textAlign="center"
                      variant="subtitle2"
                      component="div"
                    >
                      Reward:{plan.reward}
                    </Typography>
                    <Typography
                      textAlign="center"
                      variant="subtitle2"
                      component="div"
                    >
                      Duration:{plan.duration}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addInvestment(plan.amount)}
                    >
                      Invest Now !!
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Investment;
