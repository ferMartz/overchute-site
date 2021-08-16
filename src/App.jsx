import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Twitter from "@material-ui/icons/Twitter";
import Mail from "@material-ui/icons/Mail";

import FullLogo from "./logo-full.png";
import Dfinity from "./dfinity.png";

function App() {
  return (
    <Box bgcolor="#b8b8b8">
      <Container>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <img
            src={FullLogo}
            style={{ width: "75%", marginTop: "2rem" }}
            alt="logo"
          />
          <Typography
            variant="h4"
            style={{
              marginBottom: "3rem",
              fontWeight: "700",
              color: "#454545",
            }}
          >
            Crowdfunding the release of <br /> intelectual property
          </Typography>
          <Grid container>
            <Grid item xs={10} sm={8} md={6} lg={6}>
              <Typography variant="h6" style={{ color: "#454545" }}>
                A decentralized smart-contract application that uses a novel
                funding protocol to mitigate the free-rider problem and enable
                efficient price discovery.
              </Typography>
            </Grid>
          </Grid>
          <Box mb="3rem"></Box>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={4}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{ marginLeft: "2rem" }}
              >
                <Mail fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={4}>
              <img src={Dfinity} alt="logo" style={{ marginBottom: "1rem" }} />
              <Typography
                variant="body1"
                children="Build on Internet Computer"
              />
              <p></p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
