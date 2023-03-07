import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress, Card } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import Tabs from '@mui/material/Tabs';
// import { Tab, TabContext } from '@mui/material/Tab';
// // import TabContext from '@mui/material/Tab';
// import { TabList } from '@mui/lab';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// import 'react-tabs/style/react-tabs.css';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
import { _skills } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AboutWhat() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    // <RootStyle>
    // <Container component={MotionViewport}>
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item md={8}>
          <Box>
            <Box sx={{ borderColor: 'divider', marginLeft: { md: '28%' } }}>
              <Card sx={{ width: { md: '60%', xs: '100%' }, marginTop: '3%', padding: '2px' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '80px',
                    color: 'rgb(125, 125, 125)',
                    fontWeight: '700',
                  }}
                >
                  <Tab
                    label="The Why"
                    {...a11yProps(0)}
                    sx={{ marginLeft: { md: '18%' }, marginRight: { md: '10%' } }}
                  />
                  <Tab
                    label="The What"
                    {...a11yProps(1)}
                    sx={{ marginLeft: { md: '10%' }, marginRight: { md: '10%' } }}
                  />
                  <Tab
                    label="The How"
                    {...a11yProps(2)}
                    sx={{ marginLeft: { md: '10%' }, marginRight: { md: '10%' } }}
                  />
                </Tabs>
              </Card>
            </Box>

            <TabPanel value={value} index={0}>
              <Grid container spacing={7} sx={{ marginTop: '2%' }}>
                <Grid item xs={12} md={6}>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="h3" sx={{ mb: 3, paddingTop: { md: '15%' } }}>
                      We didn't find it for us,{' '}
                      <span style={{ color: 'rgb(96 195 173)' }}>so we created it for you</span>
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inRight}>
                    <Typography
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                        fontSize: '1rem',
                        fontWeight: '500',
                      }}
                    >
                      That's essentially our story in one sentence. Crammed up hostels or cooped up PGs - not much of a
                      choice, is it? Thats why we created Stanza Living - a place designed by people who've been in your
                      shoes. Understand you. And are inspired by you.
                    </Typography>
                  </m.div>
                </Grid>

                <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="images/about_1.jpg"
                      sx={{
                        borderRadius: 2,
                        // boxShadow: shadow,
                        width: { xs: '100%', md: '95%' },
                      }}
                    />
                  </m.div>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={6}
                sx={{
                  background: 'linear-gradient(rgb(226, 242, 240) 13.14%, rgba(226, 242, 240, 0) 100%)',
                  transform: 'matrix(1, 0, 0, -1, 0, 0)',
                  clipPath: 'polygon(0px 1%, 100% 28%, 100% 100%, 0px 100%)',
                  padding: '10em 0px 6em',
                }}
              >
                <Grid item xs={12} md={6} sx={{ pr: { md: 7 }, transform: 'matrix(1, 0, 0, -1, 0, 0)' }}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="images/about.jpg"
                      sx={{
                        borderRadius: 2,
                        // boxShadow: shadow,
                        width: '100%',
                        // paddingBottom: "18%"
                      }}
                    />
                  </m.div>
                </Grid>

                <Grid item xs={12} md={6} sx={{ transform: 'matrix(1, 0, 0, -1, 0, 0)' }}>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="h3" sx={{ mb: 3, paddingTop: '15%' }}>
                      You needed a place like home,{' '}
                      <span style={{ color: 'rgb(96 195 173)' }}>so we moved back home</span>
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inRight}>
                    <Typography
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                        fontSize: '1rem',
                        fontWeight: '500',
                      }}
                    >
                      It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and Sandeep, met again. Reminiscing about
                      the 'good old hostel days', they realised a lot of that 'good' could've been better. So to give
                      youngsters that 'better', in 2017, they set up a base in New Delhi, and the rest, as we say, is
                      the present.
                    </Typography>
                  </m.div>
                </Grid>
              </Grid>

              <m.div>
                <Typography variant="h3" sx={{ marginTop: '2%', textAlign: 'center' }}>
                  You moved to a new city, <br />
                  <span style={{ color: 'rgb(96 195 173)' }}>so we moved there too</span>
                </Typography>
                <Typography sx={{ textAlign: 'center', marginTop: '5px', fontWeight: '500' }}>
                  Today, we've come a long way - from the two residences in Delhi to an <br />
                  impressive 450+ residences in more than 24+ cities across the country, and <br /> we promise we'll
                  soon be ready to welcome you in many more.
                </Typography>

                <Grid container spacing={5} sx={{ marginLeft: '18%', marginTop: '1%', marginBottom: '4%' }}>
                  <Grid item>
                    <Card sx={{ padding: '12%' }}>
                      <Typography sx={{ textAlign: 'center' }}>
                        <span style={{ color: 'rgb(96 195 173)' }}>100 Beds</span> <br />{' '}
                        <span style={{ fontWeight: '700' }}>in DU North Campus</span>
                        <br /> July 2017
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <ArrowRightAltIcon sx={{ color: 'rgb(96 195 173)', marginTop: '190%' }} />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Card sx={{ padding: '12%' }}>
                      <Typography sx={{ textAlign: 'center' }}>
                        <span style={{ color: 'rgb(96 195 173)' }}>2000 Beds</span> <br />{' '}
                        <span style={{ fontWeight: '700' }}>in DU North Campus</span>
                        <br /> July 2017
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <ArrowRightAltIcon sx={{ color: 'rgb(96 195 173)', marginTop: '190%' }} />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Card sx={{ padding: '12%' }}>
                      <Typography sx={{ textAlign: 'center' }}>
                        <span style={{ color: 'rgb(96 195 173)' }}>70K+ Beds</span> <br />{' '}
                        <span style={{ fontWeight: '700' }}>in DU North Campus</span>
                        <br /> July 2017
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>

                <Typography sx={{ marginTop: '3%' }}>
                  <Image src="images/indiaMap.jpg" style={{ width: '60%', marginLeft: '20%' }} />
                </Typography>
              </m.div>

              <Grid
                container
                spacing={6}
                sx={{
                  marginTop: '2%',
                  background: 'linear-gradient(rgb(226, 242, 240) 13.14%, rgba(226, 242, 240, 0) 100%)',
                  clipPath: 'polygon(0px 1%, 100% 28%, 100% 100%, 0px 100%)',
                  padding: '12em 0px 10em',
                }}
              >
                <Grid item xs={12} md={6}>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="h3" sx={{ mb: 3, marginTop: '17%' }}>
                      You need friends in a new city,{' '}
                      <span style={{ color: 'rgb(96 195 173)' }}>so 2,000+ people came together</span>
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inRight}>
                    <Typography
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                        marginBottom: '4%',
                        fontSize: '1rem',
                        fontWeight: '500',
                      }}
                    >
                      The dream only Anindya and Sandeep once shared has now found a niche in the hearts of 2,000+
                      individuals who wake up in the morning just to ensure Stanza Living delivers on the promise made
                      to you.
                    </Typography>
                  </m.div>

                  <m.div>
                    <Link to="/team" style={{ color: 'rgb(96 195 173)', fontSize: '18px', fontWeight: '500' }}>
                      Meet the Dreamweavers
                    </Link>
                  </m.div>
                </Grid>

                <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="images/about_5.jpg"
                      sx={{
                        borderRadius: 2,
                        // boxShadow: shadow,
                        width: { xs: '100%', md: '100%' },
                      }}
                    />
                  </m.div>
                </Grid>
              </Grid>

              <m.div>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                  You inspire our work, <br />
                  <span style={{ color: 'rgb(96 195 173)' }}>so the world notices it too</span>
                </Typography>
                <Grid container sx={{ marginBottom: '8%', marginTop: '2%' }}>
                  <Grid item>
                    <Card sx={{ background: 'rgba(96, 195, 173, 0.08)' }}>
                      <Grid container sx={{ marginLeft: '5%', marginTop: '2%', marginBottom: '2%' }}>
                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                              bottom: { xs: '20%' },
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%', paddingTop: { xs: '100%' } }} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%' }} />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%' }} />
                        </Grid>

                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%' }} />
                        </Grid>

                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%' }} />
                        </Grid>

                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              width: '40%',
                              textAlign: 'center',
                              /* margin-top: 5%; */
                              position: 'relative',
                              top: '25%',
                              left: '10%',
                            }}
                          >
                            ET Now Global Real Estate Congress <br /> 2020
                          </Typography>
                          <Image src="images/about_6.jpg" alt="" style={{ width: '60%' }} />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </m.div>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography
                sx={{ marginBottom: '5%', textAlign: 'center', marginTop: '4%', fontWeight: '500', fontSize: '1rem' }}
              >
                A place that feels like 'home' as soon as you enter it. A place where we steal away your chores and{' '}
                <br />
                replace them with care. A place where you'll have technology in your pocket and your tribe by your
                <br /> side. A place that's all about you. And that is no wishful thinking, but our unwavering PACT with
                you.
              </Typography>

              <Grid container sx={{ marginBottom: '8%' }}>
                <Grid item>
                  <Card
                    sx={{
                      padding: '4%',
                      justifyContent: 'center',
                      textAlign: 'center',
                      width: { md: '70%', xs: '100%' },
                      marginLeft: { md: '15%' },
                    }}
                  >
                    <Grid container spacing={2} sx={{ paddingBottom: '8%' }}>
                      <Grid container spacing={1} sx={{ marginLeft: '2px' }}>
                        <Grid item xs={6}>
                          <Image src="images/about_7.jpg" alt="" style={{ marginTop: '6%' }} />
                        </Grid>
                        <Grid item xs={6}>
                          <Image src="images/about_8.jpg" alt="" />
                        </Grid>

                        <Grid item xs={8} sx={{ marginLeft: '16%' }}>
                          <Image src="images/about_9.jpg" alt="" />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
                          The cushioning of the bed's mattress to the colour of the walls in the hallway and the
                          availability of <br />
                          charging points at an arm's length - every nook and corner of a Stanza Living residence has
                          been
                          <br /> designed to reflect you and your current life stage.
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ paddingBottom: '8%' }}>
                      <Grid container spacing={1} sx={{ marginLeft: '2px' }}>
                        <Grid item xs={6}>
                          <Image src="images/about_10.jpg" alt="" style={{ marginTop: '6%' }} />
                        </Grid>
                        <Grid item xs={6}>
                          <Image src="images/about_11.jpg" alt="" />
                        </Grid>

                        <Grid item xs={8} sx={{ marginLeft: '16%' }}>
                          <Image src="images/about_12.jpg" alt="" />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
                          We know you can't even differentiate between Toor and Chana Dal; forget about learning how to
                          cook.
                          <br /> That you're not quite sure where the detergent goes in the washing machine. That the
                          only time you
                          <br /> used a broom in your room was to make a reel. That's why we're taking the
                          responsibilities of these
                          <br /> chores off your shoulders for good.
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ paddingBottom: '8%' }}>
                      <Grid container spacing={1} sx={{ marginLeft: '2px' }}>
                        <Grid item xs={6}>
                          <Image src="images/about_13.jpg" alt="" style={{ marginTop: '6%' }} />
                        </Grid>
                        <Grid item xs={6}>
                          <Image src="images/about_14.jpg" alt="" />
                        </Grid>

                        <Grid item xs={8} sx={{ marginLeft: '16%' }}>
                          <Image src="images/about_15.jpg" alt="" />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
                          We want your stay with us to stay with you forever. We want you to find your new best friend,
                          your
                          <br /> future business partner, your band or anyone else who can help you grow. That's why we
                          connect you <br />
                          with all of them through Synapse - our Community Programme, to have the best time of your
                          life. Trust
                          <br /> us, you'll look back at this time as the one that changed your life forever.
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ paddingBottom: '8%' }}>
                      <Grid container spacing={1} sx={{ marginLeft: '2px' }}>
                        <Grid item xs={6}>
                          <Image src="images/about_16.jpg" alt="" style={{ marginTop: '6%' }} />
                        </Grid>
                        <Grid item xs={6}>
                          <Image src="images/about_17.jpg" alt="" />
                        </Grid>

                        <Grid item xs={8} sx={{ marginLeft: '16%' }}>
                          <Image src="images/about_18.jpg" alt="" />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
                          In an age where you carry your world around a tiny device, your life shouldn't be stuck in the
                          1990s. Or
                          <br /> even the 2000s. That's why placing service requests, keeping up to date with the latest
                          community <br />
                          events, the entire onboarding process, etcetera etcetera are all at your fingertips through a
                          dedicated
                          <br /> app. So, you could say, we really tech care of you #sorrynotsorry
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '4%', marginBottom: '6%' }}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6} sx={{ marginTop: '4%' }}>
                        <m.div variants={varFade().inRight}>
                          <Typography variant="h2" sx={{ mb: 3, marginTop: '40px' }}>
                            We designed the backdrop of <span style={{ color: 'rgb(96 195 173)' }}>your life</span>
                          </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                          <Typography
                            sx={{
                              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                              fontSize: '1rem',
                            }}
                          >
                            The sofa in the lounge will make you see your bestie and you arguing about whose day was
                            more hectic. The bed in your room will give you a picture of where you'll be scrolling
                            through insta stories. The microwave in the pantry will make you imagine slurping on a
                            piping hot bowl of noodles in the middle of the night. Simply put, you'll see a bit of your
                            life in every spot of the residence. And a place that does that is home
                          </Typography>
                        </m.div>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
                        <m.div variants={varFade().inUp}>
                          <Image
                            alt="our office 1"
                            src="images/about_2.jpg"
                            sx={{
                              borderRadius: 2,
                              // boxShadow: shadow,
                              width: { xs: '100%', md: '100%' },
                            }}
                          />
                        </m.div>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '4%', marginBottom: '6%', background: 'rgb(96, 195, 173)' }}>
                    <Grid container>
                      <Grid item md={6} xs={12}>
                        <Typography variant="h1" sx={{ color: '#fff' }}>
                          <span style={{ color: '#000' }}>It’s uniques</span>
                          <br />
                          It’s our
                          <br /> signature style
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography
                          sx={{ color: '#fff', justifyContent: 'center', paddingTop: '10%', fontSize: '1rem' }}
                        >
                          The buildings that become our residences come in different shapes and sizes. And aren't we
                          glad about that? That way, we can retain their distinct architecture while infusing them with
                          our design philosophy. So that every Stanza Living residence stays unique and yet is uniquely
                          Stanza Living.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '4%', marginBottom: '6%' }}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
                        <m.div variants={varFade().inUp}>
                          <Image
                            alt="our office 1"
                            src="images/about_3.jpg"
                            sx={{
                              borderRadius: 2,
                              // boxShadow: shadow,
                              width: '100%',
                            }}
                          />
                        </m.div>
                      </Grid>

                      <Grid item xs={12} md={6} sx={{ marginTop: '7%' }}>
                        <m.div variants={varFade().inRight}>
                          <Typography variant="h2" sx={{ mb: 3 }}>
                            The inspiration behind it? <span style={{ color: 'rgb(96 195 173)' }}>You.</span>
                          </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                          <Typography
                            sx={{
                              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                              fontSize: '1rem',
                            }}
                          >
                            From something as apparent as the number of drawers in your wardrobe, to something as
                            neglected as the perfect illumination of the lights in the corridors, every aspect of our
                            residence design is detailed to add comfort and convenience to your everyday life. That's
                            the kind of thought you deserve, and we put it into it
                          </Typography>
                        </m.div>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '5%', marginBottom: '6%', background: 'rgb(96, 195, 173)' }}>
                    <Grid container sx={{ background: 'rgb(96, 195, 173)' }} spacing={4}>
                      <Grid item md={6} xs={12}>
                        <Typography sx={{ color: '#fff', paddingTop: '9%', fontSize: '1rem' }}>
                          The buildings that become our residences come in different shapes and sizes. And aren't we
                          glad about that? That way, we can retain their distinct architecture while infusing them with
                          our design philosophy. So that every Stanza Living residence stays unique and yet is uniquely
                          Stanza Living.
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="h1" sx={{ color: '#fff' }}>
                          <span style={{ color: '#000' }}>
                            It reflects your <br /> colours.{' '}
                          </span>
                          Your
                          <br /> stories.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '4%', marginBottom: '6%' }}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6} sx={{ marginTop: '4%' }}>
                        <m.div variants={varFade().inRight}>
                          <Typography variant="h2" sx={{ mb: 3, marginTop: '40px' }}>
                            There’s <span style={{ color: 'rgb(96 195 173)' }}>more room</span> in your room
                          </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                          <Typography
                            sx={{
                              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                            }}
                          >
                            Good news! Your belongings will no longer wrestle for the same space. They can happily
                            coexist in your spacious, fully-furnished room. And when you venture out of your room, the
                            resting area, gaming and entertainment zone and dining area will further add a lot of life
                            to your daily life.
                          </Typography>
                        </m.div>
                      </Grid>

                      <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
                        <m.div variants={varFade().inUp}>
                          <Image
                            alt="our office 1"
                            src="images/about_4.jpg"
                            sx={{
                              borderRadius: 2,
                              // boxShadow: shadow,
                              width: { xs: '100%', md: '100%' },
                            }}
                          />
                        </m.div>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '5%' }}>
                <Grid item>
                  <Card sx={{ padding: '5%', marginBottom: '6%', background: 'rgb(96, 195, 173)' }}>
                    <Grid container sx={{ background: 'rgb(96, 195, 173)' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="h1" sx={{ color: '#fff' }}>
                          Quality&nbsp;
                          <span style={{ color: '#000' }}>
                            that <br />
                            speaks for <br />
                            itself
                          </span>
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography sx={{ color: '#fff', paddingTop: '9%' }}>
                          Take it for granted that the lighting fixtures won't fail when you're tiptoeing to the dining
                          area for a midnight snack. And we test our furniture for sturdiness, anticipating you slumping
                          into it on certain days. But don't just go by our assurance. See and experience it for
                          yourself before giving your nod of approval.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>

          {/* <Card sx={{ width: '70%', marginLeft: '15%', marginTop: '3%' }}> */}
          {/* <TabList
                style={{
                  borderBottom: 0,
                  border: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '80px',
                  color: 'rgb(125, 125, 125)',
                  fontWeight: '700', 
                }}
              >
                <Tab className="react-tabs__tab--selected">The Why</Tab>
                <Tab>The What</Tab>
                <Tab>The How</Tab>
              </TabList> */}
          {/* </Card> */}

          {/* Tab1 */}

          {/* Tab2 */}

          {/* Tab3 */}
        </Grid>
      </Grid>
      {/* </Grid> */}

      {/* </Container> */}
      {/* </RootStyle> */}
    </>
  );
}
