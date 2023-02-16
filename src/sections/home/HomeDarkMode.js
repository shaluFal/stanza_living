import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(18, 0),
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
        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <m.div  sx={{width: '30%'}}>
              <Image alt="light mode" src="images/room_2.jpg" style={{width: '60%', marginLeft: "40%"}}/>
            </m.div>

            <Box component={m.div} sx={{ top: '150px', right: '190px', width: '60%' ,position: "absolute"}}>
              <Image alt="dark mode" src="images/room_1.jpg" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <m.div>
                <Typography sx={{ mb: 3, fontSize: '3rem', lineHeight: '44px', fontWeight: '500' }}>
                  Step into a room that has <span style={{ color: 'rgb(96 195 173)' }}>room for everything</span>
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
