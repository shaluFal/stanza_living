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
import phone from "../../images/phone.jpg";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: 'rgb(225, 240, 239)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomePricingPlans() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container>
        <Box sx={{ mb: 10, textAlign: 'center', marginTop: '2%' }}>
          <m.div>
            <Grid container spacing={8}>
              <Grid item xs={12} md={8} sx={{ textAlign: 'left' }}>
                <Typography sx={{ mb: 3, fontSize: '3.5rem', lineHeight: '1em', fontWeight: '700' }}>
                  Always have us
                </Typography>
                <Typography sx={{ color: 'rgb(96 195 173)', fontSize: '3.5rem', lineHeight: '1em', fontWeight: '700' }}>
                  at your fingertips
                </Typography>

                <Grid container spacing={4} sx={{ marginTop: '7%', textAlign: 'left' }}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '2rem', lineHeight: '1em', fontWeight: '600' }}>
                      Tell us what you crave
                    </Typography>
                    <Divider sx={{ border: '2px solid rgb(96 195 173)', width: '12%', marginTop: '3%' }} />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: '5%' }}>
                    <Typography sx={{ fontSize: '1.2rem', lineHeight: '1.4em' }}>
                      Not only are our meals deliciously homely, they are also customisable. Pick and choose from our
                      varied menu on the app and we'll serve it up, piping hot.
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '2rem', lineHeight: '1em', fontWeight: '600' }}>
                      All payments and dues, in one place
                    </Typography>
                    <Divider sx={{ border: '2px solid rgb(96 195 173)', width: '12%', marginTop: '3%' }} />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: '5%' }}>
                    <Typography sx={{ fontSize: '1.2rem', lineHeight: '1.4em' }}>
                      No running around here and there paying all your bills. While paying, tracking and managing your
                      rent and other expenses on your app, the only thing that'll move would be your fingertips.
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '2rem', lineHeight: '1em', fontWeight: '600' }}>
                      Be heard. Without saying a word
                    </Typography>
                    <Divider sx={{ border: '2px solid rgb(96 195 173)', width: '12%', marginTop: '3%' }} />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: '5%' }}>
                    <Typography sx={{ fontSize: '1.2rem', lineHeight: '1.4em' }}>
                      If you need help with anything, wish to register a complaint, or if you think we can do something
                      better, do tell us through the support and real-time feedback feature on the app.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Image alt="" src={phone} style={{ paddingTop: '30%' }} />
              </Grid>
            </Grid>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
