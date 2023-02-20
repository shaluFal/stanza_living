import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 100,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',

    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    // <RootStyle>
    <Container>
      <ContentStyle>
        {/* <TextAnimate text="Who" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="are?" />
          </Box> */}

        <m.div>
          <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '30px' }}>
            About <span style={{ color: 'rgb(96 195 173)' }}>Us</span>
          </Typography>
        </m.div>
      </ContentStyle>
    </Container>
    // </RootStyle>
  );
}
