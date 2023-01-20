import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, InputAdornment, Grid, Card, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BedIcon from '@mui/icons-material/Bed';
import { _appFeatured } from '../../_mock';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import { AppFeatured } from '../@dashboard/general/app';

// import Searchbar from '../../layouts/dashboard/header/Searchbar';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: '100%',
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// const HeroImgStyle = styled(m.img)(({ theme }) => ({
//   top: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 8,
//   width: '100%',
//   margin: 'auto',
//   position: 'absolute',
//   [theme.breakpoints.up('lg')]: {
//     right: '8%',
//     width: 'auto',
//     height: '48vh',
//   },
// }));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().in} />

        <Container style={{ marginTop: '6%' }}>
          <ContentStyle>
            <m.div>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <AppFeatured list={_appFeatured} sx={{ marginRight: '2%', width: '100%', marginBottom: '2%' }} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Grid container sx={{ marginLeft: '2%' }}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ marginBottom: '2%', width: '70%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%' }}>
                          Modern Student Housing
                        </Typography>
                        <img src="images/modern_1.jpg" alt="" style={{ width: 'initial' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ marginBottom: '2%', width: '70%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%' }}>
                          Co-living Professionals
                        </Typography>
                        <img src="images/modern_2.jpg" alt="" style={{ width: 'initial' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ marginBottom: '2%', width: '70%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%' }}>Managed Apartments</Typography>
                        <img src="images/modern_3.jpg" alt="" style={{ width: 'initial' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </m.div>

            <m.div variants={varFade().inUp}>
              <InputStyle
                stretchStart={280}
                placeholder="Search for your second home..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  position: 'absolute',
                  top: '55%',
                  marginLeft: '2%',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: 'white',
                }}
              />
            </m.div>

            <m.div>
              <Divider />
              <Box sx={{ py: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000', width: '40%' }}>
                    <LocationCityIcon sx={{ width: '30%', color: 'rgb(0, 171, 85)' }} /> &nbsp; 24+ Cities
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <ApartmentIcon sx={{ width: '30%', color: 'rgb(0, 171, 85)' }} /> &nbsp;450+ Residences
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <BedIcon sx={{ width: '30%', color: 'rgb(0, 171, 85)' }} /> &nbsp; 70,000+ Beds
                  </Typography>
                </div>
              </Box>
              <Divider />
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
