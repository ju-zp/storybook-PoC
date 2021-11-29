import React from "react";
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Body,
    Small,
    ExtraSmall,
    Overline
} from "./Text";

export default {
    title: "Design system/Type styles",
};

const Container = ({children}) => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 60,
        alignItems: "flex-end"
    }}>
        {children}
    </div>
)

const Wrapper = ({ children }) => (
    <div>
        {children}
        <Body>Some text and info can go here</Body>
    </div>
)

export const Default = () => {
    return (
        <>
            <div style={{ marginBottom: 40}}>
                <H1>Type styles</H1>
            </div>
            <div>
                <H3>Headings</H3>
                <Container>
                    <Wrapper>
                        <H1>H1 - 60</H1>
                    </Wrapper>
                    <Wrapper>
                        <H2>H2 - 42</H2>
                    </Wrapper>
                    <Wrapper>
                        <H3>H3 - 34</H3>
                    </Wrapper>
                    <Wrapper>
                        <H4>H4 - 24</H4>
                    </Wrapper>
                    <Wrapper>
                        <H5>H5 - 20</H5>
                    </Wrapper>
                    <Wrapper>
                        <H6>H6 - 16</H6>
                    </Wrapper>
                </Container>
            </div>
            <div>
                <H3>Body</H3>
                <Container>
                    <Wrapper>
                        <Body>Body - 16</Body>
                    </Wrapper>
                    <Wrapper>
                        <Small>Small - 14</Small>
                    </Wrapper>
                    <Wrapper>
                        <ExtraSmall>Extra small - 12</ExtraSmall>
                    </Wrapper>
                    <Wrapper>
                        <Overline>Overline - 10</Overline>
                    </Wrapper>
                </Container>
            </div>
        </>
    )
}



