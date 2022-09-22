// import { Link as RouterLink } from "react-router-dom";
// import { Link as MUILink, Typography } from "@mui/material";
import { Link as MUILink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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

      <MUILink
        variant="button"
        component={RouterLink}
        to="/dashboard"
        underline="hover"
      >
        customers page
      </MUILink>
    </div>
  );
}

export default NotFound;
