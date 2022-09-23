import { Card, Typography } from "@mui/material";
import React from "react";
import { Icon } from "ui-components";

function StatCard({ iconVariant, color, data: { value, subtitle } }) {
  return (
    <Card
      sx={{ height: 180, minWidth: "max-content" }}
      className="flex justify-center flex-col items-center"
    >
      <div className="mb-3">
        <Icon variant={iconVariant} type="rounded" color={color} />
      </div>
      <Typography variant="h6">
        <strong>{value}</strong>
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Card>
  );
}

export default StatCard;
