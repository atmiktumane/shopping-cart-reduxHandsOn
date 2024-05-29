import React from "react";

import { AllRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
