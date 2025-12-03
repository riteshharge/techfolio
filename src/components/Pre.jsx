import React from "react";
import PropTypes from "prop-types";
import "../App.css"; // Ensure your CSS has styles for #preloader and #preloader-none

function Pre({ load }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      aria-busy={load ? "true" : "false"}
      aria-hidden={!load}
      role="status"
    />
  );
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;


