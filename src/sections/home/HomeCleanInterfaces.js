import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Typography, useTheme } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const IMG = [...Array(10)].map(
  (_, index) => `https://minimal-assets-api-dev.vercel.app/assets/images/home/clean-${index + 1}.png`
);

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
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
      <Container component={MotionViewport} sx={{ marginTop: '20%', marginBottom: '10%' }}>
        <ContentStyle>
          {/* <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              clean & clear
            </Typography>
          </m.div> */}

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                ...(!isLight && {
                  textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }),
              }}
            >
              Don't come expecting "hostel-PG food"
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary'),
              }}
            >
              Instead, bring along a big appetite for healthy, yummy meals. With flavours that have a local touch. And
              that, at the same time, take your taste buds on a journey back home.
            </Typography>
            <Image alt="" src={`/images/pgfood_3.jpg`} sx={{ width: '95%', marginTop: '5%', marginLeft: '5%' }} />
          </m.div>
        </ContentStyle>

        <Box sx={{ position: 'relative', left: '55%' }}>
          <Image alt="" src={`/images/pgfood_1.jpg`} sx={{ width: '25%' }} />
          <Image alt="" src={`/images/pgfood_2.jpg`} sx={{ width: '35%', marginTop: '2%' }} />
        </Box>
      </Container>
    </RootStyle>
  );
}
