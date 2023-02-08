import { m } from 'framer-motion';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import Iconify from '../../components/Iconify';
import API from '../../Helper/api';

// ----------------------------------------------------------------------

// const CONTACTS = [
//   {
//     country: 'Bali',
//     address: '508 Bridle Avenue Newnan, GA 30263',
//     phoneNumber: '(239) 555-0108',
//   },
//   {
//     country: 'London',
//     address: '508 Bridle Avenue Newnan, GA 30263',
//     phoneNumber: '(319) 555-0115',
//   },
//   {
//     country: 'Prague',
//     address: '508 Bridle Avenue Newnan, GA 30263',
//     phoneNumber: '(252) 555-0126',
//   },
//   {
//     country: 'Moscow',
//     address: '508 Bridle Avenue Newnan, GA 30263',
//     phoneNumber: '(307) 555-0133',
//   },
// ];

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundImage:
  //   'url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/contact/hero.jpg)',
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

// http://pmsapis.crisprsys.net/api/WebsiteAPI/GetPropertyData?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&FacilityCode=PMS1000

// const baseURL =
//   'http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd';

export default function ContactHero() {
  const [location, setLocation] = React.useState([]);

  React.useEffect(() => {
    API.get('/api/WebsiteAPI/GetListOfLocations?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&CityCode=Hyd').then(
      (response) => {
        setLocation(response.data);
      }
    );
  }, []);

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
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
            <Typography sx={{ marginTop: '5%' }}>Coliving/PG in Bengaluru</Typography>
          </m.div>
          <m.div>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Typography sx={{ marginTop: '2%', fontWeight: '700', marginBottom: '5%' }}>
                  143 PGs waiting to be yours in Bengaluru
                </Typography>

                {location.listOfLocations &&
                  location.listOfLocations.map((loc) => {
                    return (
                      <div>
                        {loc.value ? (
                          <Card sx={{ padding: '3%', marginBottom: '4%' }}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={4}>
                                <img src="/images/pg_1.jpg" alt="" style={{ width: '120%', height: '100%' }} />
                              </Grid>
                              <Grid item xs={12} md={8}>
                                <Box>
                                  <Typography variant="subtitle1">Amsterdam House</Typography>
                                  <Typography>
                                    {/* {location.listOfLocations &&
                                          location.listOfLocations.map((loc) => {
                                            return <div key={loc.id}>{loc.value}</div>;
                                          })} */}
                                    {loc.value}
                                  </Typography>

                                  <Grid container sx={{ marginTop: '2%' }}>
                                    <Grid item xs={12} md={8}>
                                      Unisex | Double, Triple
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <Typography>View Directions</Typography>
                                    </Grid>
                                  </Grid>

                                  <Grid container sx={{ marginTop: '2%' }} spacing={1}>
                                    <Grid item md={12}>
                                      <Typography>Amenities</Typography>
                                    </Grid>

                                    <Grid item xs={12} md={5}>
                                      <Card
                                        sx={{
                                          borderRadius: '30px 30px',
                                          padding: '6px',
                                          border: '0.6px solid rgb(190, 190, 190)',
                                        }}
                                      >
                                        <Typography>Attached Washrooms</Typography>
                                      </Card>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                      <Card
                                        sx={{
                                          borderRadius: '30px 30px',
                                          padding: '6px',
                                          border: '0.6px solid rgb(190, 190, 190)',
                                        }}
                                      >
                                        <Typography>Attached Washrooms</Typography>
                                      </Card>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Card
                                        sx={{
                                          borderRadius: '30px 30px',
                                          padding: '6px',
                                          border: '0.6px solid rgb(190, 190, 190)',
                                        }}
                                      >
                                        <Typography>Attached Washrooms</Typography>
                                      </Card>
                                    </Grid>
                                  </Grid>

                                  <Grid container spacing={1} sx={{ marginTop: '4%' }}>
                                    <Grid item xs={12} md={4}>
                                      <Box sx={{ mb: 5 }}>
                                        <Typography variant="subtitle1">Starts from</Typography>
                                        <Typography>Rs 10,000/mo*</Typography>
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
                        ) : null}
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
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
