import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent={"space-between"} alignItems="center" container>
          <Grid item>
            <Button
              startIcon={<PetsIcon />}
              color="inherit"
              onClick={() => navigate("/")}
            >
              Cats Revisited
            </Button>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("breedDetails")}>
                Breed Details
              </Button>
              <Button color="inherit" onClick={() => navigate("favorites")}>
                Favorites
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Box>
              <IconButton color="inherit">
                <LightMode />
              </IconButton>
              <IconButton>
                <DarkMode />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
