import { m } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  InputAdornment,
  Card,
  Button,
  Divider,
  MenuItem,
  TextField,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { _appFeatured } from '../../_mock';
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import Iconify from '../../components/Iconify';
import API from '../../Helper/api';
import { AppFeatured } from '../@dashboard/general/app';
import SearchPropertyDetailPage from '../../pages/SearchPropertyDetailPage';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
  // overflowY: 'scroll',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    // bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  const [location, setLocation] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocations(response.data?.listOfLocations);
      }
    );
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllLocations = useCallback(async () => {
    const locationid = window.location.pathname.split('/')[3];

    try {
      await API.post('http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfProperties', {
        apiKey: 'eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=',
        location: locationid,
        amenities: '',
        services: '',
        amountStartRange: '0',
        amountEndRange: '10000000',
      })
        .then((res) => {
          setLocation(res.data.listOfProperties);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllLocations();
  }, [getAllLocations]);

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <RootStyle>
        <Container component={MotionContainer}>
          <ContentStyle>
            {/* <m.div variants={varFade().inUp}>
              <InputStyle
                stretchStart={280}
                placeholder="Search for your second home..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                  },
                }}
              />
            </m.div> */}
            <m.div variants={varFade().inUp}>
              <Grid container sx={{ position: 'absolute', top: '-1%', left: '12%' }}>
                <Grid item lg={3} md={2} xs={2}>
                  <FormControl fullWidth>
                    <InputLabel>Choose property type</InputLabel>
                    <Select
                      id="demo-simple-select"
                      label="choose property type"
                      onChange={(e) => {
                        handleModalClose();
                        navigate(`/contact-us/${e.target.value}/`);
                      }}
                      sx={{ background: 'white' }}
                    >
                      {locations.map((lt) => {
                        return <MenuItem value={lt.id}>{lt.value}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={2} md={1} xs={1}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Find in and around.. &nbsp;
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </m.div>
            <m.div>
              <Typography sx={{ marginTop: '2%' }}>Stanza Living/PG in Hyderabad</Typography>

              <Grid container sx={{ marginTop: '5px' }} spacing={2}>
                <Grid item lg={1} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Locality</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>
                <Grid item lg={1} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Budget</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>
                <Grid item lg={1.2} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Occupancy</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item lg={1} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Gender</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item lg={1} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Amenities</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item lg={1.2} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>My Wishlist</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item lg={1.2} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel> More Filters</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Ameerpet</MenuItem>
                          <MenuItem>Gachibowli</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item lg={1.2} xs={1} md={1}>
                  <Card
                    sx={{
                      borderRadius: '25px 25px',
                      padding: '4px',
                      border: '0.6px solid rgb(190, 190, 190)',
                    }}
                  >
                    <Typography sx={{ fontSize: '10px' }}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Popularity</InputLabel>
                        <Select label="" disableUnderline>
                          <MenuItem>Price: low to High</MenuItem>
                          <MenuItem>Price: High to low</MenuItem>
                          <MenuItem> Popularity</MenuItem>
                        </Select>
                      </FormControl>
                    </Typography>
                  </Card>
                </Grid>
              </Grid>

              {/* <h4 style={{marginTop: "2%", height: "100%"}}>&nbsp; | &nbsp;</h4> */}
            </m.div>

            <m.div>
              <Typography sx={{ marginTop: '2%' }}>Coliving/PG in Hyderabad</Typography>
            </m.div>
            <m.div>
              <Grid container spacing={2}>
                <Grid item md={8}>
                  <Typography sx={{ marginTop: '2%', fontWeight: '700', marginBottom: '5%' }}>
                    143 PGs waiting to be yours in Hyderabad
                  </Typography>

                  {location &&
                    location.map((loc) => {
                      return (
                        <div key={loc.facilityCode}>
                          <Card sx={{ padding: '3%', marginBottom: '4%', textDecoration: 'none' }}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={4}>
                                {/* {loc.listOfFacilityImages &&
                                  loc.listOfFacilityImages.map((fc, index) => {
                                    return (
                                      <div key={index}>
                                        <img src={fc.photoURL} alt="" style={{ width: '120%', height: '100%' }} />
                                      </div>
                                    );
                                  })} */}
                                {loc.listOfFacilityImages?.length > 0 ? (
                                  <img
                                    src={loc.listOfFacilityImages[0]?.photoURL}
                                    alt=""
                                    style={{ width: '120%', height: '100%' }}
                                  />
                                ) : (
                                  <img src={''} alt="" style={{ width: '120%', height: '100%' }} />
                                )}
                              </Grid>
                              <Grid item xs={12} md={8}>
                                <Box>
                                  <Typography variant="subtitle1">
                                    <Link
                                      to={`/search-property-detail/${loc.facilityCode}`}
                                      style={{ textDecoration: 'none', color: '#000' }}
                                    >
                                      {console.log(loc.facility)}
                                      {loc.facilityName}
                                    </Link>
                                  </Typography>
                                  <Typography>
                                    {/* {location.listOfLocations &&
                                          location.listOfLocations.map((loc) => {
                                            return <div key={loc.id}>{loc.value}</div>;
                                          })} */}
                                    {/* {loc.value} */}
                                  </Typography>

                                  <Grid container sx={{ marginTop: '2%' }}>
                                    <Grid item xs={12} md={8}>
                                      {/* Unisex | Double, Triple */}
                                      {loc.listOfUnitTypes &&
                                        loc.listOfUnitTypes.map((typ) => {
                                          return <div key={typ.facilityCode}>{typ.unitType} &nbsp;</div>;
                                        })}
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <Typography>View Directions</Typography>
                                    </Grid>
                                  </Grid>

                                  <Grid container sx={{ marginTop: '2%' }} spacing={1}>
                                    <Grid item md={12}>
                                      <Typography>Amenities</Typography>
                                    </Grid>

                                    {loc.facilityAmenities?.length > 0 &&
                                      loc.facilityAmenities[0].amenityNames?.split(',').map((amn) => {
                                        return (
                                          <div key={amn.facilityCode}>
                                            <Grid item>
                                              <Card
                                                sx={{
                                                  borderRadius: '30px 30px',
                                                  padding: '6px',
                                                  border: '0.6px solid rgb(190, 190, 190)',
                                                }}
                                              >
                                                <Typography sx={{ fontSize: '12px' }}>{amn}</Typography>
                                              </Card>
                                            </Grid>
                                          </div>
                                        );
                                      })}
                                  </Grid>

                                  <Grid container spacing={1} sx={{ marginTop: '4%' }}>
                                    <Grid item xs={12} md={4}>
                                      <Box sx={{ mb: 5 }}>
                                        <Typography variant="subtitle1">Starts from</Typography>
                                        <Typography>Rs {loc.rentMonthly}/mo*</Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                      <Box sx={{ mb: 4 }}>
                                        <Button
                                          variant="contained"
                                          target="_blank"
                                          rel="noopener"
                                          href=""
                                          style={{ fontSize: '12px', padding: '10px' }}
                                        >
                                          Schedule a visit
                                        </Button>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                      <Box sx={{ mb: 4 }}>
                                        <Button
                                          variant="contained"
                                          target="_blank"
                                          rel="noopener"
                                          href=""
                                          style={{ fontSize: '12px', padding: '10px' }}
                                        >
                                          Unlock discount
                                        </Button>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Card>
                        </div>
                      );
                    })}
                </Grid>
                <Grid item md={4} style={{ height: '100vh', width: '100%', marginTop: '6.5%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                  </GoogleMapReact>
                </Grid>
              </Grid>
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
