import { Grid } from "@mui/material";

import { DashboardSectionLayout } from "Components/Layouts";

import React from "react";

function SectionThree() {
  return (
    <DashboardSectionLayout title="in-depth analyst">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </DashboardSectionLayout>
  );
}

export default SectionThree;
