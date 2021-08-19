import React, { useState } from "react";
import { Router } from "react-router-dom";
import routes, { renderRoutes } from "./routes";
import { createBrowserHistory } from "history";
import ScrollToTop from "./components/ScrollToTop";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ScrollToTop />
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
