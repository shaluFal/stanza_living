import { m } from 'framer-motion';
import { Link as RouterLink, Navigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, InputAdornment, Grid, Card, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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

const ContentStyle = styled((props) => <Stack spacing={2} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: '100%',
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',

  paddingBottom: theme.spacing(2),
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

  // const [locations, setLocation] = React.useState([]);

  // React.useEffect(() => {
  //   API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
  //     (response) => {
  //       setLocation(response.data?.listOfLocations);
  //     }
  //   );
  // }, []);

  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="" src="/assets/overlay.svg" variants={varFade().in} />

        <Container>
          <ContentStyle>
            <m.div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={8}>
                  <AppFeatured list={_appFeatured} sx={{ marginBottom: '2%' }} />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '112%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Modern Student
                          <br /> Housing
                        </Typography>
                        <img src="/images/modern_1.jpg" alt="" style={{ width: 'initial', height: '112%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '112%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Co-living <br /> Professionals
                        </Typography>
                        <img src="/images/modern_2.jpg" alt="" style={{ width: 'initial', height: '112%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '114%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Managed <br /> Apartments
                        </Typography>
                        <img src="/images/modern_3.jpg" alt="" style={{ width: 'initial', height: '114%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </m.div>

            <m.div variants={varFade().inUp}>
              <InputStyle
                stretchStart={400}
                placeholder="Search for your second home..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 30, height: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  position: 'absolute',
                  top: {lg: '60%', md: '20%', xs: '20%'},
                  right: {xs: '0', md: '0', lg: '60%'},
                  marginLeft: '2%',
                  borderRadius: '20px 20px 20px 20px',
                  backgroundColor: 'white',
                   display: "inline"
                }}
              />

              {/* <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Choose Property Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="choose property type"
                  onChange={(e) => {
                    handleModalClose();
                    Navigate(`/contact-us/${e.target.value}/`);
                  }}
                >
                  {locations.map((lt) => {
                    return <MenuItem value={lt.id}>{lt.value}</MenuItem>;
                  })}
                </Select>
              </FormControl> */}
            </m.div>

            <m.div>
              <Divider />
              <Box sx={{ py: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <LocationCityIcon style={{ fontSize: '2rem', color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '18px' }}>24+ Cities</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <ApartmentIcon sx={{ color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '18px' }}>450+ Residences</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <BedIcon sx={{ color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '18px' }}>70,000+ Beds</span>
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
