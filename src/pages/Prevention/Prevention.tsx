import { Box, Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";

function Prevention() {
  return (
    <Box id="prevention" sx={{ bgcolor: "primary.main", minHeight: "100vh" }}>
      
      <Box sx={{ background: "linear-gradient(135deg, #D9326F 0%, #730217 100%)", color: "#fff", py: 8, textAlign: "center", boxShadow: 4 }}>
        <HealingIcon sx={{ fontSize: 80, mb: 2 }} />
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>Prevenção do Câncer de Mama</Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>Cuidar-se é um ato de amor próprio</Typography>
      </Box>

      {/* Seção de cards verticais */}
      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
        
        {/* Card 1 */}
        <Grid size={{ xs: 12, md: 10 }}>
          <Card sx={{ display: "flex", alignItems: "center", borderRadius: 5, p: 3, boxShadow: 5, mb: 4, bgcolor: "#fff", transition: "0.3s", "&:hover": { transform: "scale(1.02)", boxShadow: 10 } }}>
            <FavoriteIcon sx={{ color: "secondary.main", fontSize: 60, mr: 3 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h5" sx={{ color: "tertiary.main", fontWeight: "bold", mb: 1 }}>Hábitos Saudáveis</Typography>
              <Divider sx={{ width: "50px", mb: 2, bgcolor: "secondary.main", height: "3px", borderRadius: 2 }} />
              <Typography variant="body1" sx={{ color: "tertiary.main" }}>
                Manter hábitos saudáveis é essencial na prevenção. Pratique exercícios regularmente, evite o consumo excessivo de álcool, não fume e mantenha uma alimentação rica em frutas, verduras e grãos integrais. Pequenas mudanças no dia a dia podem reduzir significativamente os riscos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid size={{ xs: 12, md: 10 }}>
          <Card sx={{ display: "flex", alignItems: "center", borderRadius: 5, p: 3, boxShadow: 5, mb: 4, bgcolor: "#fff", transition: "0.3s", "&:hover": { transform: "scale(1.02)", boxShadow: 10 } }}>
            <SearchIcon sx={{ color: "secondary.main", fontSize: 60, mr: 3 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h5" sx={{ color: "tertiary.main", fontWeight: "bold", mb: 1 }}>Autoexame e Diagnóstico Precoce</Typography>
              <Divider sx={{ width: "50px", mb: 2, bgcolor: "secondary.main", height: "3px", borderRadius: 2 }} />
              <Typography variant="body1" sx={{ color: "tertiary.main" }}>
                O autoexame das mamas ajuda na percepção de alterações. É recomendado realizá-lo mensalmente, poucos dias após o período menstrual. Além disso, exames de mamografia e acompanhamento médico periódico são essenciais para detectar o câncer em estágios iniciais, aumentando as chances de cura.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid size={{ xs: 12, md: 10 }}>
          <Card sx={{ display: "flex", alignItems: "center", borderRadius: 5, p: 3, boxShadow: 5, bgcolor: "#fff", transition: "0.3s", "&:hover": { transform: "scale(1.02)", boxShadow: 10 } }}>
            <LocalHospitalIcon sx={{ color: "secondary.main", fontSize: 60, mr: 3 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h5" sx={{ color: "tertiary.main", fontWeight: "bold", mb: 1 }}>Acompanhamento Médico</Typography>
              <Divider sx={{ width: "50px", mb: 2, bgcolor: "secondary.main", height: "3px", borderRadius: 2 }} />
              <Typography variant="body1" sx={{ color: "tertiary.main" }}>
                Consultas regulares com profissionais de saúde são indispensáveis. O ginecologista ou mastologista pode avaliar fatores de risco, solicitar exames específicos e orientar sobre o melhor momento para iniciar o rastreamento. Prevenir é sempre o melhor caminho.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Prevention;
