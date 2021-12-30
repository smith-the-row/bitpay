// import the useState from the react component to control the state of the modal in the application
import React, { useState, useRef } from "react";
// import the needed components from material ui
import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  Typography,
  Fade,
  Backdrop,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";

// import the Fonts from react icons (material icons)
import { MdAccountCircle, MdUpload, MdAddCircle } from "react-icons/md";

// import Font awesome Icons
import { FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";

// import the toast components to display errors
import { toast } from "react-toastify";

// styles for the Upload Picture Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 400, xs: 280 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// styles for the form update Modal
const styleTwo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, md: 500 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

// the component to be Rendered
const Profile = () => {
  // state to control the upload Modal
  const [modalOpen, setModalOpen] = useState(false);
  // state to control the form modal
  const [formModalOpen, setFormModalOpen] = useState(false);

  // set the form refs
  const pictureRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  // functions to control the visibility of the modals
  // (functions to control upload modal)
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // (functions to control form modal)
  const handleFormOpen = () => setFormModalOpen(true);
  const handleFormClose = () => setFormModalOpen(false);

  return (
    <div>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Account Profile Information
        </Typography>
      </Box>

      <Paper>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Avatar sx={{ width: 59, height: 59 }}>
              <MdAccountCircle size="100px" />
            </Avatar>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Meeka Dante</Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              endIcon={<MdUpload />}
              variant="outlined"
              onClick={handleOpen}
            >
              Upload Picture
            </Button>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ mt: 6 }}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box sx={{ mb: { xs: 2 } }}>
            <Box sx={{ display: "flex" }}>
              <FaUser />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                Name
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Ikoro Godstime</Typography>
            </Box>
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <Box sx={{ display: "flex" }}>
              <FaEnvelope />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                Email
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>godstimeIkoro@gmail.com</Typography>
            </Box>
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <Box sx={{ display: "flex" }}>
              <FaPhone />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                Phone Number
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>08109917395</Typography>
            </Box>
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <Box sx={{ display: "flex" }}>
              <FaCalendar />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                Joined
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>{new Date().toLocaleDateString()}</Typography>
            </Box>
          </Box>
        </Box>
        <Button sx={{ m: 2 }} onClick={handleFormOpen}>
          Update Details
        </Button>
      </Paper>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="subtitle1"
              component="h2"
              gutterBottom
            >
              Update Profile Picture
            </Typography>
            <TextField type="file" ref={pictureRef} sx={{ mt: 2, mb: 3 }} />
            <IconButton>
              <MdAddCircle />
            </IconButton>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={formModalOpen}
        onClose={handleFormClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={formModalOpen}>
          <Box sx={styleTwo}>
            <Box sx={{ pb: 2 }}>
              <Typography variant="h6" component="h1">
                Edit Profile
              </Typography>
            </Box>
            <Divider />
            <TextField label="Name" ref={nameRef} sx={{ mt: 4 }} />
            <TextField label="Email" ref={emailRef} sx={{ mt: 4 }} />
            <TextField label="Phone" ref={phoneRef} sx={{ mt: 4, mb: 3 }} />
            <Button variant="contained" color="primary">
              update
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Profile;
