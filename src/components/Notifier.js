import React, { Component } from "react";
import Snackbar from "@mui/material/Snackbar";

let openSnackbarFn;

class Notifier extends Component {
  state = {
    open: false,
    message: "",
  };

  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  openSnackbar = ({ message }) => {
    this.setState({
      open: true,
      message,
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: "",
    });
  };

  render() {
    const message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }}
      />
    );

    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        message={message}
        autoHideDuration={3000}
        onClose={this.handleSnackbarClose}
        open={this.state.open}
        SnackbarContentProps={{
          "aria-describedby": "snackbar-message-id",
        }}
      />
    );
  }
}

export function openSnackbar({ message }) {
  openSnackbarFn({ message });
}

export default Notifier;
