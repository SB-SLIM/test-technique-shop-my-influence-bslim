import { Grid } from "@mui/material";
import { StatCard } from "Components";
import { ChartCard } from "Components/Cards/ChartCards";

import { DashboardSectionLayout } from "Components/Layouts";

import React from "react";

function SectionOne() {
  return (
    <DashboardSectionLayout title="overall performance">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StatCard
                iconVariant="bag"
                color="secondary"
                data={{ value: "1M €", subtitle: "sales" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StatCard
                iconVariant="card"
                color="primary"
                data={{ value: "31K", subtitle: "transactions" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                iconVariant="cart"
                color="casablancaLight"
                data={{ value: "43€", subtitle: "Panier moyen" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                iconVariant="share"
                color="casablanca"
                data={{ value: "689", subtitle: "Number of shares" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                iconVariant="nav"
                color="secondaryDark"
                data={{ value: "31K", subtitle: "sales" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ChartCard />
        </Grid>
      </Grid>
    </DashboardSectionLayout>
  );
}

export default SectionOne;
