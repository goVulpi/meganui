import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Heading from './Heading';

describe("Heading", () => {
  it("is truthy", () => {
    expect(Heading).toBeTruthy
  })
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Heading level={1}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});