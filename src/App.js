import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import app components
import { Banner, Header, Home } from "./components";
import theme from "./theme/mui";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <Banner />
      <Home />
    </ThemeProvider>
  );
}

export default App;
