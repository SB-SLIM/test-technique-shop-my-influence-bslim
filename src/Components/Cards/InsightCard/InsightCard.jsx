import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function InsightCard({ data }) {
  return (
    <Card className="py-3 px-2 h-[100%] ">
      <CardContent className="min-w-fit">
        <Grid container spacing={3}>
          {data.map((item, i) => {
            const { title, subtitle, icon } = item;
            return (
              <Grid
                key={i}
                item
                xs={12}
                md={6}
                className="flex justify-start items-center gap-3 "
              >
                <div>{icon}</div>
                <div>
                  <Typography variant="h6" className="font-semibold">
                    {capitalizeFirstLetter(title)}
                  </Typography>
                  <Typography variant="body1">
                    {capitalizeFirstLetter(subtitle)}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InsightCard;
