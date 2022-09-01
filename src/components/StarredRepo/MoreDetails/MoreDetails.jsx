import React from "react";
import { useSelector } from "react-redux";

export const MoreDetails = () => {
  const repodata = useSelector((store) => {
    return store.moreDetails;
  });
  return (
    <div>
      <h2>MoreDetails</h2>
    </div>
  );
};
