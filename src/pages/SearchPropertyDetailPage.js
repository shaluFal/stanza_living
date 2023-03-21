import React from 'react';
import { m } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  InputAdornment,
  Card,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { flexibleCompare } from '@fullcalendar/react';
import { FormLabel } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import AppCarousel from '../sections/@dashboard/general/app/AppCarousel';
import { _appFeatured } from '../_mock';

import API from '../Helper/api';
import { AppFeatured } from '../sections/@dashboard/general/app';
import Page from '../components/Page';

const SearchPropertyDetailPage = () => {
  const [property, setProperty] = React.useState([]);

  React.useEffect(() => {
    const facilityCode = window.location.pathname.split('/')[3];
    API.get(
      `/api/WebsiteAPI/GetPropertyData?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&FacilityCode=${facilityCode}`
    ).then((response) => {
      console.log(response.data);
      setProperty(response.data.propertyObject ? response.data.propertyObject : {});
    });
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
    <Page title="Coliving">
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: { xs: '10%', md: '4%' }
        }}
      >
        <Grid item xs={12} md={10}>
          <m.div>
            <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
              <Grid item xs={12} md={8}>
                <h1>{property.facilityName}</h1>

                <Typography sx={{ marginTop: '2px', marginBottom: '5px', color: 'rgb(125, 125, 125)' }}>
                  {/* Exeter House, Unnamed Road, Gachibowli, Hyderabad, Telangana 500075, India  */}
                  {property.locationCode}, Hyderabad, Telangana 500075, India
                </Typography>

                <Grid container sx={{ marginTop: '20px' }}>
                  <Grid item xs={10} md={8}>
                    {property.listOfFacilityImages?.length > 0 ? (
                      <AppCarousel list={property.listOfFacilityImages} />
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>

                <Typography sx={{ marginTop: '20px', color: 'rgb(125, 125, 125)' }}>Starts from</Typography>
                <Typography sx={{ fontWeight: '900', fontSize: '24px' }}>
                  ₹{property.rentMonthly}/<span style={{ fontSize: '22px' }}>mo*</span>
                </Typography>
                <Typography sx={{ color: 'rgb(125, 125, 125)' }}>
                  *Denotes starting price (exclusive of GST) for 7-9 months' stay. Prices may vary with tenure, room
                  occupancy, <br />
                  and attributes.
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        marginTop: '30px',
                        fontWeight: '500',
                        color: '#000',
                        marginBottom: '5px',
                        fontSize: '17px',
                      }}
                    >
                      Available occupancies :
                    </Typography>
                  </Grid>
                  {property.listOfUnitTypes?.map((lt) => {
                    return (
                      <div style={{ margin: '5px', paddingLeft: '16px' }}>
                        <Card
                          sx={{
                            borderRadius: '30px 30px',
                            padding: '9px',
                            border: '0.6px solid rgb(190, 190, 190)',
                            fontSize: '14px',
                          }}
                        >
                          {lt.unitType}
                        </Card>
                      </div>
                    );
                  })}
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ marginTop: '15px', fontWeight: '500', color: '#000', fontSize: '17px' }}>
                      Amenities :
                    </Typography>
                  </Grid>

                  {property.facilityAmenities?.length > 0 &&
                    property.facilityAmenities[0].amenityNames?.split(',').map((loc) => {
                      return (
                        <div key={loc.facilityCode} style={{ margin: '5px', paddingLeft: '16px' }}>
                          <Card
                            sx={{
                              borderRadius: '30px 30px',
                              padding: '9px',
                              border: '0.6px solid rgb(190, 190, 190)',
                              fontSize: '14px',
                            }}
                          >
                            {loc}
                          </Card>
                        </div>
                      );
                    })}
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ marginTop: '15px', fontWeight: '500', color: '#000', fontSize: '17px' }}>
                      Services :
                    </Typography>
                  </Grid>

                  {property.facilityServices?.length > 0 &&
                    property.facilityServices[0].serviceNames?.split(',').map((loc) => {
                      return (
                        <div key={loc.facilityCode} style={{ margin: '5px', paddingLeft: '16px' }}>
                          <Card
                            sx={{
                              borderRadius: '30px 30px',
                              padding: '9px',
                              border: '0.6px solid rgb(190, 190, 190)',
                              fontSize: '14px',
                            }}
                          >
                            {loc}
                          </Card>
                        </div>
                      );
                    })}
                </Grid>

                <Grid container spacing={2} sx={{ marginBottom: '4%' }}>
                  <Grid item xs={12}>
                    <Typography sx={{ marginTop: '15px', fontWeight: '600', marginBottom: '2%', fontSize: '17px' }}>
                      Food Menu:
                    </Typography>
                  </Grid>
                  <Card sx={{ padding: '4%', width: '90%', background: '#60c3ad1f', marginBottom: '2%' }}>
                    {property.listOfFoodItems &&
                      property.listOfFoodItems.map((loc, index) => {
                        return (
                          <Grid container key={loc.facilityCode} sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                            <Grid item xs={12}>
                              <Card
                                sx={{
                                  borderRadius: '30px 30px',
                                  padding: '10px 6px 10px 15px',
                                  border: '0.6px solid rgb(190, 190, 190)',
                                  // margin: '5px',
                                }}
                              >
                                <p style={{ fontWeight: '700', marginBottom: '1%', color: 'rgb(96 195 173)' }}>
                                  {loc.day} -
                                </p>
                                <p>
                                  <span style={{ fontWeight: '600', color: 'rgb(96 195 173)' }}>Breakfast :</span>{' '}
                                  {loc.breakfast}
                                </p>
                                <p>
                                  <span style={{ fontWeight: '600', color: 'rgb(96 195 173)' }}>Lunch : </span>
                                  {loc.lunch}{' '}
                                </p>
                                <p>
                                  <span style={{ fontWeight: '600', color: 'rgb(96 195 173)' }}>Dinner : </span>
                                  {loc.dinner}
                                </p>
                              </Card>
                            </Grid>
                          </Grid>
                        );
                      })}
                  </Card>
                  <Typography style={{ color: 'grey', marginTop: '2%' }}>
                    *This food menu is currently being served on the residence and is subject to change in future.
                  </Typography>
                </Grid>

                <Grid container>
                  <Grid item>
                    <h3>Neighbourhood</h3>
                    <p style={{color: "grey"}}>Getting to Exeter House and popular hotspots nearby</p>
                  </Grid>
                  <Grid item xs={12}>
                    <Card style={{ height: '50vh', width: '95%', marginTop: '2%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: '' }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                    </GoogleMapReact>
                    </Card>
                  </Grid>
                </Grid>

                <div style={{ marginBottom: '5%', marginTop: "4%" }}>
                  <h3>Details of {property.locationCode} House</h3>
                  <Typography sx={{ mt: 1 }}>
                    It's not your typical PG in {property.locationCode} House by Coliving is your second home. We say
                    that because this fully-furnished residence for females, like our other residences for Working
                    Professionals near Madhapur, Ameerpet, and Miyapur, is thoughtfully designed to not let you miss
                    home, hundreds of miles away from it. And the home-like comforts provided by our amenities like
                    housekeeping, high-speed internet, and delicious meals go a long way in doing so. Another breath of
                    fresh air is our tech-enabled living experience, courtesy of one-of-a-kind technology like the
                    Coliving - Resident App, biometric security, use of machine learning, and more.
                    <br />
                    Despite the technology that you won't find in any other PG hostel, we still like to depend on
                    old-school methods for real human connection. Your calendar here will be full - like it is in every
                    Coliving <span style={{ color: 'rgb(96 195 173)' }}>PG near {property.locationCode}</span> and TCS
                    Synergy Park - with movie screenings, game nights, and other community events and workshops where
                    you can bond with your fellow residents and experience life as a member of the Coliving family.
                    <br />
                    We're also implementing every safety measure possible to protect you from COVID-19, from regular
                    sanitization to thermal monitoring. After all, that's what family is for, isn't it? All this and
                    more sets Exeter House apart from any{' '}
                    <span style={{ color: 'rgb(96 195 173)' }}>Female PG with ac in {property.locationCode}</span>. But
                    if you're still unsure, that's alright. In fact, we'd like you to drop by for a visit and see for
                    yourself, what makes your second home, your second home.
                    <br />
                    Click to explore, a list of{' '}
                    <span style={{ color: 'rgb(96 195 173)' }}>PG females in Hyderabad</span> or
                    <span style={{ color: 'rgb(96 195 173)' }}> Co-ed PGs in Hyderabad</span>
                  </Typography>

                  <h4 style={{ marginTop: '2%' }}>Frequently Asked Questions</h4>
                  <Typography sx={{ fontSize: '16px', fontWeight: 600, marginTop: '1%' }}>
                    How Safe Will you be from COVID-19 in a Coliving Residence?
                  </Typography>
                  <Typography>
                    Simply put, for COVID-19, we have a strict no-entry policy. Our ‘COVID-19 Combat Ready’ Operation
                    Framework includes every measure possible, from social distancing in common areas to thermal
                    monitoring, in order to keep you safe. Read more about our best-in-class safety measures{' '}
                    <span style={{ color: 'rgb(96 195 173)' }}>here</span>.
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 600, marginTop: '1%' }}>
                    Are there any Entry-Exit restrictions in Coliving Residences?
                  </Typography>
                  <Typography>
                    Simple. A local hostel or{' '}
                    <span style={{ color: 'rgb(96 195 173)' }}>PG near {property.locationCode}</span> will never be more
                    than a hostel or a PG. But Coliving will never be less than your second home. And that is the one
                    difference that makes all the difference.
                    {/* Check Stanza Living Residences in other parts of Hyderabad:
                  <p style={{ color: 'rgb(96 195 173)' }}></p> */}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 600, marginTop: '1%' }}>
                    What are the Steps Taken to Ensure Security in the Residences?
                  </Typography>
                  <Typography>
                    Every single Coliving residence is equipped with our multi-tier, tech-enabled security system.
                    Because when it comes to your safety, anything less is not safe enough.
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 600, marginTop: '1%' }}>
                    How Can I Book a Bed With Coliving?
                  </Typography>
                  <Typography>
                    We love your enthusiasm, but we’d still recommend dropping by to see the residence for yourself
                    before making it your second home. Till then, if you wish, you can reserve your bed for Rs. 1000
                    (the link’s there on the right).
                  </Typography>
                </div>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography sx={{ marginBottom: '4%', fontWeight: '600', fontSize: '18px', marginTop: '6%' }}>
                  Schedule a Visit
                </Typography>
                <Card
                  style={{
                    padding: '4%',
                    border: '1px solid rgb(96, 195, 173)',
                    background:
                      'linear-gradient(199.5deg, rgba(96, 195, 173, 0.5) -74.79%, rgba(96, 195, 173, 0) 96.63%)',
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <TextField
                        id="filled-basic"
                        label="First Name"
                        variant="filled"
                        sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="filled-basic"
                        label="Last Name"
                        variant="filled"
                        sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        id="fullWidth"
                        variant="filled"
                        sx={{ input: { background: '#fff' }, borderRadius: '20px 20px' }}
                      />
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">I am a</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          defaultValue="Working Professional"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="workingProfessional"
                            control={<Radio />}
                            label="Working Professional"
                          />
                          <FormControlLabel value="student" control={<Radio />} label="Student" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                      <FormControl variant="filled" fullWidth>
                        <InputLabel id="demo-simple-select-filled-label">Duration of your stay</InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          // value={age}
                          // onChange={handleChange}
                          sx={{ background: '#fff' }}
                        >
                          <MenuItem value="lessThan3Months">Less than 3 months</MenuItem>
                          <MenuItem value="3-6Months">3-6 months</MenuItem>
                          <MenuItem value="moreThan6Months">More than 6 months</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ marginBottom: '4%' }}>When are you planning to visit?</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>15 Mar</p>
                            <p>Wed</p>
                          </Card>
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>16 Mar</p>
                            <p>Wed</p>
                          </Card>
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>17 Mar</p>
                            <p>Wed</p>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ marginBottom: '4%' }}>What is your preferred time slot?</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>9-12</p>
                          </Card>
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>12-3</p>
                          </Card>
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ padding: '8%', textAlign: 'center', marginTop: '2%' }}>
                            <p>3-6</p>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
                <Button variant="contained" sx={{ width: '100%', marginTop: '6%', padding: '2%' }}>
                  Schedule a Visit
                </Button>
              </Grid>
            </Grid>
          </m.div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default SearchPropertyDetailPage;
