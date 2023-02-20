import { useCallback, useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select';
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
  // Select,
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

  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocationList(response.data?.listOfLocations);
      }
    );
  }, []);

  // const getAllLocations = useCallback(async () => {
  //   const locationid = window.location.pathname.split('/')[3];

  //   try {
  //     await API.post('http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfProperties', {
  //       apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
  //       location: locationid,
  //       amenities: '',
  //       services: '',
  //       amountStartRange: '0',
  //       amountEndRange: '10000000',
  //     })
  //       .then((res) => {
  //         setLocation(res.data.listOfProperties);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   getAllLocations();
  // }, [getAllLocations]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => {
    setShowModal(true);
  };

  const options = [
    { value: 'BoysHostel', label: 'Boys Hostel' },
    { value: 'GirlsHostel', label: 'Girls Hostel' },
  ];

  return (
    <>
      {/* <RootStyle> */}
      <Container sx={{ marginTop: '6%' }}>
        <m.div>
          <Grid container spacing={1}  sx={{marginTop: "45px"}}>
            <Grid item xs={12} md={8}>
              <AppFeatured list={_appFeatured} sx={{ marginBottom: '2%' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item>
                  <Card>
                    <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                      Modern Student
                      <br /> Housing
                    </Typography>
                    <img src="images/modern_1.jpg" alt="" />
                    <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                  </Card>
                </Grid>

                <Grid item>
                  <Card>
                    <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                      Co-living <br /> Professionals
                    </Typography>
                    <img src="images/modern_2.jpg" alt="" />
                    <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                  </Card>
                </Grid>

                <Grid item>
                  <Card>
                    <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700' }}>
                      Managed <br /> Apartments
                    </Typography>
                    <img src="images/modern_3.jpg" alt="" />
                    <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </m.div>

        <m.div sx={{ borderRadius: '10px 0px 0px 10px' }}>
          <Grid
            container
            sx={{
              position: 'absolute',
              top: { md: '55%', xs: '25%', lg: '45%' },
              padding: '2%',
              borderRadius: '10px 0px 0px 10px',
            }}
          >
            <Grid item xs={6} md={5} lg={2}>
              <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: "10px 0px 0px 10px"
                }),
              }}
                placeholder={<div>Choose Property Type</div>}
                id="demo-simple-select"
                label="choose property type"
                inputProps={{ 'aria-label': 'Without label' }}
                options={options}
                sx={{ background: 'white', borderRadius: '10px 0px 0px 10px' }}
              />
            </Grid>
            <Grid item xs={4} md={5} lg={2} sx={{ borderRadius: '0px 10px 10px 0px' }}>
              <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: "0px 10px 10px 0px"
                }),
              }}
                placeholder={<div>Find in and around..</div>}
                options={locationList.map((lt) => {
                  return {
                    value: lt.id,
                    label: lt.value,
                  };
                })}
                onChange={(data) => {
                  // handleModalClose();
                  navigate(`/contact-us/${data.value}/`);
                }}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
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
                <BedIcon sx={{ fontSize: '1.5rem', color: 'rgb(0, 171, 85)' }} />
                &nbsp;
                <span style={{ verticalAlign: 'super', fontWeight: '600', fontSize: '14px' }}>70,000+ Beds</span>
              </Typography>
            </div>
          </Box>
          <Divider />
        </m.div>
      </Container>
      {/* </RootStyle> */}
    </>
  );
}
