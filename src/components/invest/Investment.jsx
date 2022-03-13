import React from "react";
import { Typography, Box } from "@mui/material";
// import { getDoc, doc, updateDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { store } from "../../firebase";
import { toast } from "react-toastify";
// import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";

const Investment = () => {
  toast.configure();

  // const navigate = useNavigate();

  // const { user } = useContext(UserContext);

  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const addInvestment = async (amount, plan) => {
  //   try {
  //     // get the user deposit
  //     const docRef = doc(store, "/users", `${user.email}`);
  //     const userDetails = await getDoc(docRef);
  //     const balanceAmount = userDetails.data().balance;
  //     const depositedAmount = userDetails.data().deposited;
  //     const totalPackages = userDetails.data().totalPackages;
  //     if ((amount > balanceAmount) | (amount > depositedAmount)) {
  //       toast.error("insufficent Fund", {
  //         theme: "colored",
  //         position: "bottom-center",
  //       });
  //       navigate("/deposit");
  //     } else {
  //       await updateDoc(docRef, {
  //         balance: depositedAmount - amount,
  //         totalPackages: totalPackages + 1,
  //         activePages: plan,
  //       });

  //       toast.info("Request Submitted", {
  //         theme: "colored",
  //         position: "top-center",
  //       });

  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Box>
        <Typography variant="h6" component="div">
          Choose a plan to Invest In...
        </Typography>
      </Box>
      <div className="row">
        {plans.map((plan) => (
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="rounded bg-primary shadow mt-4 w-75 w-sm-100 p-2">
              <h6 className="text-white text-center">{plan.title}</h6>
              <h4 className="text-white text-center fw-bolder">{plan.price}</h4>
              <div className="d-flex flex-column align-items-center justify-content-center text-white">
                <p>Duration: {plan.Duration}</p>
                <h5> 15% ROI </h5>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn">Invest Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Investment;
