import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Layout from "./components/Layout";

test("renders layout", () => {
 render(<App />);
 render(<Layout />);
});