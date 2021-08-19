import React from "react";
import Hero from "./Hero";
import Box from "@material-ui/core/Box";

function HomeView() {
  return (
    <>
      <Hero />
    </>
  );
}

{
  /* <Box>
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
    </Box> */
}
export default HomeView;
