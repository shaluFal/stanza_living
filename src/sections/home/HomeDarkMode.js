import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: '#fff',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.8,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              {/* <m.div variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  Easy switch between styles.
                </Typography>
              </m.div> */}

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'black' }}>
                  Step into a room that has room for everything
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'black', mb: 5 }}>
                Your clothes and bag will not be fighting for space on the same chair.
                At Coliving, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home
                </Typography>
              </m.div>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="light mode"
                src="/images/room_1.jpg"
              />
            </m.div>

            <Box component={m.div} variants={varFade().inDown} sx={{ top: 0, right: 0, position: 'absolute', width: '55%' }}>
              <Image alt="dark mode" src="/images/room_2.jpg" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
