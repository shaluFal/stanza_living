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
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        {/* <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            choose your style
          </Typography>
        </m.div> */}

        <m.div>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontSize: '2rem',
              lineHeight: { lg: '40px', md: '30px' },
              paddingTop: '15px',
            }}
          >
            <span style={{ color: 'rgb(96 195 173)' }}>Not just </span>four walls and a roof
          </Typography>
        </m.div>

        <m.div>
          <Typography
            sx={{
              lineHeight: '35px',
              fontSize: '1.5rem',
              color: 'rgb(78 82 83)',
            }}
          >
            Come over and experience how a place to stay can be so much more
          </Typography>
        </m.div>

        <Grid container spacing={5} sx={{ paddingTop: '140px' }}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Image alt="" src={`images/walls_1.jpg`} style={{ width: '95%' }} />
              </Grid>
              <Grid item xs={6}>
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
          <Grid item xs={12} md={6} sx={{ textAlign: 'left', marginTop: '100px', maxWidth: '475px' }}>
            <Typography variant="h3" sx={{ fontSize: '2rem', lineHeight: '44px', fontWeight: '700' }}>
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
