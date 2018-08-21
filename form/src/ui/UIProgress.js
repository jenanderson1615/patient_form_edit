import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  progress: {
    margin: "0 auto",
    marginTop: "20px",
    display: "block"
  }
});

const UIProgress = ({ classes }) => {
  return <CircularProgress className={classes.progress} size={60} />;
};

export default withStyles(styles)(UIProgress);
