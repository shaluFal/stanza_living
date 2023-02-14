import React from 'react';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
import API from '../Helper/api';

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
    <div style={{ marginTop: '10%', marginLeft: '20%' }}>
      <div>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <h1>{property.facilityName}</h1>

            <Typography sx={{ marginTop: '5px', marginBottom: '10px' }}>
              Exeter House, Unnamed Road, Gachibowli, Hyderabad, Telangana 500075, India
            </Typography>

            {/* {property.listOfFacilityImages?.length > 0 &&
              property.listOfFacilityImages[0] */}
            {/* .map((fc, index) => { */}
            {/* return (
                  <div>
                  <img src={fc.photoURL} alt="" style={{ width: '120%', height: '100%' }} />
                  </div>
                 );
               })} */}

            {property.listOfFacilityImages?.length > 0 ? (
              <div>
                <img
                  src={property.listOfFacilityImages[0]?.photoURL}
                  alt=""
                  style={{ width: '120%', height: '100%' }}
                />
              </div>
            ) : (
              <div>
                <img src={''} alt="" style={{ width: '120%', height: '100%' }} />
              </div>
            )}

            <Typography sx={{ marginTop: '20px' }}>Starts from</Typography>
            <Typography sx={{ fontWeight: '900', fontSize: '20px' }}>₹{property.rentMonthly}/mo*</Typography>
            <Typography>
              *Denotes starting price (exclusive of GST) for 7-9 months' stay. Prices may vary with tenure, room
              occupancy, and attributes.
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Available occupancies</Typography>
              </Grid>
              {property.listOfUnitTypes?.map((lt) => {
                return (
                  <Grid item md={4}>
                    <Card
                      sx={{
                        borderRadius: '30px 30px',
                        padding: '6px',
                        border: '0.6px solid rgb(190, 190, 190)',
                      }}
                    >
                      {lt.unitType}
                    </Card>
                  </Grid>
                );
              })}
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Amenities</Typography>
              </Grid>

              {property.facilityAmenities?.length > 0 &&
                property.facilityAmenities[0].amenityNames?.split(',').map((loc) => {
                  return (
                    <div key={loc.facilityCode} style={{ margin: '5px' }}>
                      <Grid item>
                        <Card
                          sx={{
                            borderRadius: '30px 30px',
                            padding: '6px',
                            border: '0.6px solid rgb(190, 190, 190)',
                          }}
                        >
                          {loc}
                        </Card>
                      </Grid>
                    </div>
                  );
                })}
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Services</Typography>
              </Grid>

              {property.facilityServices?.length > 0 &&
                property.facilityServices[0].serviceNames?.split(',').map((loc) => {
                  return (
                    <div key={loc.facilityCode} style={{ margin: '5px' }}>
                      <Grid item>
                        <Card
                          sx={{
                            borderRadius: '30px 30px',
                            padding: '6px',
                            border: '0.6px solid rgb(190, 190, 190)',
                          }}
                        >
                          {loc}
                        </Card>
                      </Grid>
                    </div>
                  );
                })}
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Food Menu</Typography>
              </Grid>
              {/* 
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
            </Grid> */}

              {property.listOfFoodItems &&
                property.listOfFoodItems.map((loc, index) => {
                  return (
                    <Grid container key={loc.facilityCode}>
                      <Grid item md={12}>
                        <Card
                          sx={{
                            borderRadius: '30px 30px',
                            padding: '10px 6px 10px 15px',
                            border: '0.6px solid rgb(190, 190, 190)',
                            margin: '5px',
                          }}
                        >
                          <p style={{ fontWeight: 'bold' }}>{loc.day}</p>
                          <p>Breakfast : {loc.breakfast}</p>
                          <p>Lunch: {loc.lunch} </p>
                          <p>Dinner : {loc.dinner}</p>
                        </Card>
                      </Grid>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchPropertyDetailPage;
