import { types, flow } from "mobx-state-tree";
import SearchApi from "./API";

const PlaceModel = types.model("PlaceModel", {
  placeName: types.maybe(types.string),
  longitude: types.maybe(types.string),
  state: types.maybe(types.string),
  stateAbbreviation: types.maybe(types.string),
  latitude: types.maybe(types.string)
});

const ZipSearchStore = types
  .model("ZipSearchStore", {
    loading: false,
    keyword: types.optional(types.string, ""),
    searched: false,
    places: types.optional(types.array(PlaceModel), []),
    postCode: types.maybe(types.string),
    country: types.maybe(types.string),
    countryAbbreviation: types.maybe(types.string)
  })

  .actions(self => ({
    search: flow(function*(keyword) {
      try {
        let results = yield SearchApi.searchZipCode(keyword);
        if (results.places && results.places.length > 0) {
          self.country = results.country;
          self.countryAbbreviation = results["country abbreviation"];
          self.postCode = results["post code"];
          results.places.forEach(placeResult => {
            var place = {};
            place.state = placeResult.state;
            place.placeName = placeResult["place name"];
            place.stateAbbreviation = placeResult["state abbreviation"];
            self.places.push(place);
          });
        }
        self.loading = false;
        self.searched = true;
        self.keyword = keyword;
      } catch (error) {
        console.log("Error getting zip code results", error);
      }
    }),

    clearSearch: () => {
      self.keyword = "";
      self.searched = false;
      self.places = [];
    },

    clearResults: () => {
      self.places = [];
    },

    setKeyword: keyword => {
      self.keyword = keyword;
    }
  }));

export default ZipSearchStore;
