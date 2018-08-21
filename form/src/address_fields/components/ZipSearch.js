import React from "react";
import UISearch from "../../ui/UISearch";
import ZipSearchResults from "./ZipSearchResults";
import ZipSearchStore from "../store/Store";
import { observer } from "mobx-react";

// --------------------------------------------
class ZipSearch extends React.Component {
  constructor(props) {
    super(props);
    this.store = ZipSearchStore.create();
  }

  zipSearchSubmit = () => {
    this.store.clearResults();
    this.store.search(this.store.keyword);
  };

  onResultClick = (fullResult, event) => {
    this.props.parentOnSubmit(fullResult, event);
  };

  saveKeyword = keyword => {
    this.store.setKeyword(keyword);
  }

  clearSearch = () => {
    this.store.clearSearch();
  }

  // ---------------------------------------------------
  render() {
    let { keyword } = this.store;

    return (
      <div>
        <UISearch
          name="zipSearch"
          keyword={keyword}
          parentOnChange={this.saveKeyword}
          parentOnSubmit={this.zipSearchSubmit}
          parentOnClear={this.clearSearch}
          placeholder="Please search for a zip code."
        />

        {this.store.searched && this.store.places.length == 0 && ("There are no zip codes matching your search.  Search again or exit the search")}

        {this.store.searched && this.store.places && (
          <ZipSearchResults zipCodeResults={this.store} parentCallBack={this.onResultClick} />
        )}
      </div>
    );
  }
}

export default observer(ZipSearch);
