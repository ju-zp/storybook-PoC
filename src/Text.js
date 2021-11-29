import styled, { css } from "styled-components";
import * as colours from "./shared/colours";

export const roboto = `Roboto, -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol"`;

export const nunitoSans = `"Nunito Sans", -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol"`;

const H1Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 60px;
  line-height: 64px;
  font-weight: normal;
  letter-spacing: -0.6px;
`;
const H2Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 42px;
  line-height: 48px;
  font-weight: normal;
  letter-spacing: -0.25px;
`;
const H3Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 34px;
  line-height: 40px;
  font-weight: normal;
  letter-spacing: 0;
`;
const H4Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 24px;
  line-height: 32px;
  font-weight: normal;
  letter-spacing: 0;
`;
const H5Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0;
`;
const H6Style = css`
  color: ${colours.coalBlack};
  font-family: ${roboto};
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: 0;
`;
export const H6BoldStyle = css`
  ${H6Style};
  font-weight: bold;
`;
const BodyStyle = css`
  color: ${colours.coalBlack};
  font-family: ${nunitoSans};
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: 0;
`;
const SmallStyle = css`
  color: ${colours.coalBlack};
  font-family: ${nunitoSans};
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  letter-spacing: 0;
`;
const ExtraSmallStyle = css`
  color: ${colours.coalBlack};
  font-family: ${nunitoSans};
  font-size: 12px;
  line-height: 16px;
  font-weight: normal;
  letter-spacing: 0;
`;
const OverlineStyle = css`
  font-family: ${nunitoSans};
  color: ${colours.darkGrey};
  font-size: 10px;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 16px;
`;

export const H1 = styled.h1`
  ${H1Style};
`;
export const H2 = styled.h2`
  ${H2Style};
`;
export const H3 = styled.h3`
  ${H3Style};
`;
export const H4 = styled.h4`
  ${H4Style};
`;
export const H5 = styled.h5`
  ${H5Style};
`;
export const H6 = styled.h6`
  ${H6Style};
`;
export const Body = styled.p`
  ${BodyStyle};
`;
export const Small = styled.p`
  ${SmallStyle};
`;
export const ExtraSmall = styled.p`
  ${ExtraSmallStyle};
`;
export const Overline = styled.p`
  ${OverlineStyle};
`;
