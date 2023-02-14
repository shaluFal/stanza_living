import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  InputAdornment,
  Grid,
  Card,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BedIcon from '@mui/icons-material/Bed';
import SearchIcon from '@mui/icons-material/Search';
import { _appFeatured } from '../../_mock';
import API from '../../Helper/api';
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
  // maxWidth: '100%',
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
  const [locations, setLocation] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocation(response.data?.listOfLocations);
      }
    );
  }, []);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => {
    setShowModal(true);
  };

  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="" src="/stanza/assets/overlay.svg" variants={varFade().in} />

        <Container>
          <ContentStyle>
            <m.div>
              <Grid container spacing={1} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12} md={8} lg={8}>
                  <AppFeatured list={_appFeatured} sx={{ marginBottom: '2%', position: 'relative', top: 0 }} />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Grid container spacing={7}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '125%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Modern Student
                          <br /> Housing
                        </Typography>
                        <img src="images/modern_1.jpg" alt="" style={{ width: 'initial', height: '125%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '120%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Co-living <br /> Professionals
                        </Typography>
                        <img src="images/modern_2.jpg" alt="" style={{ width: 'initial', height: '125%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ width: '100%', height: '125%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                          Managed <br /> Apartments
                        </Typography>
                        <img src="images/modern_3.jpg" alt="" style={{ width: 'initial', height: '125%' }} />
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </m.div>

            <m.div variants={varFade().inUp} sx={{ borderRadius: '10px 0px 0px 10px' }}>
              <Grid
                container
                sx={{
                  position: 'absolute',
                  top: { lg: '55%', xs: '15%', md: '55%' },
                  paddingLeft: '2%',
                  borderRadius: '10px 0px 0px 10px',
                }}
              >
                <Grid item lg={3} xs={4}>
                  <FormControl fullWidth>
                    {/* <InputLabel style={{ borderRadius: '10px 0px 0px 10px' }}>Choose property type</InputLabel> */}
                    <Select
                      id="demo-simple-select"
                      label="choose property type"
                      // inputProps={{
                      //   borderRadius: "10px 0px 0px 10px"
                      // }}
                      inputProps={{ 'aria-label': 'Without label' }}
                      onChange={(e) => {
                        handleModalClose();
                        navigate(`/contact-us/${e.target.value}/`);
                      }}
                      value="hi"
                      sx={{ background: 'white', borderRadius: '10px 0px 0px 10px' }}
                    >
                      <MenuItem value={'hi'}>Choose Property type</MenuItem>
                      {locations.map((lt) => {
                        return <MenuItem value={lt.id}>{lt.value}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={2} xs={1} md={4} sx={{ borderRadius: '0px 10px 10px 0px' }}>
                  <TextField
                    id="Find in and around."
                    inputProps={{ 'aria-label': 'Without label' }}
                    placeholder="Find in and around."
                    variant="outlined"
                    sx={{
                      background: 'white',
                      borderRadius: '0px 10px 10px 0px',
                      width: { xs: '155px', lg: '200px', md: '200px' },
                    }}
                  />
                </Grid>
              </Grid>
            </m.div>

            <m.div>
              <Divider />
              <Box sx={{ py: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <LocationCityIcon style={{ fontSize: '1.6rem', color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '14px' }}>24+ Cities</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <ApartmentIcon sx={{ fontSize: '1.6rem', color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '14px' }}>450+ Residences</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" component="div" sx={{ color: '#000' }}>
                    <BedIcon sx={{ fontSize: '1.6rem', color: 'rgb(0, 171, 85)' }} />
                    &nbsp;
                    <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '14px' }}>70,000+ Beds</span>
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
