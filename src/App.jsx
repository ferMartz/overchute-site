import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Twitter from "@material-ui/icons/Twitter";
import Mail from "@material-ui/icons/Mail";
import GitHub from "@material-ui/icons/GitHub";
import MenuBook from "@material-ui/icons/MenuBook";
import Tooltip from "@material-ui/core/Tooltip";

import FullLogo from "./logo-full.png";
import Dfinity from "./dfinity_logo.svg";

function App() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box>
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
            Crowdfunding the release of <br /> intellectual property
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
              <img
                src={Dfinity}
                alt="logo"
                style={{ height: "40px", marginBottom: "1rem" }}
              />
              <Typography
                variant="body1"
                children="Built on the Internet Computer"
                style={{ color: "#454545" }}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={4}>
              <Tooltip title="Docs">
                <Link href="https://docs.overchute.com/" target="_blank">
                  <IconButton
                    color="primary"
                    aria-label="book picture"
                    component="span"
                  >
                    <MenuBook fontSize="large" />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Github">
                <Link href="https://github.com/Overchute" target="_blank">
                  <IconButton
                    color="primary"
                    aria-label="github picture"
                    component="span"
                    style={{ marginLeft: "1rem" }}
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                </Link>
              </Tooltip>

              <Tooltip title="Contact">
                <IconButton
                  color="primary"
                  aria-label="mail picture"
                  component="span"
                  style={{ marginLeft: "1rem" }}
                >
                  <Mail fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
