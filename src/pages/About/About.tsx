import { Box, Card, CardContent, Typography, Grid, Divider } from "@mui/material";

function About() {
  return (
    <Box id="about" sx={{ bgcolor: "primary.main", minHeight: "70vh", py: 8, px: { xs: 2, md: 8 },}}>

      <Grid container spacing={4} justifyContent="center">
        <Grid  size={{xs:12, md:4}}>
          <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },}}>
            <CardContent>
              <Typography variant="h5" align="center" sx={{ color: "secondary.main", fontWeight: "bold", mb: 2 }}> 
                História
              </Typography>
              <Divider sx={{ mb: 2, bgcolor: "secondary.main" }} />
              <Typography align="center" variant="body1" sx={{ color: "tertiary.main" }}>
                O câncer de mama é uma das doenças mais antigas conhecidas pela
                humanidade. Relatos datam do Egito Antigo, por volta de 1600 a.C.,
                descrevendo tumores e tratamentos rudimentares. Com o avanço da
                medicina, passou-se a compreender melhor suas causas, diagnóstico
                precoce e formas de tratamento, levando a um aumento
                significativo na taxa de cura.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12, md:4}}>
          <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },}}>
            <CardContent>
              <Typography align="center" variant="h5" sx={{ color: "secondary.main", fontWeight: "bold", mb: 2 }}> 
                Dados no Brasil
              </Typography>
              <Divider sx={{ mb: 2, bgcolor: "secondary.main" }} />
              <Typography  align="center" variant="body1" sx={{ color: "tertiary.main" }}>
                No Brasil, o câncer de mama é o tipo mais comum entre as mulheres,
                representando cerca de 30% de todos os casos novos a cada ano.
                Estimativas do INCA indicam mais de 70 mil novos diagnósticos
                anuais. O diagnóstico precoce e o acesso a exames de mamografia
                são fundamentais para o tratamento eficaz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12, md:4}}>
          <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },}}>
            <CardContent>
              <Typography align="center" variant="h5" sx={{ color: "secondary.main", fontWeight: "bold", mb: 2 }}> 
                Faixas Etárias Mais Atingidas
              </Typography>
              <Divider sx={{ mb: 2, bgcolor: "secondary.main" }} />
              <Typography align="center"variant="body1" sx={{ color: "tertiary.main" }}>
                O câncer de mama é mais frequente em mulheres entre 40 e 69 anos,
                embora possa ocorrer em faixas etárias mais jovens. Fatores como
                histórico familiar, genética, sedentarismo e obesidade aumentam o
                risco. A prevenção e o acompanhamento médico regular são
                essenciais em todas as idades.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
