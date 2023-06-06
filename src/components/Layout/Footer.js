import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../App.css";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Icons  */}
          <GitHubIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved &copy; TechY
        </Typography>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          <p className="byname"> By Achit Siddhu</p>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
