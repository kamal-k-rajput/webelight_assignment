const initialStore = {
  data: [],
  starredRepo: [],
  moreDetails: {},
};

const rootReducer = (store = initialStore, action) => {
  if (action.type === "addStarredRepo") {
    return { ...store, starredRepo: action.payload };
  } else if (action.type === "moredetails") {
    return { ...store, moreDetails: action.payload };
  }
  return { ...store };
};

export default rootReducer;
