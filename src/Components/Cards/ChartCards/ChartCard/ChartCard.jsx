import { Card } from "@mui/material";
import React from "react";
import ChartCardsLayout from "../ChartCardsLayout";

function ChartCard({ title, children }) {
  return (
    <Card className="h-[100%]">
      <ChartCardsLayout title={title}>{children}</ChartCardsLayout>
    </Card>
  );
}

export default ChartCard;
