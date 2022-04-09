import React, { useState } from "react";
import PropTypes from "prop-types";
import RegionItem from "./regionItem";
import uniqueItems from "../utils/uniqueItems";

function RegionList({ items }) {
  const unique = items;
  if (!unique) {
    return <div>error</div>; // make error component
  }
  return (
    <div>
      {unique.map((elem, idx) => (
        <RegionItem
          key={elem.label}
          latitude={elem.latitude}
          longitude={elem.longitude}
          name={elem.name}
          label={elem.label}
        />
      ))}
    </div>
  );
}
RegionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};
export default RegionList;
