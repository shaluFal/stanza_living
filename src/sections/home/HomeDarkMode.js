import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(5),
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
    <RootStyle
      sx={{
        background: 'linear-gradient(rgb(226, 242, 240) 13.14%, rgba(226, 242, 240, 0) 100%)',
        transform: 'matrix(1, 0, 0, -1, 0, 0) rotate(0deg)',
        clipPath: {md: 'polygon(0px 1%, 100% 28%, 100% 100%, 0px 100%)', xs: 0},
      }}
    >
      <Container sx={{ position: 'relative', transform: 'matrix(1, 0, 0, -1, 0, 0) rotate(0deg)' }}>
        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between" sx={{paddingBottom: "165px"}}>
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <m.div sx={{ width: '30%' }}>
              <Image alt="light mode" src="images/room_2.jpg" style={{ width: '50%', marginLeft: '40%' }} />
            </m.div>

            <Box
              component={m.div}
              sx={{
                top: { md: '150px', xs: '100px' },
                right: { md: '220px', xs: '100px' },
                width: '50%',
                position: 'absolute',
              }}
            >
              <Image alt="dark mode" src="images/room_1.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <m.div>
                <Typography variant='h3' sx={{ mb: 3, fontSize: '2rem', lineHeight: '44px', fontWeight: '700' }}>
                  Step into a room that has <br/><span style={{ color: 'rgb(96 195 173)' }}>room for everything</span>
                </Typography>
              </m.div>

              <m.div>
                <Typography sx={{ color: 'black', mb: 5 }}>
                  Your clothes and bag will not be fighting for space on the same chair. At Coliving, there's ample room
                  for all your possessions. Even a framed photo of your family, for the rare occasions you miss home
                </Typography>
              </m.div>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
