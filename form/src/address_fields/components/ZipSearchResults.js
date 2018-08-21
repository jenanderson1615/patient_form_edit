import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const ZipSearchResults = ({ zipCodeResults, parentCallBack }) => {
  const listResults = zipCodeResults.places.map((i, index) => {
    let city = i.placeName;
    let state = i.stateAbbreviation;
    let zip = zipCodeResults.postCode;
    let fullResult = {
      city,
      state,
      zip
    };

    return (
      <div>
        <ListItem
          key={index}
          onClick={() => {
            parentCallBack(fullResult);
          }}
        >
          <ListItemText>
            {city}, {state} {zip}
          </ListItemText>
        </ListItem>
      </div>
    );
  });

  return (
    <div>
      <List>{listResults}</List>
    </div>
  );
};

export default ZipSearchResults;
