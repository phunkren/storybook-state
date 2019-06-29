import React, { useState } from "react";
import styled from "styled-components";
import { configure, addDecorator } from "@storybook/react";

function Stage({ children, ...props }) {
  const [state, setState] = useState({});
  return <div {...props}>{children(state, setState)}</div>;
}

function State({ state, ...props }) {
  return <div {...props}>Parent state: {JSON.stringify(state)}</div>;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

function loadStories() {
  require("../src/stories/index.js");
}

addDecorator(story => (
  <Stage>
    {(state, setState) => (
      <Wrapper>
        {story({ state, setState })}
        <State state={state} />
      </Wrapper>
    )}
  </Stage>
));

configure(loadStories, module);
