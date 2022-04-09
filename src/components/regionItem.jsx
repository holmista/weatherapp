import React from "react";
import PropTypes from "prop-types";

function RegionItem({
  latitude,
  longitude,
  name,
  label,
}) {
  console.log(latitude, longitude, name, label);
  return (
    <div>
      {latitude}
      {longitude}
      {name}
      {label}
    </div>
  );
}
RegionItem.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default RegionItem;
