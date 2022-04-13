import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

test("renders container on Layout", () => {
 const { container } = render(<Layout />);
 expect(container.firstChild).toHaveClass("container");
});
