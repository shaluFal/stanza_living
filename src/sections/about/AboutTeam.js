import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Card, Button, Container, Typography, Grid } from '@mui/material';
// _mock_
import { _carouselsMembers } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import SocialsButton from '../../components/SocialsButton';
import { MotionViewport, varFade } from '../../components/animate';
import spotlight1 from "../../images/spotlight_1.jpg";
import spotlight2 from "../../images/spotlight_2.jpg";
import spotlight3 from "../../images/spotlight_3.jpg";
import spotlight4 from "../../images/spotlight_4.jpg";
import spotlight5 from "../../images/spotlight_5.jpg";
import spotlight6 from "../../images/spotlight_6.jpg";
import spotlight7 from "../../images/spotlight_7.jpg";
import spotlight8 from "../../images/spotlight_8.jpg";

// ----------------------------------------------------------------------

export default function AboutTeam() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container component={MotionViewport} sx={{ pb: 10, textAlign: 'center', marginTop: '8%' }}>
      {/* <m.div variants={varFade().inDown}>
        <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
          Dream team
        </Typography>
      </m.div> */}

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          The spotlight on us.
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 630,
            fontSize: "1.2rem",
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
          }}
        >
          We don't just make second homes. We make headlines as well.
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
          <Slider ref={carouselRef} {...settings}>
            {_carouselsMembers.map((member, index) => (
              <Box key={member.id} component={m.div} variants={varFade().in} sx={{ px: 1.5, py: 10, display: 'flex', alignItems:'center' }}>
                {/* <MemberCard member={member} /> */}
                <img src={member.avatar} alt="" width={"250px"} height="100px" />
                {/* <img src={index === 1 && spotlight1} alt="" width={"250px"} height="100px" /> */}
              </Box>
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
      {/* <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={24} height={24} />}
        sx={{ mx: 'auto' }}
      >
        View all team members
      </Button> */}
    </Container>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;

  return (
    <Grid container sx={{height:"100%"}}>
    <Grid item xs={10} sx={{height: "100%"}}>
      <img src={avatar} alt="" width={"100%"} />
    {/* <Image alt={name} src={avatar} ratio="1/1" sx={{ borderRadius: 1.5, width: '100%' }} /> */}
    </Grid>
  </Grid>
  );
}
