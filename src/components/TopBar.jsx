import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHub from "@material-ui/icons/GitHub";
import MenuBook from "@material-ui/icons/MenuBook";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ padding: "1rem 0" }}>
        <Container>
          <Toolbar>
            <Box component="span" className={classes.logo}>
              {/* <Logo height="40px" primary="#fff" secondary="#ffd801" /> */}
            </Box>

            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              href="https://docs.overchute.com/"
              className={classes.menuButton}
              startIcon={<MenuBook />}
            >
              docs
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              href="https://github.com/Overchute"
              startIcon={<GitHub />}
            >
              github
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
