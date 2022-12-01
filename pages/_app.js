import React from "react";
import propTypes from "prop-types";
import AppLayout from "../components/applayout";

const _App = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

AppLayout.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default _App;
