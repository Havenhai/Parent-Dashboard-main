// dashboard.jsx
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./global/Navbar";
import Sidebars from "./global/Sidebars";
import { Outlet } from "react-router-dom"; // Import Outlet

function DashboardX() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app flex flex-row min-h-screen">
          <div
            className={`sidebar transition-width duration-300 ${
              isCollapsed ? "w-20" : "w-64"
            } bg-gray-100 flex-shrink-0`}
          >
            <Sidebars
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
             
            />
          </div>
          <main
            className={`content flex-grow transition-all duration-300 overflow-auto p-5 ${
              isCollapsed ? "ml-0" : "ml-0"
            }`}
          >
            <Navbar setIsSidebar={setIsSidebar} />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default DashboardX;
