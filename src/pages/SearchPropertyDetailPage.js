import React from 'react';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
import API from '../Helper/api';

const SearchPropertyDetailPage = () => {
  const [property, setProperty] = React.useState("");

  React.useEffect(() => {
    API.get(
      '/api/WebsiteAPI/GetPropertyData?APIKey=eJgDBiLVjroiksSVS8jLW5YXcHUAJOe5ZeOx80T9mzo=&FacilityCode=PMS1000'
    ).then((response) => {
      setProperty(response.data);
    });
  }, []);
  return (
    <div style={{ marginTop: '10%', marginLeft: '20%' }}>
      {/* {property.facilityAmenities &&
        property.facilityAmenities.map((obj, index) => { */}
          {/* return ( */}
            <div>
              <Grid container spacing={4}>
                <Grid item md={8}>
                  <Typography>{property.facilityAmenities &&
                                          property.facilityAmenities.map((loc) => {
                                            return <div key={loc.id}>{loc.amenityNames}</div>;
                                          })}</Typography>
                  <Typography>Exeter House, Unnamed Road, Gachibowli, Hyderabad, Telangana 500075, India</Typography>

                  {/* <Slider ref={carouselRef} {...settings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} isActive={index === currentIndex} index={index+1}/>
        ))}
      </Slider> */}

                  {/* <Typography> <AppFeatured list={_appFeatured}  /></Typography> */}
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
            </div>
          {/* ); */}
        {/* }
        ) */}
        {/* // } */}
      
    </div>
  );
};

export default SearchPropertyDetailPage;
