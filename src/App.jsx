import { useState } from "react";
import { GlobalStyles } from "./globalStyles/globalStyles";
import { Router } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
