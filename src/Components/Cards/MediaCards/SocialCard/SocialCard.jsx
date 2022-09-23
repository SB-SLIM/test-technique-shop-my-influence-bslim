import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function SocialCard({ data }) {
  const { title, subtitle, icon } = data;

  const theme = useTheme();

  const bgcolor = theme.palette.background.bgInstagram;

  return (
    <Card className="h-[100%]">
      <Box
        sx={{
          height: 200,
          borderRadius: "inherit",
          backgroundColor: bgcolor,
        }}
        className="flex justify-center items-center"
      >
        <Box
          sx={{ boxShadow: 3 }}
          className="inline-flex rounded-full p-3 text-white"
        >
          {icon}
        </Box>
      </Box>
      <CardContent className="flex justify-center items-center flex-col py-8">
        <Typography gutterBottom variant="h6" component="div">
          {capitalizeFirstLetter(title)}
        </Typography>
        <Typography variant="body1">
          {capitalizeFirstLetter(subtitle)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SocialCard;
