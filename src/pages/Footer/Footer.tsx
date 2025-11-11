import { Box, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "tertiary.main", color: "primary.main", mt: 8, pt: 6, pb: 4, px: { xs: 3, md: 10 } }}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="body2" sx={{ opacity: 0.9, textAlign: { xs: "center", md: "left" }, lineHeight: 1.6 }}>
            Este site tem como objetivo conscientizar sobre a prevenção e o diagnóstico precoce do câncer de mama. 
            <br />
            <b>Sem visar lucro!</b>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ textAlign: { xs: "center", md: "right" }, pt: { xs: 4, md: 0 } }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Outubro Rosa. Todos os direitos reservados.
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Footer;
