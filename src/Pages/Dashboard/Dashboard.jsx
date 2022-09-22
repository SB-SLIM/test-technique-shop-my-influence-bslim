import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MuiRouterLink, Title } from "ui-components";
import { Button } from "ui-components/Buttons";
import Icon from "ui-components/Icon";

function Dashboard() {
  return (
    <div>
      <Icon variant="cart" size="small" color="primary" type="rounded" />
      <Icon variant="cart" size="medium" color="secondary" type="rounded" />
      <Icon variant="cart" size="large" color="secondaryDark" type="rounded" />
      <Icon variant="cart" size="small" color="casablanca" type="square" />
      <Icon
        variant="cart"
        size="medium"
        color="casablancaLight"
        type="square"
      />
      <Icon variant="cart" size="large" color="secondary" type="square" />
      <Icon variant="cart" size="small" color="primary" type="default" />
      <Icon variant="cart" size="medium" color="secondary" type="default" />
      <Icon variant="cart" size="large" color="secondary" type="default" />
      <Button>teSt</Button>
      <Button startIcon={<Icon variant="calendar" />}>teSt</Button>
      <Box bgcolor="primary">
        <MuiRouterLink>
          <Icon variant="home" size="large" />
        </MuiRouterLink>
      </Box>
      <Title type="title1">Test title for fun</Title>
      <Title type="title2">Test title for fun</Title>
    </div>
  );
}

export default Dashboard;
