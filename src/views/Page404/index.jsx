import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Illustration404 from "../../assets/illustration_404.svg";
import Button from "@material-ui/core/Button";

function Page404() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={Illustration404}
        style={{ height: "46vmin", display: "block", margin: "2rem 0" }}
        alt="logo"
      />
      <Button variant="outlined" color="primary" component={Link} href="/">
        go home
      </Button>
    </Box>
  );
}

export default Page404;
