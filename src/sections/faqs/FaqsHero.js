import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Stack, InputAdornment, Grid, Typography, Card } from '@mui/material';

// components
import Iconify from '../../components/Iconify';
import InputStyle from '../../components/InputStyle';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

import Image from '../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // backgroundSize: 'cover',
  // backgroundImage:
  //   'url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/faqs/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function FaqsHero() {
  return (
    // <RootStyle>
    <Container sx={{ textAlign: 'center', marginTop: '5%' }}>
      {/* <ContentStyle> */}

      <h1>
        The Stars of the <span style={{ color: 'rgb(96 195 173)' }}>“STANZAVERSE”</span>
      </h1>
      <p>
        Our team's full of undiscovered Da Vincis, aspiring master chefs, budding triathlon finishers, IMDB top
        <br /> 250 encyclopedias, and more. But what they do in the office is even better. Thanks to them, as of today,
        <br /> we're one of India's hottest startups.
      </p>
      {/* </ContentStyle> */}
      <Grid container spacing={7} sx={{ marginTop: '4%', marginBottom: '5%' }}>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>

        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
        <Grid item xs={4} md={3}>
          <Card sx={{padding: "4%", textAlign: "left"}}>
          <Image
            alt="our office 1"
            src="images/team.jpg"
            sx={{
              borderRadius: 2,
              // boxShadow: shadow,
              width: '100%',
              padding: "2%"
            }}
          />
          <Typography variant="h5" sx={{color: "rgb(96 195 173)"}}>Nupur Chhibber</Typography>
          <Typography>Vice President</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
    // </RootStyle>
  );
}
