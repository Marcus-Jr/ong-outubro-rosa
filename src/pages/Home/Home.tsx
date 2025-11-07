import { styled } from "@mui/material/styles";
import image from "../../assets/images/image.png";
import { Container, GlobalStyles, Grid, Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const StyledHome = styled("div")(({theme}) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  overflow: "hidden",
}));

const StyledImageBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end", 
  justifyContent: "center",
  height: "100%",
}));

const StyledImage = styled("img")(() => ({
  width: "200%",
  height: "100%",          
  objectFit: "contain",
  display: "block",
}));

const ScrollIcon = styled(KeyboardDoubleArrowDownIcon)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)", 
  fontSize: 50,
  color: theme.palette.secondary.main,
  cursor: "pointer",
  animation: "bounce 2s infinite",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
    "40%": { transform: "translateX(-50%) translateY(-10px)" },
    "60%": { transform: "translateX(-50%) translateY(-5px)" },
  },
}));

function Home() {
  return (
    <>
      <GlobalStyles styles={{ "html, body": { margin: 0, padding: 0, height: "100%" } }} />

      <StyledHome>
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Grid container spacing={2} sx={{ height: "100%" }} alignItems="center">
            
            <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
              <StyledImageBox>
                <StyledImage src={image} alt="Outubro Rosa" />
              </StyledImageBox>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box display="flex" flexDirection="column" height="100%" pb={{ xs: 4, md: 8 }}>
                <Typography variant="h1" fontWeight="bold" color="secondary.main" gutterBottom>
                  Outubro Rosa
                </Typography>

                <Typography variant="h6" color="secondary.main" sx={{ maxWidth: 500, mb: 2 }}>
                  A campanha que destaca a importância da prevenção e do diagnóstico precoce do câncer de mama. Junte-se a essa causa!
                </Typography>
                         
                <Typography maxWidth={"25%"}
                  component="a"
                  sx={{
                    color: "secondary.main",
                    fontWeight: "bold",
                    borderBottom: "2px solid transparent",
                    transition: "0.3s",
                    "&:hover": {
                      borderBottom: "2px solid",
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  Ler mais →
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ScrollIcon />
      </StyledHome>
    </>
  );
}

export default Home;
