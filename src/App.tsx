import React from "react";
import MyRouter from "routers/index";
import { GlobalProvider } from "context/globalContext/globalContext";

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <GlobalProvider>
        <MyRouter />
      </GlobalProvider>
    </div>
  );
}

export default App;
