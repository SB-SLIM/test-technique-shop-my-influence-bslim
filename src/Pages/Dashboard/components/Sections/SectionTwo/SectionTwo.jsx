import { Grid } from "@mui/material";
import { MediaCard } from "Components";
import { InsightCard } from "Components/Cards";

import { SocialCard } from "Components/Cards/MediaCards";

import { DashboardSectionLayout } from "Components/Layouts";
import useStaticImages from "hooks/useStaticImages";

import React from "react";
import { Icon } from "ui-components";

function SectionTwo() {
  const images = useStaticImages();

  const insightsData = [
    {
      title: "mobile",
      subtitle: "most used device",
      icon: (
        <Icon variant="phone" color="secondary" size="medium" type="square" />
      ),
    },
    {
      title: "black",
      subtitle: "most popular color",
      icon: (
        <Icon
          variant="target"
          color="secondaryDark"
          size="medium"
          type="square"
        />
      ),
    },
    {
      title: "baskets",
      subtitle: "most popular subcat...",
      icon: (
        <Icon variant="award" color="casablanca" size="medium" type="square" />
      ),
    },
    {
      title: "monday",
      subtitle: "star of the week",
      icon: (
        <Icon
          variant="calendar"
          color="casablancaLight"
          size="medium"
          type="square"
        />
      ),
    },
    {
      title: "product",
      subtitle: "most popular product",
      icon: (
        <Icon variant="package" color="primary" size="medium" type="square" />
      ),
    },
    {
      title: "evening",
      subtitle: "star of the day",
      icon: (
        <Icon variant="sun" color="blueRibbon" size="medium" type="square" />
      ),
    },
  ];

  return (
    <DashboardSectionLayout title="main insights">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InsightCard data={insightsData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SocialCard
                data={{
                  title: "instagram",
                  subtitle: "most popular social media",
                  icon: <Icon variant="instagram" size="large" />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MediaCard
                data={{
                  title: "ideelook",
                  subtitle: "most popular influencer",
                  img: images.img6,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardSectionLayout>
  );
}

export default SectionTwo;
