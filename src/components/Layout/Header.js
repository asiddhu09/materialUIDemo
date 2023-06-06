import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import WidgetsIcon from "@mui/icons-material/Widgets";
const Header = () => {
  const [mobileOpen, setMobileopen] = useState(false);
  //handle menu click
  const handleDrwaerToggle = () => {
    setMobileopen(!mobileOpen);
  };
  //menu drwaer
  const drawer = (
    <Box onClick={handleDrwaerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <DevicesIcon />
        TechY
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/menu"}>
            Menu
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrwaerToggle}
            >
              <WidgetsIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <DevicesIcon />
              TechY
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/menu"}>
                    Menu
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrwaerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
