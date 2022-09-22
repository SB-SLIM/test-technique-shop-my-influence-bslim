import { Box } from "@mui/system";
import { SharedLayout } from "Components";

import { Dashboard, NotFound } from "Pages";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/">
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
