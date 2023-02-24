import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

// const ScreenStyle = styled(m.div)(({ theme }) => ({
//   paddingRight: 2,
//   paddingBottom: 1,
//   maxWidth: 160,
//   borderRadius: 8,
//   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
//   [theme.breakpoints.up('sm')]: {
//     maxWidth: 320,
//     paddingRight: 4,
//     borderRadius: 12,
//   },
//   '& img': {
//     borderRadius: 8,
//     [theme.breakpoints.up('sm')]: {
//       borderRadius: 12,
//     },
//   },
// }));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};

const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};

const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle>
        <Container>
          <Grid container spacing={5} >
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
              <m.div sx={{ width: '30%' }}>
                <Image alt="light mode" src="images/chores_2.jpg" style={{ width: '50%', marginRight: '40%' }} />
              </m.div>

              <Box component={m.div} sx={{ top: {md: '150px', xs: '80px'}, left: {md: '190px', xs: '140px'}, width: '50%', position: 'absolute' }}>
                <Image alt="dark mode" src="images/chores.jpg" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ textAlign: 'left', marginTop: '100px', maxWidth: '475px' }}>
              <Typography variant='h3' sx={{ fontSize: '2rem', lineHeight: '44px', fontWeight: '700' }}>
                Take your daily list of   <br />chores. And
               from <span style={{ color: 'rgb(96 195 173)', textAlign: 'left' }}>tear it up</span>
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: '26px', marginTop: '16px' }}>
                You have better things to do than wash your clothes, clean up your room and cook your meals. So our team
                of pros will do them all for you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}
