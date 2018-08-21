/**
 * Common search input component
 *
 * @prop keyword string - Value stored in the parent state to be passed back to the input
 * @prop placeholder string - Input placeholder
 * @prop parentOnSubmit callable - Called to handle search submit
 * @prop parentOnChange callable - Passes the input value to the parent to store in state
 * @prop parentHandleClear callable - alled when clearing the input
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";

const styles = {
  searchBox: {
    position: "relative"
  },
  icon: {
    color: "#000",
    width: "22px",
    position: "absolute",
    right: "10px",
    top: "16px",
    cursor: "pointer",
    opacity: "0.4",
    zIndex: 1
  },
  textField: {
    marginTop: "8px;"
  }
};

const UISearch = ({
  placeholder,
  keyword,
  classes,
  parentOnSubmit,
  parentOnChange,
  parentOnClear
}) => {
  let onChange = e => {
    if (typeof parentOnChange === "function") {
      parentOnChange(e.target.value);
    }
  };

  let onSubmit = e => {
    e.preventDefault();
    e.target.keyword.blur();
    if (typeof parentOnSubmit === "function") {
      parentOnSubmit(e);
    }
  };

  let onClear = () => {
    if (typeof parentOnClear === "function") {
      parentOnClear();
    }
  };

  // --------------------------------------------

  return (
    <div className={classes.searchBox}>
      <form onSubmit={onSubmit}>
        {!keyword && <SearchIcon className={classes.icon} />}
        {keyword && <ClearIcon className={classes.icon} onClick={onClear} />}

        <TextField
          InputProps={{
            disableUnderline: true
          }}
          name="keyword"
          fullWidth={true}
          className={classes.textField}
          value={keyword}
          placeholder={placeholder}
          onChange={onChange}
          margin="normal"
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(UISearch);
