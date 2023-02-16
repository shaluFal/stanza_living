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
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  const { themeColorPresets, onChangeColor, colorOption } = useSettings();

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative', textAlign: 'center' }}>
        {/* <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            choose your style
          </Typography>
        </m.div> */}

        <m.div variants={varFade().inUp}>
          <Typography
            variant="h1"
            sx={{ mb: 3, fontSize: '4.2rem', lineHeight: '50px', paddingTop: '15px', paddingBottom: '15px' }}
          >
            <span style={{ color: 'rgb(96 195 173)' }}>Not just </span>four walls and a roof
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              lineHeight: '26px',
              fontSize: '2rem',
              color: 'rgb(78 82 83)',
            }}
          >
            Come over and experience how a place to stay can be so much more
          </Typography>
        </m.div>

       

        <Grid container spacing={5} sx={{ paddingTop: '150px' }}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12} md={8} lg={6}>
                <Image alt="" src={`images/walls_1.jpg`} style={{ width: '94%' }} />
              </Grid>
              <Grid item xs={12} md={4} lg={6}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Image alt="" src={`images/walls_2.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>

                  <Grid item>
                    <Image alt="" src={`images/walls_3.jpg`} style={{ borderRadius: '10px 10px' }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'left', marginTop: '100px', maxWidth: '475px' }}>
            <Typography sx={{ fontSize: '3rem', lineHeight: '44px', fontWeight: '500' }}>
              Start living your best life
              <br /> from <span style={{ color: 'rgb(96 195 173)', textAlign: 'left' }}>day one</span>
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: '26px', marginTop: '16px' }}>
              Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else -
              furniture, appliances, food - has already been taken care of.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
