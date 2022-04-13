import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="home">
      <Box padding="20px">
        <Card style={theme.body} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/assets/background.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={theme.text}>
                Title 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                lorem ipsum
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button style={theme.button} variant="contained" size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
