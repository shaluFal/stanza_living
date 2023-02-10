import { m } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
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
  overflowY: 'scroll',
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
        <Container component={MotionContainer} sx={{ position: 'relative' }}>
          <ContentStyle>
            <m.div variants={varFade().inUp}>
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
            </m.div>
            <m.div>
              <Typography sx={{ marginTop: '5%' }}>Coliving/PG in Hyderabad</Typography>
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
                                    <Grid item xs={12} md={4}>
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
                                    <Grid item xs={12} md={4}>
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
            {/* <Divider />  */}
            {/* <TextAnimate text="Where" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="to" sx={{ mr: 2 }} />
            <TextAnimate text="find" sx={{ mr: 2 }} />
            <TextAnimate text="us?" />
          </Box> */}
            {/* <Grid container spacing={5} sx={{ mt: 5, color: 'common.white' }}>
            {CONTACTS.map((contact) => (
              <Grid key={contact.country} item xs={12} sm={6} md={3} lg={2} sx={{ pr: { md: 5 } }}>
                <m.div variants={varFade().in}>
                  <Typography variant="h6" paragraph>
                    {contact.country}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="body2">
                    {contact.address}
                    <br /> {contact.phoneNumber}
                  </Typography>
                </m.div>
              </Grid>
            ))}
          </Grid> */}
            {/* <Slider ref={carouselRef} {...settings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} isActive={index === currentIndex} index={index+1}/>
        ))}
      </Slider> */}

            {/* <Typography> <AppFeatured list={_appFeatured}  /></Typography> */}

            {/* <m.div>
              <Grid container spacing={4}>
                <Grid item md={8}>
                  <Typography>Exeter House</Typography>
                  <Typography>Exeter House, Unnamed Road, Gachibowli, Hyderabad, Telangana 500075, India</Typography>
                  
                  <img src="/images/search_property_1.jpg" alt="" />
                  <Typography>Starts from</Typography>
                  <Typography>₹8,499/mo*</Typography>
                  <Typography>
                    *Denotes starting price (exclusive of GST) for 7-9 months' stay. Prices may vary with tenure, room
                    occupancy, and attributes.
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Typography>Available occupancies</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        single
                      </Card>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Double
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Typography>Amenities</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Attached Washrooms
                      </Card>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Attached Washrooms
                      </Card>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Attached Washrooms
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Typography>Services</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Delicious Meals
                      </Card>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Workout Zone
                      </Card>
                    </Grid>
                    <Grid item md={4}>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        Hot Water Supply
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Typography>Food Menu</Typography>
                    </Grid>

                    <Grid item md={3}>
                      <Typography>
                        Days
                        <br />
                        Mon-Sun
                      </Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Typography>Breakfast</Typography>
                    </Grid>

                    <Grid item md={3}>
                      <Typography>Lunch</Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Typography>Dinner</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Typography>Show on map</Typography>
                </Grid>
              </Grid>
            </m.div> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
