import React from "react";
import styled, { css } from "styled-components";
import * as colours from "./shared/colours";
import { H6BoldStyle } from "./Text";
import PropTypes from "prop-types";

export const buttonStyle = css`
  ${H6BoldStyle};
  display: inline-block;
  background-color: ${(props) => (props.secondary ? colours.white : colours.jellyRed)};
  color: ${(props) =>
    props.secondary ? (props.disabled ? colours.darkGreyDisabled : colours.coalBlack) : colours.white};
  padding-right: 16px;
  padding-left: 16px;
  min-height: 40px;

  border: ${(props) =>
    "1px solid " +
    (props.disabled
        ? props.secondary
            ? colours.darkGreyDisabled
            : colours.jellyRed50
        : props.secondary
            ? colours.mediumGrey
            : colours.jellyRed)};
  border-radius: 4px;

  cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};

  :hover {
    color: ${(props) =>
    props.secondary ? (props.disabled ? colours.darkGreyDisabled : colours.white) : colours.white};
    background-color: ${(props) => (props.secondary ? colours.darkGrey : colours.darkRed)};
    border-color: ${(props) => (props.secondary ? colours.darkGrey : colours.darkRed)};
  }

  :focus {
    outline: 0;
    text-decoration: underline;
  }

  :disabled {
    background-color: ${(props) => (props.secondary ? colours.white : colours.jellyRed50)};
    border-color: ${(props) => (props.secondary ? colours.mediumGrey : colours.jellyRed50)};
  }

  :active {
    background-color: ${colours.coalBlack};
  }
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

const Button = (props) => <StyledButton {...props} />
Button.displayName = "Button";

Button.propTypes = {
  /**
   Currently primary will be the default behaviour unless set false and secondary is set to true. This might not be very
   intuitive and when moving to the design system project we could/should refactor this
   */
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  displayName: PropTypes.string
}

export default Button;
