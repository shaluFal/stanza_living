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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2%',
        }}
      >
        <Grid item xs={12} md={8}>
          <m.div>
            <Grid container spacing={1} sx={{ marginTop: '45px' }}>
              <Grid item xs={12} md={8}>
                <AppFeatured list={_appFeatured} sx={{ marginBottom: '2%' }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Card>
                      <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700', fontSize: "18px" }}>
                        Modern Student
                        <br /> Housing
                      </Typography>
                      <img src="images/modern_1.jpg" alt="" />
                      <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                    </Card>
                  </Grid>

                  <Grid item>
                    <Card>
                      <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700', fontSize: "18px"  }}>
                        Co-living <br /> Professionals
                      </Typography>
                      <img src="images/modern_2.jpg" alt="" />
                      <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                    </Card>
                  </Grid>

                  <Grid item>
                    <Card>
                      <Typography sx={{ position: 'absolute', top: '5%', left: '2%', fontWeight: '700', fontSize: "18px"  }}>
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
                top: { md: '25%', xs: '25%', lg: '38%' },
                padding: '2%',
                borderRadius: '10px 0px 0px 10px',
              }}
            >
              <Grid item xs={6} md={3} lg={2}>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderRadius: '10px 0px 0px 10px',
                      padding: '7px',
                      fontSize: '14px',
                      fontWeight: '500',
                    }),
                  }}
                  placeholder={<div style={{ color: 'rgb(41, 45, 50)' }}>Choose Property</div>}
                  id="demo-simple-select"
                  label="choose property type"
                  inputProps={{ 'aria-label': 'Without label' }}
                  options={options}
                  sx={{ background: 'white', borderRadius: '10px 0px 0px 10px' }}
                  components={{ DropdownIndicator: () => <ExpandMoreIcon/>, IndicatorSeparator: () => null }}
                />
              </Grid>
              <Grid item xs={6} md={2} lg={2} sx={{ borderRadius: '0px 10px 10px 0px' }}>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderRadius: '0px 10px 10px 0px',
                      padding: '7px',
                      fontSize: '14px',
                      fontWeight: '500',
                    }),
                  }}
                  placeholder={<div style={{ color: 'rgb(41, 45, 50)', fontWeight: '500' }}>Find in..</div>}
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
                  components={{
                    DropdownIndicator: () => (
                      <Image
                        src="images/search-interface-symbol.png"
                        alt=""
                        style={{ width: '15px', marginRight: '10px'}}
                      />
                    ),
                    IndicatorSeparator: () => null,
                  }}
                  onInputChange={(input) => {
                    if (input) {
                      setMenuIsOpen(true);
                    } else {
                      setMenuIsOpen(false);
                    }
                  }}
                  menuIsOpen={menuIsOpen}
                />
              </Grid>
            </Grid>
          </m.div>

          <m.div>
            <Divider sx={{paddingTop: "10px"}} />
            {/* <Box sx={{ py: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}> */}
            <Grid container sx={{ textAlign: 'center', paddingBottom: '6px' }}>
              <Grid item xs={12} md={4}>
                <Typography>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    <LocationCityIcon
                      style={{ position: 'relative', top: '10px', fontSize: '2.5rem', color: 'rgb(0, 171, 85)', marginRight: '1%' }}
                    />
                    24+{' '}
                  </span>
                  Cities
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    <ApartmentIcon
                      style={{ position: 'relative', top: '10px', fontSize: '2.5rem', color: 'rgb(0, 171, 85)', marginRight: '1%'  }}
                    />
                    450+{' '}
                  </span>
                  Residences
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    <BedIcon
                      style={{ position: 'relative', top: '12px', fontSize: '2.6rem', color: 'rgb(0, 171, 85)', marginRight: '1%'  }}
                    />
                    70,000+{' '}
                  </span>
                  Beds
                </Typography>
              </Grid>
            </Grid>
            {/* </Box> */}
            <Divider style={{ color: '#fff' }} />
          </m.div>
        </Grid>
      </Grid>
    </>
  );
}
