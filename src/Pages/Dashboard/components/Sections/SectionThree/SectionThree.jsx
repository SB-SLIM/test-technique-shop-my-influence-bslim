import { Grid } from "@mui/material";
import { PieChart } from "Components";
import { ChartCard, ChartCard2 } from "Components/Cards/ChartCards";
import { BarChart } from "Components/Charts";
import { DashboardSectionLayout } from "Components/Layouts";
import React from "react";
import { dataChart1, dataChart2 } from "../../../DataChart";

function SectionThree() {
  return (
    <DashboardSectionLayout title="in-depth analyst">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ChartCard title="sales by influence's">
            <PieChart data={dataChart1} />
          </ChartCard>
        </Grid>
        <Grid item xs={12} md={8}>
          <ChartCard2
            chart1={{
              title: "sales by os",
              chart: <BarChart data={dataChart2} />,
            }}
            chart2={{
              title: "sales by Categories",
              chart: <BarChart data={dataChart2} />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <ChartCard2
            chart1={{
              title: "sales by os",
              chart: <BarChart data={dataChart2} />,
            }}
            chart2={{
              title: "sales by Categories",
              chart: <BarChart data={dataChart2} />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ChartCard title="sales by country" />
        </Grid>
      </Grid>
    </DashboardSectionLayout>
  );
}

export default SectionThree;
