import { Card, Grid } from "@mui/material";
import React from "react";
import ChartCardsLayout from "../ChartCardsLayout";

function ChartCard2({ chart1, chart2 }) {
  return (
    <Card className="h-[100%]">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChartCardsLayout title={chart1.title}>
            {chart1.chart}
          </ChartCardsLayout>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCardsLayout title={chart2.title}>
            {chart2.chart}
          </ChartCardsLayout>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ChartCard2;
