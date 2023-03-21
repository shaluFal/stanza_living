import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const IMG = [...Array(10)].map(
  (_, index) => `https://minimal-assets-api-dev.vercel.app/assets/images/home/clean-${index + 1}.png`
);

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(8),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    zIndex: 11,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function HomeCleanInterfaces() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        {/* <ContentStyle> */}
        {/* <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              clean & clear
            </Typography>
          </m.div> */}

        {/* </ContentStyle> */}

        <Grid container spacing={15}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Image alt="" src={`images/pgfood_1.jpg`} style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Image alt="" src={`images/pgfood_2.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>

                  <Grid item xs={12}>
                    <Image alt="" src={`images/pgfood_3.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left', marginTop: '100px', maxWidth: '475px' }}>
            <Typography variant="h3" sx={{ fontSize: '3rem', lineHeight: '50px', fontWeight: '700', mb:1 }}>
              Don't come expecting
              <br /> from <span style={{ color: 'rgb(96 195 173)', textAlign: 'left' }}>"hostel-PG food"</span>
            </Typography>
            <Typography sx={{ fontSize: '1.2rem', lineHeight: '26px', marginTop: '16px' }}>
              Instead, bring along a big appetite for healthy,<br/> yummy meals. With flavours that have a local touch.<br/> And
              that, at the same time, take your taste buds on<br/> a journey back home.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
