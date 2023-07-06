import React from "react";
import PropTypes from "prop-types";
import { Title } from "./statisticTitle.styled";

export const StatisticTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

StatisticTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
