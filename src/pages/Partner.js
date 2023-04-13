import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// utils
import { fPercent } from '../utils/formatNumber';
// _mock_
import { _skills } from '../_mock';
// components
import Image from '../components/Image';
import Iconify from '../components/Iconify';
import { MotionViewport, varFade } from '../components/animate';
import Card from '../theme/overrides/Card';
import partner from "../images/partner.jpg";
import partner1 from "../images/partner_1.jpg";
import partner2 from "../images/partner_2.jpg";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',

    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function Partner() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <ContentStyle>
        <m.div
          style={{
            width: { md: '50%', xs: '40%' },
            textAlign: 'center',
            marginLeft: { md: '25%', xs: '0' },
            marginBottom: '5%',
          }}
        >
          <Typography variant="h2" sx={{ marginTop: '30px' }}>
            'You've come to the <br /> <span style={{ color: 'rgb(96 195 173)' }}>right place</span>, partner
          </Typography>
          <Typography sx={{ width: { md: '50%', xs: '40%' }, marginLeft: { md: '25%', xs: '0' }, marginTop: "5px" }}>
            Whatever we've achieved in the past few years has been made possible due to the mutual support and
            cooperation of the people we proudly call our partners. If you too wish to make your property earn to the
            best of its ability, find captive mainspace for your products or services, and/or provide the best living
            experience for your people, you've come to the right place.
          </Typography>
        </m.div>
      </ContentStyle>

      
      <Container component={MotionViewport}>
        <Grid container spacing={6} sx={{ marginBottom: '10%' }}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '22%' }}>
                Your property in the <span style={{ color: 'rgb(96 195 173)' }}>right hands</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                No matter what you're looking to lease out - an apartment, a house, an under-construction building, an
                existing hostel/PG or something else altogether, we have a plan for it. We can not only help your
                property mint money for you but also turn it into a local landmark. Partner with us and turn your asset
                into a growing business
              </Typography>

              <Typography sx={{ marginTop: '2%' }}>Read more about the plan:</Typography>

              <Typography sx={{ marginTop: '2%' }}>
                For your building plot:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '2%' }}>
                For your building apartment:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '4%' }}>
                Leave your details here for us to contact you :{' '}
                <Button variant="contained" style={{ marginLeft: '5%' }}>
                  Contact Us
                </Button>
              </Typography>
            </m.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="our office 1"
                src={partner}
                sx={{
                  borderRadius: 2,
                  // boxShadow: shadow,
                  width: { xs: '100%', md: '100%' },
                }}
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid container spacing={6} sx={{ marginBottom: '10%' }}>
          <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="our office 1"
                src={partner1}
                sx={{
                  borderRadius: 2,
                  // boxShadow: shadow,
                  width: { xs: '100%', md: '100%' },
                }}
              />
            </m.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '22%' }}>
                Your people in the <span style={{ color: 'rgb(96 195 173)' }}>right care</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                You care for your people, and so do we. Let's give them more than just four walls and a roof. Let's give
                them a place where they'll feel taken care of. From safety to amenities, we'll leave them wanting
                nothing. And for this to happen, all you have to do is to partner with us (and your people will thank
                you for it).
              </Typography>
              <Typography sx={{ marginTop: '2%' }}>Read more about the plan:</Typography>

              <Typography sx={{ marginTop: '2%' }}>
                For your building plot:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '2%' }}>
                For your building apartment:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '4%' }}>
                Leave your details here for us to contact you :{' '}
                <Button variant="contained" style={{ marginLeft: '5%' }}>
                  Contact Us
                </Button>
              </Typography>
            </m.div>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '20%' }}>
                Your product with the <span style={{ color: 'rgb(96 195 173)' }}>right consumer</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                As a growing company, we're always looking for people who can take care of our daily, weekly, monthly
                and yearly supply needs. From pulses for our kitchens to printers for our office, If you think you have
                something we might need, we're all ears. Contact us and see your business have a pan India presence in
                no time.
              </Typography>
              <Typography sx={{ marginTop: '2%' }}>Read more about the plan:</Typography>

              <Typography sx={{ marginTop: '2%' }}>
                For your building plot:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '2%' }}>
                For your building apartment:{' '}
                <Button variant="outlined" style={{ marginLeft: '5%' }}>
                  Download Brochure
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '4%' }}>
                Leave your details here for us to contact you :{' '}
                <Button variant="contained" style={{ marginLeft: '5%' }}>
                  Contact Us
                </Button>
              </Typography>
            </m.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ pr: { md: 7 } }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="our office 1"
                src={partner2}
                sx={{
                  borderRadius: 2,
                  // boxShadow: shadow,
                  width: { xs: '100%', md: '100%' },
                }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
