import React from 'react';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
import API from '../Helper/api';

const SearchPropertyDetailPage = () => {
  const [property, setProperty] = React.useState([]);

  React.useEffect(() => {
    API.get(
      '/api/WebsiteAPI/GetPropertyData?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&FacilityCode=PMS1000'
    ).then((response) => {
      console.log(response.data);
      setProperty(response.data.propertyObject);
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

            <img src="/images/search_property_1.jpg" alt="" />
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
                <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Amenities</Typography>
              </Grid>

              {property.facilityAmenities?.length > 0 &&
                property.facilityAmenities[0].amenityNames?.split(',').map((loc, index) => {
                  return (
                    <>
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
                    </>
                  );
                })}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={12}>
              <Typography sx={{ marginTop: '5%', fontWeight: '600' }}>Services</Typography>
            </Grid>

            {property.facilityServices?.length > 0 &&
              property.facilityServices[0].serviceNames?.split(',').map((loc, index) => {
                return (
                  <>
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
                  </>
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
                  <>
                    <Grid item>
                      <Card
                        sx={{
                          borderRadius: '30px 30px',
                          padding: '6px',
                          border: '0.6px solid rgb(190, 190, 190)',
                        }}
                      >
                        {loc.day}: &nbsp;
                        {loc.breakfast} &nbsp;
                        {loc.lunch} &nbsp;
                        {loc.dinner} 
                      </Card>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchPropertyDetailPage;
