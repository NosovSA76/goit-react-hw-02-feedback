import React from "react";
import PropTypes from "prop-types";
import {
  ButtonsBox,
  ButtonGood,
  ButtonNeutral,
  ButtonBad,
} from "./buttons.styled";

export const Buttons = ({ onButtonClick }) => {
  const handleClick = (buttonType) => {
    onButtonClick(buttonType);
  };

  return (
    <ButtonsBox>
      <ButtonGood onClick={() => handleClick("good")}>Good</ButtonGood>
      <ButtonNeutral onClick={() => handleClick("neutral")}>
        Neutral
      </ButtonNeutral>
      <ButtonBad onClick={() => handleClick("bad")}>Bad</ButtonBad>
    </ButtonsBox>
  );
};

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
