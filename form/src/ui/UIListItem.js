import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, Typography } from "@material-ui/core";

const styles = {
  root: {
    width: "100%",
    "&.lastChild:last-child": {
      borderBottom: 0
    }
  },
  primary: {
    fontWeight: "bold"
  }
};

const UIListItem = ({ classes, label, value, labelGroup, divider = true }) => {
  return (
    <div className={classes.root}>
      <ListItem divider={divider} className={classes.listItem}>
        {labelGroup && (
          <ListItemText>
            <Typography variant="subheading" className={classes.primary}>
              {labelGroup.label}
            </Typography>
            <Typography variant="subheading">{labelGroup.value}</Typography>
          </ListItemText>
        )}

        {label && (
          <React.Fragment>
            <ListItemText>
              <span className={classes.primary}>{label}</span>
            </ListItemText>
            <Typography variant="subheading">{value}</Typography>
          </React.Fragment>
        )}
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(UIListItem);
