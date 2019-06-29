import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Input", module)
  .add("uncontrolled", () => <input />)
  .add("controlled", ({ state, setState }) => (
    <input
      value={state.value}
      onChange={e => setState({ value: e.target.value })}
    />
  ));
