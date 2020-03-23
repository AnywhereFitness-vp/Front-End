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
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    api()
      .post("/api/auth/login", data)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("id", res.data.userId);
        history.push("/classes");
      })
      .catch(err => {
        console.log(err);
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
        Login
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
                value={data.username}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
                placeholder="password"
                InputProps={{
                  disableUnderline: true,
                  className: classes.input
                }}
              />
              <button
                className="form-btn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Submit
              </button>
              <div>
                <p>
                  Don't have an account? <Link to="/register">Sign Up</Link>{" "}
                  here.
                </p>
              </div>
            </form>
          </>
        </Fade>
      </Modal>
    </div>
  );
}
