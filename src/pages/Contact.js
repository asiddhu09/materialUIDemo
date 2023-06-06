import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Table,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, m: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">My Tech Site</Typography>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "540px",
          ml: 10,
          "@media (max-width:600px)": {
            width: 300,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table arial-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "grey", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <LocalPhoneIcon sx={{ color: "red", pt: 1 }} /> +91 9638527412
                </TableCell>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "red", pt: 1 }} /> achit@achit.com
                  </TableCell>
                </TableRow>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
