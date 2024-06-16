import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Sub from "./Sub";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Sub />
  </StrictMode>
);