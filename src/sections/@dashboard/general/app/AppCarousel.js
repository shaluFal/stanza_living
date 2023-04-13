import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import React, { useState, useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Link, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import API from '../../../../Helper/api';
import { MotionContainer, varFade } from '../../../../components/animate';
import { CarouselDots, CarouselArrows } from '../../../../components/carousel';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 4,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.2),
}));

// ----------------------------------------------------------------------

AppCarousel.propTypes = {
  list: PropTypes.array.isRequired,
};

export default function AppCarousel({ list, ...other }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? list.length - 1 : 0);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 9,
      top: 24,
      left: 24,
      position: 'absolute',
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
      <Card {...other}>
        <Slider ref={carouselRef} {...settings}>
          {list.map((app, index) => (
            <CarouselItem key={app.id} item={app} isActive={index === currentIndex} index={index + 1} />
            //  <p>{ app.photoURL}</p>
          ))}
        </Slider>

        <CarouselArrows
          onNext={handleNext}
          onPrevious={handlePrevious}
          spacing={{
            md: 40,
            xs: 32,
          }}
          sx={{
            // top: {md: 400, xs: 100},
            bottom: 25,
            left: { md: 50 },
            right: { md: 50 },
            // position: 'absolute',
            '& .arrow': {
              p: 0,
              width: { xs: 30, md: 200 },
              // height: 100,
              opacity: 0.5,
              color: 'common.grey',
              '&:hover': { color: 'common.grey', opacity: 2 },
            },
          }}
        />
      </Card>
    </>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.shape({
    image: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive, index }) {
  const { photoURL } = item;

  return (
    <Box sx={{ position: 'relative' }}>
      {/* <OverlayStyle /> */}

      <Image
        alt=""
        src={photoURL}
        // sx={{ height: { xs: 300, md: 260, lg: 512 }, width: { xs: 320, md: 1200, lg: 900 }, textAlign: 'left' }}
        sx={{ maxHeight: '100%', maxWidth: '100%', textAlign: 'left' }}
      />
    </Box>
  );
}
