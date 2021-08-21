import React from "react";
import Link from "@material-ui/core/Link";
import { blueGrey } from "@material-ui/core/colors";
import LogoName from "../../components/LogoName";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Dfinity from "../../assets/logo_dfinity.svg";

function Hero() {
  return (
    <Box height="90vh">
      <Container>
        <Box pt={{ xs: 4, sm: 8, md: 10 }}>
          <LogoName primary="#1c6979" secondary="#ffd801" />
        </Box>
        <Box>
          <Typography
            variant="h2"
            style={{
              marginBottom: "3rem",
              // fontWeight: "700",
              color: blueGrey[700],
            }}
          >
            Crowdsale Protocol
          </Typography>
          <Grid container>
            <Grid item xs={10} sm={8} md={8} lg={8}>
              <Typography
                variant="h4"
                style={{ color: blueGrey[700], marginBottom: "6rem" }}
              >
                A decentralized smart-contract application that uses a novel
                funding protocol to mitigate the free-rider problem and enable
                efficient price discovery
              </Typography>
            </Grid>
          </Grid>
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
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={4}></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
