import React from 'react';
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
import { flexibleCompare } from '@fullcalendar/react';
import { FormLabel } from 'react-bootstrap';
import AppCarousel from '../sections/@dashboard/general/app/AppCarousel';
import { _appFeatured } from '../_mock';
import API from '../Helper/api';
import { AppFeatured } from '../sections/@dashboard/general/app';

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

  return (
    <div
      style={{
        marginTop: '5%',
        marginBottom: '5%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingRight: '30px',
        paddingLeft: 0,
      }}
    >
      <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <Grid item md={10}>
          <h1>{property.facilityName}</h1>

          <Typography sx={{ marginTop: '15px', marginBottom: '10px' }}>
            Exeter House, Unnamed Road, Gachibowli, Hyderabad, Telangana 500075, India
          </Typography>

          <Grid container sx={{ marginTop: '45px' }}>
            <Grid item xs={12} md={8}>
              {property.listOfFacilityImages?.length > 0 ? <AppCarousel list={property.listOfFacilityImages} sx={{width: "50%", height: "50%"}}/> : <></>}
            </Grid>
          </Grid>

          {/* {property.listOfFacilityImages?.length > 0 ? (
            <div>
              <img src={property.listOfFacilityImages[0]?.photoURL} alt="" style={{ width: '90%' }} />
            </div>
          ) : (
            <div>
              <img src={''} alt="" style={{ width: '100%', height: '60%' }} />
            </div>
          )} */}

          <Typography sx={{ marginTop: '20px' }}>Starts from</Typography>
          <Typography sx={{ fontWeight: '900', fontSize: '20px' }}>₹{property.rentMonthly}/mo*</Typography>
          <Typography>
            *Denotes starting price (exclusive of GST) for 7-9 months' stay. Prices may vary with tenure, room
            occupancy, and attributes.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ marginTop: '18px', fontWeight: '600', color: 'rgb(96 195 173)' }}>
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
              <Typography sx={{ marginTop: '15px', fontWeight: '600', color: 'rgb(96 195 173)' }}>
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
              <Typography sx={{ marginTop: '15px', fontWeight: '600', color: 'rgb(96 195 173)' }}>
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ marginTop: '15px', fontWeight: '600', marginBottom: '2%' }}>Food Menu:</Typography>
            </Grid>
            <Card sx={{ padding: '4%', width: "100%", background: '#60c3ad1f' }}>
              {property.listOfFoodItems &&
                property.listOfFoodItems.map((loc, index) => {
                  return (
                    <Grid container key={loc.facilityCode} sx={{ paddingLeft: '16px' }}>
                      <Grid item xs={12}>
                        <Card
                          sx={{
                            borderRadius: '30px 30px',
                            padding: '10px 6px 10px 15px',
                            border: '0.6px solid rgb(190, 190, 190)',
                            // margin: '5px',
                          }}
                        >
                          <p style={{ fontWeight: '700', marginBottom: '1%', color: 'rgb(96 195 173)' }}>{loc.day} -</p>
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
              {/* <Grid container spacing={7}>
                <Grid item>
                  <Typography>Days</Typography>
                  <Typography>Mon-Sun</Typography>
                </Grid>
                <Grid item sx={{ background: '#60c3ad1f' }}>
                  {property.listOfFoodItems &&
                    property.listOfFoodItems.map((loc, index) => {
                      return (
                        <Grid container key={loc.facilityCode} sx={{ paddingLeft: '16px' }}>
                          <Grid item xs={12}>
                            <Card
                              sx={{
                                borderRadius: '30px 30px',
                                padding: '10px 6px 10px 15px',
                                border: '0.6px solid rgb(190, 190, 190)',
                                margin: '5px',
                              }}
                            >
                              <p style={{ fontWeight: 'bold' }}>{loc.day} -</p>
                              <p>Breakfast : {loc.breakfast}</p>
                              <p>Lunch : {loc.lunch} </p>
                              <p>Dinner : {loc.dinner}</p>
                            </Card>
                          </Grid>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid> */}
            </Card>
          </Grid>
        </Grid>
        {/* <Grid item md={4}>
          <Typography> Schedule a Visit</Typography>
          <Card
            style={{
              padding: '4%',
              border: '1px solid rgb(96, 195, 173)',
              background: 'linear-gradient(199.5deg, rgba(96, 195, 173, 0.5) -74.79%, rgba(96, 195, 173, 0) 96.63%)',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{ background: '#fff' }} />
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{ background: '#fff' }} />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth label="Mobile Number" id="fullWidth" sx={{ background: '#fff' }} />
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
                    <FormControlLabel value="workingProfessional" control={<Radio />} label="Working Professional" />
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth sx={{ background: '#fff' }}>
                  <InputLabel id="demo-simple-select-label">Duration of your stay</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value="lessThan3Months">Less than 3 months</MenuItem>
                    <MenuItem value="3-6Months">3-6 months</MenuItem>
                    <MenuItem value="moreThan6Months">More than 6 months</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography>When are you planning to visit?</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default SearchPropertyDetailPage;
