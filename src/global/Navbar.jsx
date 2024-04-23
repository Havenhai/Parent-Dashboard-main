
import { Box, IconButton, useTheme } from "@mui/material"; //box is like a div from material ui that allows writing of css code directly
import { useContext } from "react";
import { tokens,ColorModeContext } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
    {/* SEARCH BAR */}
    <Box
      display="flex"
      backgroundColor={`${colors.primary[400]} !important`}
      borderRadius="3px"
      
    >
      <InputBase sx={{ ml: 2, flex: 1, color:'white'}} placeholder="Search" /> 
      <IconButton type="button" sx={{ p: 1 , color:'black' }}>
        <SearchIcon />
      </IconButton>
    </Box>

    {/* ICON */}
    <Box display="flex">
        {/*functions that control condition of light and dark mode */}
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
      
      
    </Box>
  </Box>
  )
}

export default Navbar


