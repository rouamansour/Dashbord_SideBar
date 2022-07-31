import React from "react";
import PropTypes from "prop-types";
import { Routes } from "../../components";

const RequestsRoutes = ({ routes }) => {
  return <Routes routes={routes} />;
};

export default RequestsRoutes;

RequestsRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
