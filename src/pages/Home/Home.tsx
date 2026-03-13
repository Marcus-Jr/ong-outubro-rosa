import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../assets/images/image.png";
import { Container, GlobalStyles, Grid, Box, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const StyledHome = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  position: "relative",
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "560px",
  height: "auto",
  objectFit: "contain",
  display: "block",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    width: "100%",
  },
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

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    bottom: theme.spacing(1),
  },

  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
    "40%": { transform: "translateX(-50%) translateY(-10px)" },
    "60%": { transform: "translateX(-50%) translateY(-5px)" },
  },
}));

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": { margin: 0, padding: 0, height: "100%" },
          "#root": { backgroundColor: theme.palette.primary.main }, // 👈 garante fundo rosa no root
        }}
      />

      <StyledHome>
        <Container
          maxWidth="xl"
          disableGutters={isMobile}   // 👈 remove padding lateral no mobile
          sx={{ width: "100%" }}
        >
          {isMobile ? (
            // ── Layout Mobile ──────────────────────────────────────
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "flex-end",  // âncora o conteúdo embaixo
                pb: 8,
                px: 3,
                gap: 2,
              }}
            >
              {/* Texto */}
              <Box textAlign="center">
                <Typography
                  color="secondary.main"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "3rem", lineHeight: 1.15 }}
                >
                  Outubro
                  <br />
                  Rosa
                </Typography>

                <Typography
                  color="secondary.main"
                  sx={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 320, mx: "auto" }}
                >
                  A campanha que destaca a importância da prevenção e do
                  diagnóstico precoce do câncer de mama. Junte-se a essa causa!
                </Typography>
              </Box>

              {/* Imagem ancorada na base */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <StyledImage src={image} alt="Outubro Rosa" />
              </Box>
            </Box>
          ) : (
            // ── Layout Desktop ─────────────────────────────────────
            <Grid
              container
              spacing={2}
              sx={{ minHeight: "100vh" }}
              alignItems="center"
            >
              <Grid size={{ md: 6 }} sx={{ height: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <StyledImage src={image} alt="Outubro Rosa" />
              </Grid>

              <Grid size={{ md: 6 }}>
                <Box display="flex" flexDirection="column" pb={8}>
                  <Typography variant="h1" fontWeight="bold" color="secondary.main" gutterBottom>
                    Outubro Rosa
                  </Typography>
                  <Typography variant="h6" color="secondary.main" sx={{ maxWidth: 500, mb: 2, lineHeight: 1.7 }}>
                    A campanha que destaca a importância da prevenção e do
                    diagnóstico precoce do câncer de mama. Junte-se a essa causa!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </Container>

        <ScrollIcon onClick={() => handleSmoothScroll("about")} />
      </StyledHome>
    </>
  );
}

export default Home;