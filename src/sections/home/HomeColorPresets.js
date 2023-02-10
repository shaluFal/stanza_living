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
          <Typography variant="h2" sx={{ mb: 3 }}>
            Take your daily list of chores. And tear it up
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary'),
            }}
          >
            You have better things to do than wash your clothes, clean up your room and cook your meals. So our team of pros will do them all for you.
          </Typography>
        </m.div>


        <Box sx={{ position: 'relative', marginLeft: '20%', marginTop: '5%', marginBottom: '15%' }}>
          {/* <Image
            disabledEffect
            alt="grid"
            src="images/chores_2.jpg"
          /> */}

          <Box sx={{ position: 'absolute', top: 0, width: '80%' }}>
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="screen"
                src={`/images/chores.jpg`}
              />
            </m.div>
          </Box>

          <Box sx={{ position: 'absolute', top: 0, width: '30%' }}>
            <m.div variants={varFade().inDown}>
              <m.div animate={{ y: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity }}>
                <Image
                  disabledEffect
                  alt="sidebar"
                  src={`/images/chores_2.jpg`}
                />
              </m.div>
            </m.div>
          </Box>

          {/* <Box sx={{ position: 'absolute', top: 0 }}>
            <m.div variants={varFade().inDown}>
              <m.div animate={{ y: [-5, 10, -5] }} transition={{ duration: 8, repeat: Infinity }}>
                <Image
                  disabledEffect
                  alt="sidebar"
                  src={`https://minimal-assets-api-dev.vercel.app/assets/images/home/theme-color/block2-${themeColorPresets}.png`}
                />
              </m.div>
            </m.div>
          </Box> */}
{/* 
          <Box sx={{ position: 'absolute', top: 0 }}>
            <m.div variants={varFade().inDown}>
              <m.div animate={{ y: [-25, 5, -25] }} transition={{ duration: 10, repeat: Infinity }}>
                <Image
                  disabledEffect
                  alt="sidebar"
                  src={`images/chores.jpg`}
                />
              </m.div>
            </m.div>
          </Box> */}
        </Box>
      </Container>
    </RootStyle>
  );
}
