import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, InputAdornment, Card, Button, Divider } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import InputStyle from '../../components/InputStyle';
import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'Bali',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(239) 555-0108',
  },
  {
    country: 'London',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(319) 555-0115',
  },
  {
    country: 'Prague',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(252) 555-0126',
  },
  {
    country: 'Moscow',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(307) 555-0133',
  },
];

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
  overflow:'scroll',
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
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative'}}>
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
            {/* <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <AppFeatured list={_appFeatured} sx={{ marginRight: '2%', width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Grid container sx={{ marginLeft:'2%'}}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{  marginBottom: '2%', width: '70%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%' }}>Modern Student Housing</Typography>
                        <img src="images/modern_1.jpg" alt=""  style={{width:'initial'}}/>
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{ marginBottom: '2%',  width: '70%' }}>
                        <Typography sx={{ position: 'absolute', top: '5%', left: '2%'  }}>Co-living Professionals</Typography>
                        <img src="images/modern_2.jpg" alt=""  style={{width:'initial'}}/>
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card sx={{marginBottom: '2%', width: '70%' }}>
                        <Typography  sx={{ position: 'absolute', top: '5%', left: '2%'  }}>Managed Apartments</Typography>
                        <img src="images/modern_3.jpg" alt="" style={{width:'initial'}}/>
                        <ArrowForwardIcon sx={{ position: 'absolute', bottom: '10%', left: '5%' }} />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
          </m.div>

          <m.div>
            <Typography sx={{ marginTop: '2%', fontWeight: '700', marginBottom: '5%' }}>
              143 PGs waiting to be yours in Bengaluru
            </Typography>
          </m.div>

          <m.div>
            <Card sx={{ padding: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 5 }}>
                          <Typography variant="subtitle1">Starts from</Typography>
                          <Typography >Rs 10,000/mo*</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 4 }}>
                          <Button
                            variant="contained"
                            target="_blank"
                            rel="noopener"
                            href=""
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
          </m.div>

          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography >Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>

          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>

          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>

          <m.div>
            <Card sx={{ padding: '5%', marginTop: '5%', paddingBottom: '10%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 5 }}>
                    <img src="/images/pg_1.jpg" alt="" style={{ width: '100%', height: '70%', marginRight: '15%' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="subtitle1">Amsterdam House</Typography>
                    <Typography>Electronic City Phase 1</Typography>

                    <Grid container spacing={3} sx={{ marginTop: '15%',}}>
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
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
                            href="https://material-ui.com/store/items/minimal-dashboard/"
                          >
                            Unlock a discount
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </m.div>


          <Divider />

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
