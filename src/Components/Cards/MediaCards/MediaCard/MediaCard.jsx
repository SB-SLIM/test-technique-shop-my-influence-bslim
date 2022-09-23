import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

function MediaCard({ data: { title, subtitle, img }, bgColor }) {
  const theme = useTheme();

  const bgcolor = theme.palette.background.bgWomen;

  return (
    <Card className="h-[100%]">
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
        sx={{
          borderRadius: "inherit",
          backgroundColor: bgcolor,
          objectFit: "contain",
        }}
      />
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
export default MediaCard;
