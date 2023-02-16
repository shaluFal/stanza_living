import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography } from '@mui/material';
// _mock_
import { _homePlans } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: 'rgb(225, 240, 239)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomePricingPlans() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ mb: 10, textAlign: 'center', marginTop: '5%' }}>
          <m.div>
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <Typography sx={{ mb: 3, fontSize: '4em', lineHeight: '1em' }}>Always have us</Typography>
                <Typography sx={{ color: 'rgb(96 195 173)', fontSize: '4em', lineHeight: '0.5em' }}>
                  at your fingertips
                </Typography>

                {/* <Typography>Tell us what you crave</Typography>
                <Typography>Not only are our meals deliciously homely, they are also customisable. Pick and choose from our varied 
                  menu on the app and we'll serve it up, piping hot.</Typography>

                  <Typography>All payments and dues, in one place</Typography>
                  <Typography>No running around here and there paying all your bills. While paying, tracking and managing your rent 
                    and other expenses on your app, the only thing that'll move would be your fingertips.</Typography>

                    <Typography>Be heard. Without saying a word</Typography>
                    <Typography>If you need help with anything, wish to register a complaint, or if you think we can do something better, 
                      do tell us through the support and real-time feedback feature on the app.</Typography> */}
              </Grid>
              <Grid item xs={4}>
                {/* <div style={{ backgroundColor: '#8bca84', width: '100%', height: '100%', borderRadius: '100%' }}> */}
                  <Image alt="" src={`images/phone.jpg`} />
                {/* </div> */}
              </Grid>
            </Grid>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
