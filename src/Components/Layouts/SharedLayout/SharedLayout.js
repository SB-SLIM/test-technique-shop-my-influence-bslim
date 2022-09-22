import { Box, Container, Grid } from "@mui/material";
import SideBar from "Components/SideBar";
import { Outlet } from "react-router";

import "./sharedLayout.css";

function SharedLayout() {
  return (
    <Grid container className="min-h-[100vh]">
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={8} container direction="column" className="py-6">
        <Container component="main" maxWidth="lg">
          <Outlet />
        </Container>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}

export default SharedLayout;
