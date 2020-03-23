import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import api from "../../utils/api";
import "../../css/Home.css";
import "../../css/Forms.css";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function DownloadModal() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    api()
      .post("/api/auth/register", {
        username: username,
        password,
        role_id
      })
      .then(res => {
        console.log("Register endpoint", res);
        localStorage.setItem("token", res.data.token);
        history.push("/classes");
      })
      .catch(err => {
        console.log("Error with register", err);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span className="btn cta-btn main-btn" onClick={handleOpen}>
        Sign Up
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <>
            <form className="pop-up-form" noValidate onSubmit={handleSubmit}>
              <label className="form-label">Username</label>
              <input
                className="form-inputs"
                margin="normal"
                fullWidth
                id="username"
                type="text"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="username"
                autoFocus
                InputProps={{
                  disableUnderline: true,
                  className: classes.input
                }}
              />
              <label className="form-label">Password</label>
              <input
                className="form-inputs"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="password"
                InputProps={{
                  disableUnderline: true,
                  className: classes.input
                }}
              />
              <label className="form-label">User Type</label>
              <select
                id="role_id"
                value={role_id}
                name="role_id"
                onChange={event => setRole_id(event.target.value)}
              >
                <option value="">Please Select...</option>
                <option value={"2"}>Client</option>
                <option value={"1"}>Instructor</option>
              </select>
              <button
                className="form-btn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </button>
              <div>
                <p>
                  Have an account already? <Link to="/login">Login</Link> here.
                </p>
              </div>
            </form>
          </>
        </Fade>
      </Modal>
    </div>
  );
}
