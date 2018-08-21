import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ZipSearch from "../../../address_fields/components/ZipSearch";
import Input from '@material-ui/core/Input';
import UIDialog from 'components/ui/UIDialog';
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
    inputStyle: {
      fontSize: 15,
      marginTop: 18,
      marginBottom: 6,
    }
  };

class InputZip extends React.Component {

    state = { zipSearchOpen: false };

    showZipSearch = () => {
        return (
            <UIDialog
                open={this.state.zipSearchOpen}
                title="Zip search"
                content={this.zipSearch}
            />
        )
    };

    zipSearch = (event) => {
        return (
            <ZipSearch parentOnSubmit={this.zipChange}/>
        );
    };

    zipChange = (fullResult, event) => {
        this.toggleSearchDialog();
        this.props.zipOnChange(fullResult, event);
    };

    toggleSearchDialog = () => {
        this.setState({
            zipSearchOpen: !this.state.zipSearchOpen
        });
    }; 

    rightNav = () => {
        return <CloseIcon onClick={this.toggleSearchDialog} color="inherit" />;
    };

    render() {
        let { field, value, error, parentOnChange, classes} = this.props

        return (
            <div>
                <UIDialog
                    fullScreen={true}
                    open={this.state.zipSearchOpen}
                    title="Patients"
                    content={this.zipSearch}
                    rightNav={this.rightNav}
                />

                <Input
                    className={classes.inputStyle}
                    name={field.name}
                    type={"text"}
                    value={value}
                    error={error}
                    onChange={parentOnChange}
                    fullWidth
                    defaultValue={value}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.toggleSearchDialog}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
        );
    }
}

export default withStyles(styles)(InputZip);
