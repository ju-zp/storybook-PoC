import React from "react";
import styled from "styled-components";
import Button from "./Button";
import {H4, Overline} from "./Text";
import { Title, Description, Primary, ArgsTable, Stories, PRIMARY_STORY} from '@storybook/addon-docs';
import { withDesign } from 'storybook-addon-designs'


const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: auto auto auto;
  grid-template-rows: 40px;
  row-gap: 20px;
  column-gap: 80px;

  padding: 40px;
`;


const Template = (args) => (
    <Wrapper>
        <Button {...args}>{args.text}</Button>
    </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
    primary: true,
    secondary: false,
    disabled: false,
    text: "I am a button",
}

export const PrimaryBtn = Template.bind({})
PrimaryBtn.args = {
    primary: true,
    disabled: false,
    text: "I am a button"
}

PrimaryBtn.storyName = "Primary"
PrimaryBtn.parameters = {
    docs: {
        page: () => (
            <>
                <Title />
                <Description />
                <Primary name="Primary" />
                <ArgsTable story={PrimaryBtn}/>
            </>
        ),
    },
}

export const Secondary = Template.bind({})
Secondary.args = {
    secondary: true,
    disabled: false,
    text: "I am a button"
}
Secondary.parameters = {
    docs: {
        page: () => (
            <>
                <Title />
                <Description />
                <Primary />
                <ArgsTable />
            </>
        ),
    },
}

export default {
    title: "Design system/Buttons/CTA buttons",
    component: Button,
    decorators: [withDesign],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/Sq5aDw7BRwjXfu9Shb5TVR/Update-design-system?node-id=0%3A151'
        },
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description>CTA improved buttons are used when the button performs an action. The Primary variant should only be used once per screen, to ensure that the user’s attention is not diverted. For less important, or secondary, actions the Ghost variant can be used. If a desctructive action is needed, such as skipping a screen or cancelling out of a flow, it is recommend to use a text link to ensure attention is on the primary action. Never use the Ghost variant for a desctructive action.</Description>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY}/>
                    <Stories />
                </>
            ),
        }
    }
}


export const Old = () => (
    <Wrapper>
        <div />
        <Overline>Enabled</Overline>
        <Overline>Disabled</Overline>

        <H4>Primary</H4>
        <Button>Watch the video</Button>
        <Button disabled>Watch the video</Button>

        <H4>Secondary</H4>
        <Button secondary>Watch the video</Button>
        <Button secondary disabled>
            Watch the video
        </Button>
    </Wrapper>
);
Old.storyName = "Current implementation"
Old.parameters = {
    docs: { page: null }
}
