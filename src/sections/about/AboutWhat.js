import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
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

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={6} sx={{ marginBottom: '10%' }}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '40px' }}>
                We didn't find it for us, <span style={{ color: 'rgb(96 195 173)' }}>so we created it for you</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
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
                src="images/about.jpg"
                sx={{
                  borderRadius: 2,
                  // boxShadow: shadow,
                  width: '100%',
                }}
              />
            </m.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '40px' }}>
                You needed a place like home, <span style={{ color: 'rgb(96 195 173)' }}>so we moved back home</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and Sandeep, met again. Reminiscing about the
                'good old hostel days', they realised a lot of that 'good' could've been better. So to give youngsters
                that 'better', in 2017, they set up a base in New Delhi, and the rest, as we say, is the present.
              </Typography>
            </m.div>
          </Grid>
        </Grid>

        <Grid container spacing={6} sx={{ marginBottom: '10%' }}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '40px' }}>
                We designed the backdrop of <span style={{ color: 'rgb(96 195 173)' }}>your life</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                The sofa in the lounge will make you see your bestie and you arguing about whose day was more hectic.
                The bed in your room will give you a picture of where you'll be scrolling through insta stories. The
                microwave in the pantry will make you imagine slurping on a piping hot bowl of noodles in the middle of
                the night. Simply put, you'll see a bit of your life in every spot of the residence. And a place that
                does that is home
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

        <Grid container spacing={6} sx={{ marginBottom: '10%' }}>
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

          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '40px' }}>
                The inspiration behind it? <span style={{ color: 'rgb(96 195 173)' }}>You.</span>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                From something as apparent as the number of drawers in your wardrobe, to something as neglected as the
                perfect illumination of the lights in the corridors, every aspect of our residence design is detailed to
                add comfort and convenience to your everyday life. That's the kind of thought you deserve, and we put it
                into it
              </Typography>
            </m.div>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, marginTop: '40px' }}>
                There’s <span style={{ color: 'rgb(96 195 173)' }}>more room</span> in your room
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                Good news! Your belongings will no longer wrestle for the same space. They can happily coexist in your
                spacious, fully-furnished room. And when you venture out of your room, the resting area, gaming and
                entertainment zone and dining area will further add a lot of life to your daily life.
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
      </Container>
    </RootStyle>
  );
}
