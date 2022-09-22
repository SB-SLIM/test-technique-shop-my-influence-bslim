import { Typography } from "@mui/material";
import { MuiRouterLink } from "ui-components";
import "./notFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">UH OH! You{"'"} re lost.</Typography>
      <Typography variant="body1">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the
      </Typography>
      <MuiRouterLink to="/">Dashboard page</MuiRouterLink>
    </div>
  );
}

export default NotFound;
