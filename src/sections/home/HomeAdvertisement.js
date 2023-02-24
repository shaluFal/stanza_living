import { capitalCase } from 'change-case';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
  Grid,
} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0)
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const { themeColorPresets, onChangeColor, colorOption } = useSettings();

  return (
    <RootStyle 
    sx={{
      background: 'linear-gradient(rgb(226, 242, 240) 13.14%, rgba(226, 242, 240, 0) 100%)',
      clipPath: {md: 'polygon(0px 1%, 100% 28%, 100% 100%, 0px 100%)', xs: 0},
    }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', textAlign: 'center'}}>
        <Grid container spacing={5} sx={{ paddingTop: '110px' }}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left', marginTop: '100px', maxWidth: '475px' }}>
            <Typography variant="h3" sx={{ fontSize: '2rem', lineHeight: '44px', fontWeight: '700' }}>
              Chill in a<span style={{ color: 'rgb(96 195 173)', textAlign: 'left' }}> common area <br/> </span>
              that's anything but common
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: '26px', marginTop: '16px' }}>
              Nope, we don't try to pass off a few plastic chairs and a TV as a common area. We've replaced them with
              sofas, bean bags and large-screen TVs. And we've also added gaming zones, fitness centres and chillout
              corners as a bonus.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6} >
                <Grid container spacing={2}>
                  <Grid item>
                    <Image alt="" src={`images/chill_1.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>

                  <Grid item>
                    <Image alt="" src={`images/chill_2.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Image alt="" src={`images/chill_3.jpg`} style={{ width: '94%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
