import React from "react";
import styled from "styled-components";
import * as colours from "./shared/colours";
import { H3 } from "./Text";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Square = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  background-color: ${(p) => p.hex};
  margin: 0 10px 10px 0;
  border-radius: 4px;
  overflow: hidden;
  &:after {
    font-size: 12px;
    position: absolute;
    background: ${colours.coalBlack};
    color: ${colours.white};
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    content: ${(p) => `"${p.name}"`};
    display: block;
  }
`;

const primaryColours = [
  "jellyRed",
  "jellyRed50",
  "coalBlack",
  "darkGrey",
  "eagleTeal",
  "eagleTeal50",
  "lightGrey",
  "white",
];

const secondaryColours = [
  "midnightTeal",
  "midnightTeal50",
  "darkRed",
  "darkRed50",
  "visualPurple",
  "visualPurple50",
  "darkPurple",
  "darkPurple50",
  "cashGreen",
  "cashGreen50",
  "saffronOrange",
  "saffronOrange50",
  "citrusGreen",
  "citrusGreen50",
  "darkCitrusGreen",
  "darkCitrusGreen50",
  "middleBlue",
  "middleBlue50",
  "extraLightGrey",
  "mediumGrey",
  "mediumDarkGrey",
];

const backgroundColours= [
  "eagleTealBackground",
  "cashGreenBackground",
  "saffronOrangeBackground",
  "darkRedBackground",
  "jellyRedBackground",
  "darkPurpleBackground",
];

const legacyColourNames = (Object.keys(colours)).filter(
  (name) => !primaryColours.includes(name) && !secondaryColours.includes(name) && !backgroundColours.includes(name)
);

const mapNamesToColours = (names) => {
  return names.map((name) => {
    const hex = colours[name];
    return {
      name,
      hex,
    };
  });
};

export default {
  title: "Design system/Colours",
};

export const Default = () => {
  return (
    <>
      <H3>Colours</H3>
    <H3 style={{ marginTop: 20 }}>Primary colours</H3>
  <Container>
  {mapNamesToColours(primaryColours).map((c) => (
      <Square {...c} key={c.name} />
))}
  </Container>
  <H3 style={{ marginTop: 20 }}>Secondary colours</H3>
  <Container>
  {mapNamesToColours(secondaryColours).map((c) => (
      <Square {...c} key={c.name} />
))}
  </Container>
  <H3 style={{ marginTop: 20 }}>Background colours</H3>
  <Container>
  {mapNamesToColours(backgroundColours).map((c) => (
      <Square {...c} key={c.name} />
))}
  </Container>
  <H3 style={{ marginTop: 20 }}>Legacy colours (not in design system)</H3>
  <Container>
  {mapNamesToColours(legacyColourNames).map((c) => (
      <Square {...c} key={c.name} />
))}
  </Container>
  </>
);
};
